const colorsBase = {
  yellow: '#F4D35E',
  'yellow-light': 'hsl(47, 87%, 72%)',
  'yellow-dark': 'hsl(43, 90%, 44%)',
  red: '#CA2E55',
  green: '#52B788',
  black: '#0F0F0D',
  white: '#EFF7FF'
} as const

export const colors = {
  main: {
    color: colorsBase.yellow,
    contrast: colorsBase.black
  },
  success: {
    color: colorsBase.green,
    contrast: colorsBase.black
  },
  red: {
    color: colorsBase.red,
    contrast: colorsBase.white
  },
  text: {
    color: colorsBase.black,
    contrast: colorsBase.white
  },
  white: {
    color: '#fff',
    contrast: colorsBase.black
  }
} as const
