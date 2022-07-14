import { useQuery } from 'react-query'

import { getAllChirps } from '/@/data/http/chirpRepository'

import { Chirp } from '/@/components/Chirp/Chirp'

export default function IndexPage() {
  const chirps = useQuery('/chirps', getAllChirps)

  if (!chirps.data) {
    return null
  }

  return (
    <div>
      Index
      <br />
      {chirps.data.map((chirp) => (
        <Chirp
          chirp={chirp}
          key={chirp.id}
          hasRelated={chirp.related && chirp.related.length > 0}
        />
      ))}
    </div>
  )
}
