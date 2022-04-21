import type { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';
import NextNProgress from 'nextjs-progressbar';

import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <ThemeProvider enableSystem={true} attribute="class">
            <NextNProgress color="#0891B2" height={3} />
            <Component {...pageProps} />
        </ThemeProvider>
    );
}

export default MyApp;
