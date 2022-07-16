import { Link } from 'react-router-dom'
import styled, { css } from 'styled-components'

export const ChirpContainer = styled.section`
  ${({ theme }) => css`
    width: 100%;
    padding: ${theme.spacing.regular};
    border-radius: ${theme.border.radius};
    font-family: ${theme.font.family.text};
    background: ${theme.colors.white.color};
    border: 2px solid ${theme.colors.main.color};

    &:not(.thread) {
      margin: ${theme.spacing.medium} 0;
    }

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

export const ChirpAuthorRechirp = styled(Link)`
  ${({ theme }) => css`
    width: 100%;
    display: flex;
    align-items: center;
    text-decoration: none;
    margin-left: ${theme.spacing.regular};
    gap: calc(${theme.spacing.xsmall} / 2);
    color: ${theme.colors['text-light'].color};
    transition: all 150ms ease-in-out;

    &:hover {
      text-decoration: underline;
    }
  `}
`

export const ChirpAuthorContainer = styled.header`
  ${({ theme }) => css`
    width: 100%;
    display: flex;
    flex-flow: row wrap;
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

export const ChirpAuthorName = styled(Link)`
  ${({ theme }) => css`
    width: 100%;
    text-decoration: none;
    color: ${theme.colors.text.color};
    font-weight: ${theme.font.weight.bold};
    font-family: ${theme.font.family.display};
    line-height: ${theme.font.lineHeight.small};
    transition: all 150ms ease-in-out;

    &:hover {
      text-decoration: underline;
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
    max-width: 60ch;
    white-space: pre-wrap;
    padding: ${theme.spacing.medium} 0;
  `}
`

export const ChirpFooter = styled.footer`
  ${({ theme }) => css`
    width: 100%;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: flex-start;
    gap: ${theme.spacing.regular};
    padding: ${theme.spacing.xsmall} 0;
  `}
`

export const ChirpLikesContainer = styled.button`
  ${({ theme }) => css`
    border: none;
    background: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: ${theme.spacing.xsmall};
    line-height: ${theme.font.lineHeight.small};

    & svg {
      color: ${theme.colors.red.color};
    }
  `}
`

export const ChirpRechirpContainer = styled.button`
  ${({ theme }) => css`
    border: none;
    background: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: ${theme.spacing.xsmall};
    color: ${theme.colors.text.color};
    line-height: ${theme.font.lineHeight.small};

    & svg {
      color: ${theme.colors.text.color};
    }
  `}
`

export const ChirpOpenChirp = styled(Link)`
  ${({ theme }) => css`
    display: block;
    color: ${theme.colors.main.color};
    margin-top: ${theme.spacing.small};
    font-weight: ${theme.font.weight.bold};
  `}
`
