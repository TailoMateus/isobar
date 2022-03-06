export type Theme = typeof theme

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}

const theme = {
  colors: {
    background: '#fff',
    text: '#383434',
  }
}

export default theme
