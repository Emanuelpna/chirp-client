import styled from 'styled-components'

export const Main = styled.main`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding: 0 8%;
  margin: 0 auto;
  max-width: 1000px;
  min-height: 100vh;
  padding-bottom: 10%;

  & > div {
    width: 80%;
  }
`

export const Header = styled.header`
  width: 100%;
  height: 2vh;
`
