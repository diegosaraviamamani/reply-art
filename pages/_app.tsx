import { NavbarProvider } from '@contexts/NavbarContext'
import '@styles/globals.css'

function Application({ Component, pageProps }) {
  return (
    <NavbarProvider>
      <Component {...pageProps} />
    </NavbarProvider>
  )
}

export default Application
