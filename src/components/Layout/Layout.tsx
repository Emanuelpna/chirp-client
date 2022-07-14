import * as S from './styles'

type LayoutProps = { children: React.ReactNode }

export function Layout({ children }: LayoutProps) {
  return (
    <>
      <S.Header></S.Header>
      <S.Main>{children}</S.Main>
    </>
  )
}
