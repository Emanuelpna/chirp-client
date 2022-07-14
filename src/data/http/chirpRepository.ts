import { http } from './http'

import { ChirpDTO, ChirpTreeDTO } from '/@/domain/dto/ChirpDTO'
import { Chirp, ChirpTree } from '/@/domain/model/Chirp'

import { ChirpBuilder } from '/@/data/builders/chirpBuilder'

export const getAllChirps = async (): Promise<ChirpTree[]> => {
  const chirps = await http<{ items: ChirpTreeDTO[] }>('/chirps')

  return chirps.items.map((chirp) => ChirpBuilder.toChirpTreeModel(chirp))
}

type ChirpTreeAPI = { parent: Chirp | null; replys: Chirp[]; thread: Chirp[] }
type ChirpTreeDTOAPI = {
  parent: ChirpDTO | null
  replys: ChirpDTO[]
  thread: ChirpDTO[]
}

export const getChirpTree = async (chirpId: number): Promise<ChirpTreeAPI> => {
  const chirp = await http<ChirpTreeDTOAPI>('/chirps/tree', { chirpId })

  return {
    parent: chirp.parent ? ChirpBuilder.toChirpModel(chirp.parent) : null,
    replys: chirp.replys.map((chirp) => ChirpBuilder.toChirpModel(chirp)),
    thread: chirp.thread.map((chirp) => ChirpBuilder.toChirpModel(chirp))
  }
}