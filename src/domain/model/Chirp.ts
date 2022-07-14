import { Author } from './Author'

export type Chirp = {
  id: number
  createdAt: Date
  updatedAt: Date
  published: boolean
  isRechirp: boolean
  likes: number
  authorId: number
  author: Author
  content: string | null
  scheduledTo: Date | null
  parentToId: number | null
}

export type ChirpTree = Chirp & {
  related: Chirp[]
}
