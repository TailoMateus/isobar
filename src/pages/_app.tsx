import type { AppProps } from 'next/app'
import Router from 'next/router'
import NProgress from 'nprogress'
import GlobalsStyle from '../styles/globals'
import theme from '../styles/theme'
import { ThemeProvider } from 'styled-components'
import '../../public/nprogress.css'

Router.events.on("routeChangeStart", (url) => {
  console.log(`Loading: ${url}`)
  NProgress.start()
})

Router.events.on("routeChangeComplete", () => NProgress.done())
Router.events.on("routeChangeError", () => NProgress.done())

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
      <GlobalsStyle />
    </ThemeProvider>
  )
}

export default MyApp
