import { Chirp, ChirpTree } from '/@/domain/model/Chirp'
import { ChirpDTO, ChirpTreeDTO } from '/@/domain/dto/ChirpDTO'

export class ChirpBuilder {
  private transformDTO(
    chirpDTO: ChirpDTO
  ): Pick<Chirp, 'createdAt' | 'updatedAt' | 'scheduledTo'> {
    return {
      createdAt: new Date(chirpDTO.createdAt),
      updatedAt: new Date(chirpDTO.updatedAt),
      scheduledTo: chirpDTO.scheduledTo ? new Date(chirpDTO.scheduledTo) : null
    }
  }

  static toChirpModel(chirpDTO: ChirpDTO): Chirp {
    const chirpBuilder = new ChirpBuilder()

    const newChirp: Chirp = {
      ...chirpDTO,
      ...chirpBuilder.transformDTO(chirpDTO)
    }

    return newChirp
  }

  static toChirpTreeModel(chirpDTO: ChirpTreeDTO): ChirpTree {
    const chirpBuilder = new ChirpBuilder()

    const relatedChirps: Chirp[] = chirpDTO.related?.map((chirp) => ({
      ...chirp,
      ...chirpBuilder.transformDTO(chirp)
    }))

    const newChirp: ChirpTree = {
      ...chirpDTO,
      ...chirpBuilder.transformDTO(chirpDTO),
      related: relatedChirps ?? []
    }

    return newChirp
  }
}
