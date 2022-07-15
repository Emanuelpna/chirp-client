import { Link } from 'react-router-dom'
import styled, { css } from 'styled-components'

export const TitleContainer = styled.div`
  ${({ theme }) => css`
    width: 100%;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    gap: ${theme.spacing.small};
    color: ${theme.colors.text.color};
    padding-top: ${theme.spacing.large};
    padding-bottom: ${theme.spacing.xsmall};
  `}
`

export const TitleBackButton = styled(Link)`
  border: none;
  cursor: pointer;
  background: none;
`

export const TitleComponent = styled.h1``
