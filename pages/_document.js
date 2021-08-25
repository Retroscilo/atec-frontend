import Document, { Html, Head, Main, NextScript } from "next/document"

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          {/* eslint-disable-next-line */}
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Staatliches"
          />
          <link
            rel="stylesheet"
            href="/uikit/css/uikit.min.css"
            />
          <script
            defer
            src="/uikit/js/uikit.min.js"
            />
          <script
            src="/uikit/js/uikit.js"
            />
          <script
            src="/uikit/js/uikit-icons.min.js"
          />
            {/* <link
              rel="stylesheet"
              href="https://cdn.jsdelivr.net/npm/uikit@3.2.3/dist/css/uikit.min.css"
            />
          <script
            async
            rel="preconnect"
            src="https://cdnjs.cloudflare.com/ajax/libs/uikit/3.2.0/js/uikit.min.js"
          />
          <script
            async
            rel="preconnect"
            src="https://cdn.jsdelivr.net/npm/uikit@3.2.3/dist/js/uikit-icons.min.js"
          />
          <script
            async
            rel="preconnect"
            src="https://cdnjs.cloudflare.com/ajax/libs/uikit/3.2.0/js/uikit.js"
          /> */}
          <link href="https://fonts.googleapis.com/css2?family=Expletus+Sans&display=swap" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css2?family=Baumans&display=swap" rel="stylesheet" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
