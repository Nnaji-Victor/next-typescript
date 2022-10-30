import '~/css/global.scss'

import { AppProps } from 'next/app'
import * as React from 'react'
import { createContext, useContext, useEffect, useState } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'

import { gaTrackingId } from '~/lib/constants'
import { useAppGA } from '~/lib/ga'

const Context = createContext<{ fontsLoaded: boolean }>({ fontsLoaded: false })
export const useAppContext = () => useContext(Context)

const queryClient = new QueryClient()

const App = ({ Component, pageProps }: AppProps) => {
  const [fontsLoaded, setFontsLoaded] = useState(false)

  if (gaTrackingId) useAppGA()

  useEffect(() => {
    // @ts-ignore
    document.fonts.ready
      .then(() => {
        setFontsLoaded(true)
      })
      .catch((error: unknown) => {
        console.error(error)
        setFontsLoaded(true)
      })
  }, [])

  return (
    <QueryClientProvider client={queryClient}>
      <Context.Provider value={{ fontsLoaded }}>
        {/* <LocomotiveScrollProvider> */}
        {/* <Header /> */}
        <Component {...pageProps} />
        {/* </LocomotiveScrollProvider> */}
      </Context.Provider>
    </QueryClientProvider>
  )
}

export default App
