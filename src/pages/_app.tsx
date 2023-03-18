import '@/styles/globals.scss'
import type { AppProps } from 'next/app'
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import { Itim, Nunito } from 'next/font/google';
const itim = Itim({ weight: "400", subsets: ['latin'] });
const nunito = Nunito({ subsets: ['latin'] })

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
      <Header />
      <main>
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  )
}
