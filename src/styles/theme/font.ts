const weights = {
  bold: 700,
  regular: 400
}

const lineHeight = {
  small: 1,
  regular: 1.2
}

export const font = {
  weight: weights,
  family: {
    display: "'Epilogue', serif",
    text: "'Lato', sans-serif"
  },
  lineHeight,
  sizes: {
    xsmall: {
      size: '0.8rem', // pouco mais que 12px
      weight: weights.regular,
      lineHeight: lineHeight.small
    },
    small: {
      size: '0.875rem', // 14px
      weight: weights.regular,
      lineHeight: lineHeight.regular
    },
    regular: {
      size: '1rem', // 16px
      weight: weights.regular,
      lineHeight: lineHeight.regular
    },
    medium: {
      size: '1.5rem', // 24px
      weight: weights.bold,
      lineHeight: lineHeight.regular
    },
    large: {
      size: '2rem', // 32px
      weight: weights.bold,
      lineHeight: lineHeight.regular
    }
  }
} as const
