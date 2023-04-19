import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'
import Cards from './components/Cards'
import SearchHeader from './components/SearchHeader'
import { PrismaClient } from '@prisma/client'

const inter = Inter({ subsets: ['latin'] })

const prisma = new PrismaClient();

const fetchRestaurants = async () =>{
  const restaurants = await prisma.restaurant.findMany()
  return restaurants;
}

export default async function Home() {
  const restaurants = await fetchRestaurants()
  return (
    <>
      <SearchHeader />
      <Cards />
    </>
  )
}
