import { useEffect } from 'react';

import '@/styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/style.css';
import './assets/css/responsive.css';
import 'animate.css/animate.css';
import 'wowjs/css/libs/animate.css';
import TagManager from 'react-gtm-module'


export default function App({ Component, pageProps }) { 
  useEffect(() => {
    const tagManagerArgs = {
      gtmId: 'WBZTTXDX'
    };
    TagManager.initialize(tagManagerArgs);
  }, []);
  return <Component {...pageProps} />
}
