import { useNavigate } from 'react-router-dom'
import { ArrowLeftIcon } from '@heroicons/react/outline'

import * as S from './styles'

type TitleProps = {
  withBackButton?: boolean
  children: React.ReactNode
  as: `h${1 | 2 | 3 | 4 | 5 | 6}`
}

export function Title({
  children,
  withBackButton = false,
  as = 'h1'
}: TitleProps) {
  const navigate = useNavigate()

  return (
    <S.TitleContainer>
      {withBackButton ? (
        <S.TitleBackButton onClick={() => navigate(-1)}>
          <ArrowLeftIcon width={28} height={28} />
        </S.TitleBackButton>
      ) : null}
      <S.TitleComponent as={as}>{children}</S.TitleComponent>
    </S.TitleContainer>
  )
}
