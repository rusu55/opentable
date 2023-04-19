import Image from 'next/image'

import Cards from './components/Cards'
import SearchHeader from './components/SearchHeader'
import fetchRestaurants from './actions/fetchRestaurants'


export default async function Home() {

  //const restaurants = await  fetchRestaurants()

   return (
    <>
      <SearchHeader />
      <div className="flex flex-wrap mt-10 px-36 py-3">
       {/* {restaurants.map((restaurant: any) => (
        <Cards  restaurant={restaurant}/>
       ))}        */}
      </div>
    </>
  )
}
