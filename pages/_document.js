import Document, { Html, Head, Main, NextScript } from 'next/document'
export default class MyDocument extends Document {
    render() {
        return (
            <Html lang="tr">
                <Head>
                    <meta httpEquiv="Content-Type" content="text/html; charset=utf-8"/>
                    <link rel="icon" type="image/svg+xml" href="favicon.svg" />
                    <link rel="icon" type="image/png" href="favicon.png" />
                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
                    <link href="https://fonts.googleapis.com/css2?family=Pacifico&family=Poppins:wght@400;700&display=swap" rel="stylesheet" />
                    <meta name="theme-color" content="#8fbe22"/>
                    <meta name="msapplication-navbutton-color" content="#8fbe22"/>
                    <meta name="apple-mobile-web-app-status-bar-style" content="#8fbe22"/>
                </Head>
                <body className="font-Poppins">
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}