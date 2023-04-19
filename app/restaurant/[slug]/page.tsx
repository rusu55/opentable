import React from 'react';

import RestaurantHeader from '../../components/RestaurantHeader';
import RestaurantNavBar from '../../components/RestaurantNavBar';
import RestaurantTitle from '../../components/RestaurantTitle';
import RestaurantRating from '../../components/RestaurantRating';
import RestaurantDescription from '../../components/RestaurantDescription';
import RestaurantImages from '../../components/RestaurantImages';
import RestaurantReviews from '../../components/RestaurantReviews';
import ReservationCard from '../../components/ReservationCard';
import { PrismaClient } from '@prisma/client';

interface RestaurantProps{
    id: number;
    name: string;
    images: string[];
    description: string;
    slug: string;
}

const prisma = new PrismaClient()

const fetchRestaurant = async (slug: string): Promise<RestaurantProps> => {
    const restaurant = await prisma.restaurant.findUnique({
        where:{
            slug
        },
        select:{
            id: true,
            name: true,
            images: true,
            description: true,
            slug: true
        }
    })
    if(!restaurant){
        throw new Error()
    }

    return restaurant
}

const RestaurantDetails = async ({params} : {params: {slug: string}}) => {
    
    const restaurant = await fetchRestaurant(params.slug)
  return (
    <>  
        <RestaurantHeader />
        <div className="flex m-auto w-2/3 justify-between items-start 0 -mt-11">
            <div className="bg-white w-[70%] rounded p-3 shadow">
                <RestaurantNavBar />
                <RestaurantTitle />
                <RestaurantRating />
                <RestaurantDescription />
                <RestaurantImages />
                <RestaurantReviews />
            </div>
            <div className="w-[27%] relative">
                <ReservationCard />
            </div>
        </div>
        
    </>
  )
}

export default RestaurantDetails
