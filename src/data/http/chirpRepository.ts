import { http } from './http'

import { ChirpDTO, ChirpTreeDTO } from '/@/domain/dto/ChirpDTO'
import { Chirp, ChirpTree } from '/@/domain/model/Chirp'

import { ChirpBuilder } from '/@/data/builders/chirpBuilder'

export const getAllChirps = async (): Promise<ChirpTree[]> => {
  const chirps = await http.get<{ items: ChirpTreeDTO[] }>('/chirps')

  return chirps.items.map((chirp) => ChirpBuilder.toChirpTreeModel(chirp))
}

type ChirpTreeAPI = { parent: Chirp | null; replys: Chirp[]; thread: Chirp[] }
type ChirpTreeDTOAPI = {
  parent: ChirpDTO | null
  replys: ChirpDTO[]
  thread: ChirpDTO[]
}

export const getChirpTree = async (
  chirpId: number,
  authorId: number
): Promise<ChirpTreeAPI> => {
  const chirp = await http.get<ChirpTreeDTOAPI>('/chirps/tree', {
    chirpId,
    authorId
  })

  return {
    parent: chirp.parent ? ChirpBuilder.toChirpModel(chirp.parent) : null,
    replys: chirp.replys.map((chirp) => ChirpBuilder.toChirpModel(chirp)),
    thread: chirp.thread.map((chirp) => ChirpBuilder.toChirpModel(chirp))
  }
}

export const updateChirpLikeCount = async (
  chirpId: number
): Promise<ChirpDTO> => {
  const chirp = await http.put<{ payload: ChirpDTO }>('/chirps/like', {
    chirpId
  })

  return chirp.payload
}

type RechirpPayloadModel = {
  likes: number
  authorId: number
  parentToId: number
  published: boolean
  isRechirp: boolean
}

export const rechirpChirp = async (
  reChirp: RechirpPayloadModel
): Promise<ChirpDTO> => {
  const chirp = await http.post<{ payload: ChirpDTO }>(
    '/chirps/rechirp',
    reChirp
  )

  return chirp.payload
}
