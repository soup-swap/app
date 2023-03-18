import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Itim, Nunito } from '@next/font/google';
const itim = Itim({weight: "400", subsets: ['latin'] });
const nunito = Nunito({subsets: ['latin'] })

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
    <style jsx global>{`
        :root {
          --itim-font: ${itim.style.fontFamily};
          --nunito-font: ${nunito.style.fontFamily};
          --color-background: #eef6fa;
          --color-offwhite: #eef6fa;
          --color-curry: #bf7c20;
          --color-brown: #683A17;
          --color-lavender: #d7d4e0;
          --color-pink: #d2b5c7;
          --color-rust: #b14910; 
        }
      `}
      </style>
   <Component {...pageProps} />
   </>
      )
}
