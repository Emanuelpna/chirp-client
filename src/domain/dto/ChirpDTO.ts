import { AuthorDTO } from './AuthorDTO'

export type ChirpDTO = {
  id: number
  createdAt: string
  updatedAt: string
  published: boolean
  isRechirp: boolean
  likes: number
  authorId: number
  author: AuthorDTO
  content: string | null
  parentToId: number | null
  scheduledTo: string | null
}

export type ChirpTreeDTO = ChirpDTO & {
  related: ChirpDTO[]
}
