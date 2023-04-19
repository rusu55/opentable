import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'
import Cards from './components/Cards'
import SearchHeader from './components/SearchHeader'
import fetchRestaurants from './actions/fetchRestaurants'

const inter = Inter({ subsets: ['latin'] })

export default async function Home() {

  const restaurants = await  fetchRestaurants()

   return (
    <>
      <SearchHeader />
      <div className="flex flex-wrap mt-10 px-36 py-3">
        {restaurants.map((restaurant: any) => (
        <Cards  restaurant={restaurant}/>
        ))}        
      </div>
    </>
  )
}
