import { useMutation, useQuery } from 'react-query'

import {
  getAllChirps,
  rechirpChirp,
  updateChirpLikeCount
} from '/@/data/http/chirpRepository'

import { Chirp } from '/@/components/Chirp/Chirp'
import { Title } from '/@/components/Title/Title'

export default function IndexPage() {
  const chirps = useQuery('/chirps', getAllChirps)

  const likeChirp = useMutation(
    (chirp: { id: number }) => updateChirpLikeCount(Number(chirp.id)),
    {
      onSuccess: () => {
        chirps.refetch()
      }
    }
  )

  const rechirp = useMutation(
    (chirp: { author: number; id: number }) =>
      rechirpChirp({
        likes: 0,
        isRechirp: true,
        published: true,
        parentToId: chirp.id,
        authorId: chirp.author
      }),
    {
      onSuccess: () => {
        chirps.refetch()
      }
    }
  )

  const allChirps = chirps.data ?? []

  return (
    <div>
      <Title as="h2">Chirp</Title>

      {allChirps.map((chirp) => (
        <Chirp
          chirp={chirp}
          key={chirp.id}
          onLikeChirp={() => chirp && likeChirp.mutate({ id: chirp.id })}
          onReChirp={() =>
            chirp && rechirp.mutate({ author: chirp.author.id, id: chirp.id })
          }
        />
      ))}
    </div>
  )
}
