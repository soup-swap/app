import '@/styles/globals.scss'
import type { AppProps } from 'next/app'
import { Itim, Nunito } from 'next/font/google';
const itim = Itim({weight: "400", subsets: ['latin'] });
const nunito = Nunito({subsets: ['latin'] })

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
    <style jsx global>{`
        :root {
          --itim-font: ${itim.style.fontFamily};
          --nunito-font: ${nunito.style.fontFamily};
        }
      `}
      </style>
   <Component {...pageProps} />
   </>
      )
}
