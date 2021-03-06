/* eslint-disable react/jsx-props-no-spreading */
import { AppProps } from 'next/app'

import '@src/styles/tailwind.css'

const App = ({ Component, pageProps }: AppProps) => <Component {...pageProps} />

export default App
