import { groq } from "next-sanity";

export const getFeaturedRoomQuery = groq`*[_type == "hotelRoom" && isFeatured == true][0]{
    _id,
    name,
    slug,
    description,
    price,
    images,
    isFeatured,
    coverImage,
    dimension,
    isBooked,
    numberOfBeds,
    offeredAmenities,
    specialNotes,
    petFriendly,
    breakfastIncluded
    
}`;

export const getRoomsQuery = groq `*[_type == "hotelRoom"]{
    _id,
    name,
    slug,
    description,
    price,
    images,
    isFeatured,
    coverImage,
    dimension,
    isBooked,
    type
}`;

export const getRoomBySlugQuery = groq `*[_type ==  "hotelRoom" && slug.current == $slug][0] {
 
    _id,
    name,
    slug,
    description,
    price,
    images,
    isFeatured,
    coverImage,
    dimension,
    isBooked,
    type,
    numberOfBeds,
    offeredAmenities,
    specialNotes,
    petFriendly,
    breakfastIncluded
}`