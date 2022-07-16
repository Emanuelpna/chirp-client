import { useState } from 'react'
import { HeartIcon as HeartIconSolid } from '@heroicons/react/solid'
import {
  RefreshIcon,
  HeartIcon as HeartIconOutline
} from '@heroicons/react/outline'

import { Chirp as ChirpModel } from '/@/domain/model/Chirp'

import * as S from './styles'

type ChirpProps = {
  chirp: ChirpModel
  isOnThread?: boolean
  isMainChirp?: boolean
  isLastOnThread?: boolean
  onReChirp?: (chirpId: number) => void
  onLikeChirp?: (chirpId: number) => void
}

export function Chirp({
  chirp,
  isOnThread = false,
  isMainChirp = false,
  isLastOnThread = false,
  onReChirp,
  onLikeChirp
}: ChirpProps) {
  const [chirpLiked, setChirpLiked] = useState(false)

  const onLikeChirpCallback = () => {
    onLikeChirp?.(chirp.id)

    setChirpLiked(true)
  }

  const onReChirpCallback = () => {
    onReChirp?.(chirp.id)
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
        {chirp.reChirped ? (
          <S.ChirpAuthorRechirp to={`/user/${chirp.author.id}`}>
            <RefreshIcon width={20} height={20} /> {chirp.reChirped.author.name}{' '}
            Rechirpou:
          </S.ChirpAuthorRechirp>
        ) : null}

        <S.ChirpAuthorAvatar src={chirp.author.avatar} alt="" />

        <S.ChirpAuthorNameContainer>
          <S.ChirpAuthorName to={`/user/${chirp.author.id}`}>
            {chirp.author.name}
          </S.ChirpAuthorName>

          <S.ChirpAuthorUsername>
            @{chirp.author.username}
          </S.ChirpAuthorUsername>
        </S.ChirpAuthorNameContainer>
      </S.ChirpAuthorContainer>

      <S.ChirpContentContainer>{chirp.content}</S.ChirpContentContainer>

      <S.ChirpFooter>
        <S.ChirpLikesContainer onClick={onLikeChirpCallback}>
          {chirpLiked ? (
            <HeartIconSolid className="liked" width={18} height={18} />
          ) : (
            <HeartIconOutline className="unliked" width={18} height={18} />
          )}
          <span>{chirp.likes}</span>
        </S.ChirpLikesContainer>

        <S.ChirpRechirpContainer onClick={onReChirpCallback}>
          <RefreshIcon width={18} height={18} />

          <span>Rechirp</span>
        </S.ChirpRechirpContainer>
      </S.ChirpFooter>

      <S.ChirpOpenChirp to={`/chirp/${chirp.author.id}/${chirp.id}`}>
        Abrir Chirp
      </S.ChirpOpenChirp>
    </S.ChirpContainer>
  )
}
