const colorsBase = {
  'main-green': '#49D49D',
  'main-green-light': 'hsl(152, 61%, 72%)',
  'main-green-dark': 'hsl(166, 69%, 29%)',
  red: '#CA2E55',
  green: '#52B788',
  black: '#0F0F0D',
  gray: '#4A4A47',
  white: '#EFF7FF'
} as const

export const colors = {
  main: {
    color: colorsBase['main-green'],
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
  'text-light': {
    color: colorsBase.gray,
    contrast: colorsBase.black
  },
  white: {
    color: '#fff',
    contrast: colorsBase.black
  }
} as const
