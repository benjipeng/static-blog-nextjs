//! This file acts as a wrap around pages
//? You can place header here 

import Header from '@/components/Header';
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return (<>
  <Header /><Component {...pageProps} />
  </>);
}
