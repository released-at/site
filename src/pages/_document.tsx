import Document, { Head, Main, Html, NextScript } from 'next/document'

class CustomDocument extends Document {
  render() {
    return (
      <Html lang="ru" prefix="og: https://ogp.me/ns#">
        <Head>
          <link rel="dns-prefetch" href="//fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com/"
            crossOrigin="anonymous"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800&family=PT+Serif:ital,wght@0,400;0,700;1,400&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Montserrat:wght@200&text=released&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default CustomDocument
