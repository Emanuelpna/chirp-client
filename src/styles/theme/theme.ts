import { font } from './font'
import { colors } from './colors'

export const theme = {
  font,
  colors,
  border: {
    radius: '12px'
  },
  shadows: {
    elevation1: '0 2px 10px rgba(25, 33, 52, .28)',
    elevation2: '0 4px 12px rgba(25, 33, 52, .28)',
    elevationContrast1: '0 2px 10px rgba(25, 33, 52, .16)',
    elevationContrast2: '0 4px 12px rgba(25, 33, 52, .16)'
  },
  spacing: {
    xsmall: '0.6rem', // pouco menos que 10px
    small: '0.8rem', // pouco mais que 12px
    regular: '1rem', // 16px
    medium: '1.5rem', // 24px
    large: '2rem', // 32px
    xlarge: '2.5rem' // 40px
  }
} as const
