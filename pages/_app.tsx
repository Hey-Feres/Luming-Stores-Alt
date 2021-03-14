import { AppProps } from 'next/app'
import Head from 'next/head'
import { ThemeProvider, StyleReset } from 'atomize'
import { Provider as StyletronProvider } from 'styletron-react'
import { styletron } from '../styletron'
import { Theme } from '../theme.ts'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { store, persistor } from '../store'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const theme = Theme
toast.configure()

const Main: React.FC<AppProps> = ({ Component, pageProps }) => {
  return(
    <ThemeProvider theme={theme}>
      <StyletronProvider value={styletron}>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <StyleReset />
            <Head>
              <title>Luming Stores</title>
              <meta name='viewport' content='initial-scale=1.0, width=device-width' />
              <link rel='preconnect' href='https://fonts.gstatic.com' />
              <link href='https://fonts.googleapis.com/css2?family=Varela+Round&display=swap' rel='stylesheet' />
              <link href='https://fonts.googleapis.com/css2?family=Varela&display=swap' rel='stylesheet' />
            </Head>

            <Component {...pageProps} />
          </PersistGate>
        </Provider>
      </StyletronProvider>
    </ThemeProvider>
  )
}

export default Main
