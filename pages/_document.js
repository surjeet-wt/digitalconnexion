import { Html, Head, Main, NextScript } from 'next/document'
export default function Document() { 
  return (
    <Html lang="en">
      <Head>
        <meta name="google-site-verification" content="W4RXROXBkBa-cuOR-ABOIDcoevtLH_0gcJ-k9yIqN78" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <script type="text/javascript"
              async dangerouslySetInnerHTML={{ __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-WBZTTXDX');`}} />
        
      </Head>
      <body>
        <noscript> <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-WBZTTXDX" height="0" width="0" style={{ display: 'none', visibility: 'hidden' }}></iframe></noscript>        <Main />
      <NextScript />
      </body>
    </Html>
  )
}
