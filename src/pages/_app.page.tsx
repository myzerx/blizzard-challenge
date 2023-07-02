import { globalStyles } from '@/styles/global'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import store from '../reducers/store'

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}
