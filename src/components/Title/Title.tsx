import { ArrowLeftIcon } from '@heroicons/react/outline'

import * as S from './styles'

type TitleProps = {
  backButton?: string
  children: React.ReactNode
  as: `h${1 | 2 | 3 | 4 | 5 | 6}`
}

export function Title({ children, backButton, as = 'h1' }: TitleProps) {
  return (
    <S.TitleContainer>
      {backButton ? (
        <S.TitleBackButton to={backButton}>
          <ArrowLeftIcon width={28} height={28} />
        </S.TitleBackButton>
      ) : null}
      <S.TitleComponent as={as}>{children}</S.TitleComponent>
    </S.TitleContainer>
  )
}
