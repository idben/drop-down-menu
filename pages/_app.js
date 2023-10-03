import '@/styles/globals.sass'
import { useEffect } from 'react';
import dynamic from 'next/dynamic';

const Bootstrap = dynamic(() => import('../components/Bootstrap'), {
  ssr: false,
});

export default function App({ Component, pageProps }) {
  return(
  <>
    <Bootstrap />
    <Component {...pageProps} />
  </>
  );
}
