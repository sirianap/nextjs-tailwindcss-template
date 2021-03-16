import SiteLayout from '../components/SiteLayout'
import '../styles/globals.css'
import { AnimatePresence, motion } from 'framer-motion'

function MyApp({ Component, pageProps }) {
  return (
    <SiteLayout>
      <Component {...pageProps} />
    </SiteLayout>
  )
}

export default MyApp
