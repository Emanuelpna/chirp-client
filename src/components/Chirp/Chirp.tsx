import { useState } from 'react'
import { HeartIcon as HeartIconSolid } from '@heroicons/react/solid'
import { HeartIcon as HeartIconOutline } from '@heroicons/react/outline'

import { Chirp as ChirpModel } from '/@/domain/model/Chirp'

import * as S from './styles'

type ChirpProps = {
  chirp: ChirpModel
  isOnThread?: boolean
  isMainChirp?: boolean
  isLastOnThread?: boolean
  onLikeChirp?: (chirpId: number) => void
}

export function Chirp({
  chirp,
  isOnThread = false,
  isMainChirp = false,
  isLastOnThread = false,
  onLikeChirp
}: ChirpProps) {
  const [chirpLiked, setChirpLiked] = useState(false)

  const onLikeChirpCallback = () => {
    onLikeChirp?.(chirp.id)

    setChirpLiked(true)
  }

  if (!chirp) {
    return null
  }

  return (
    <S.ChirpContainer
      className={`${isOnThread ? 'thread' : ''} ${isMainChirp ? 'main' : ''} ${
        isLastOnThread ? 'last-thread' : ''
      }`}
    >
      <S.ChirpAuthorContainer>
        <S.ChirpAuthorAvatar src={chirp.author.avatar} alt="" />

        <S.ChirpAuthorNameContainer>
          <S.ChirpAuthorName href={`/user/${chirp.author.id}`}>
            {chirp.author.name}
          </S.ChirpAuthorName>

          <S.ChirpAuthorUsername>
            @{chirp.author.username}
          </S.ChirpAuthorUsername>
        </S.ChirpAuthorNameContainer>
      </S.ChirpAuthorContainer>

      <S.ChirpContentContainer>{chirp.content}</S.ChirpContentContainer>

      <S.ChirpLikesContainer onClick={onLikeChirpCallback}>
        {chirpLiked ? (
          <HeartIconSolid className="liked" width={20} height={20} />
        ) : (
          <HeartIconOutline className="unliked" width={20} height={20} />
        )}
        <span>{chirp.likes}</span>
      </S.ChirpLikesContainer>

      <S.ChirpOpenChirp to={`/chirp/${chirp.id}`}>Abrir Chirp</S.ChirpOpenChirp>
    </S.ChirpContainer>
  )
}
