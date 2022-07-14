import { useQuery } from 'react-query'
import { useParams } from 'react-router-dom'

import { Chirp } from '/@/components/Chirp/Chirp'

import { getChirpTree } from '/@/data/http/chirpRepository'

export default function ChirpPage() {
  const params = useParams()

  const chirpId = params.chirpId

  const chirp = useQuery('/chirps', () => getChirpTree(Number(chirpId)))

  if (!chirp.data) {
    return null
  }

  const chirpsOnThread = chirp.data.thread

  const replyChirps = chirp.data.replys

  return (
    <div>
      <h3>Chirp</h3>
      <br />

      {chirp.data.parent ? (
        <>
          <Chirp chirp={chirp.data.parent} key={chirp.data.parent.id} />

          <br />
          <br />
          <br />
        </>
      ) : null}

      {chirpsOnThread.map((chirp, index) => (
        <Chirp
          isOnThread
          chirp={chirp}
          key={chirp.id}
          isMainChirp={index === 0}
          isLastOnThread={index === chirpsOnThread.length - 1}
        />
      ))}

      <br />
      <br />
      <br />
      <h3>Respostas</h3>
      <br />

      {replyChirps.map((chirp) => (
        <Chirp key={chirp.id} chirp={chirp} />
      ))}

      <br />
      <br />
    </div>
  )
}
