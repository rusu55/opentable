import {Restaurant, Cuisine, Location, PRICE} from '@prisma/client'

export type RestaurantsProps {
    id: number,
    name: string,
    main_image: string,
    cuisine: Cuisine,
    location: Location,
    price: PRICE,
    slug: string
}