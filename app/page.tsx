import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'
import Cards from './components/Cards'
import Header from './components/Header'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
      <Header />
  )
}
