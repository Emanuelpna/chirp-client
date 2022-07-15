import { useParams } from 'react-router-dom'
import { useMutation, useQuery } from 'react-query'

import {
  getChirpTree,
  updateChirpLikeCount
} from '/@/data/http/chirpRepository'

import { Chirp } from '/@/components/Chirp/Chirp'
import { Title } from '/@/components/Title/Title'

export default function ChirpPage() {
  const params = useParams()

  const chirpId = params.chirpId
  const authorId = params.authorId

  const chirp = useQuery(['/chirps/tree', chirpId, authorId], () =>
    getChirpTree(Number(chirpId), Number(authorId))
  )

  const likeChirp = useMutation(
    (chirp: { id: number }) => updateChirpLikeCount(Number(chirp.id)),
    {
      onSuccess: () => {
        chirp.refetch()
      }
    }
  )

  if (!chirp.data) {
    return null
  }

  const replyChirps = chirp.data.replys ?? []
  const chirpsOnThread = chirp.data.thread ?? []

  return (
    <div>
      <Title as="h2" backButton="/">
        Chirp
      </Title>

      {chirp.data.parent ? (
        <>
          <Chirp
            chirp={chirp.data.parent}
            key={chirp.data.parent.id}
            onLikeChirp={() =>
              chirp.data.parent &&
              likeChirp.mutate({ id: chirp.data.parent.id })
            }
          />

          <Title as="h3">Resposta do Chirp acima</Title>
        </>
      ) : null}

      {chirpsOnThread.map((chirp, index) => (
        <Chirp
          isOnThread
          chirp={chirp}
          key={chirp.id}
          isMainChirp={index === 0}
          isLastOnThread={index === chirpsOnThread.length - 1}
          onLikeChirp={() => chirp && likeChirp.mutate({ id: chirp.id })}
        />
      ))}

      {replyChirps.length > 0 ? <Title as="h2">Respostas</Title> : null}

      {replyChirps.map((chirp) => (
        <Chirp
          key={chirp.id}
          chirp={chirp}
          onLikeChirp={() => chirp && likeChirp.mutate({ id: chirp.id })}
        />
      ))}
    </div>
  )
}
