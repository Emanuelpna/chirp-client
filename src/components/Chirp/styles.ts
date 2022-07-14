import styled, { css } from 'styled-components'

export const ChirpContainer = styled.div`
  ${({ theme }) => css`
    width: 100%;
    padding: ${theme.spacing.regular};
    border-radius: ${theme.border.radius};
    font-family: ${theme.font.family.text};
    background: ${theme.colors.white.color};
    border: 2px solid ${theme.colors.main.color};

    &.thread.main {
      border-end-end-radius: 0;
      border-end-start-radius: 0;
    }

    &.thread:not(.main) {
      border-top: none;
      border-end-end-radius: 0;
      border-start-end-radius: 0;
      border-end-start-radius: 0;
      border-start-start-radius: 0;
    }

    &.thread.last-thread {
      border-end-end-radius: ${theme.border.radius};
      border-end-start-radius: ${theme.border.radius};
    }
  `}
`

export const ChirpAuthorContainer = styled.div`
  ${({ theme }) => css`
    width: 100%;
    display: flex;
    gap: ${theme.spacing.small};
  `}
`

export const ChirpAuthorAvatar = styled.img`
  width: 56px;
  height: 56px;
  border-radius: 100px;
  object-fit: cover;
  object-position: top center;
`

export const ChirpAuthorNameContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: flex-start;
    gap: calc(${theme.spacing.xsmall} / 3);
  `}
`

export const ChirpAuthorName = styled.a`
  ${({ theme }) => css`
    width: 100%;
    text-decoration: none;
    color: ${theme.colors.text.color};
    font-weight: ${theme.font.weight.bold};
    font-family: ${theme.font.family.display};
    line-height: ${theme.font.lineHeight.small};
    margin-bottom: -2px;
    border-bottom: 2px solid transparent;
    transition: border 150ms ease-in-out;

    &:hover {
      border-bottom: 2px solid ${theme.colors.text.color};
    }
  `}
`

export const ChirpAuthorUsername = styled.span`
  ${({ theme }) => css`
    width: 100%;
    font-family: ${theme.font.family.text};
    font-weight: ${theme.font.weight.regular};
    line-height: ${theme.font.lineHeight.small};
  `}
`

export const ChirpContentContainer = styled.p`
  ${({ theme }) => css`
    width: 60ch;
    padding: ${theme.spacing.medium} 0;
  `}
`

export const ChirpLikesContainer = styled.div`
  ${({ theme }) => css`
    width: 100%;
    display: flex;
    align-items: center;
    gap: ${theme.spacing.xsmall};
    line-height: ${theme.font.lineHeight.small};

    & svg {
      color: ${theme.colors.red.color};
    }
  `}
`
