import prisma from '../libs/prismadb';

const fetchRestaurants = async () =>{
    try{
        const restaurants = await prisma.restaurant.findMany({
            select: {
              id: true,
              name: true,
              main_image: true,
              cuisine: true,
              slug: true,
              location: true,
              price: true
            }
          })
          
        return restaurants;
    }
    catch(error: any){
        throw new Error(error)
    }
}

export default fetchRestaurants