import { Room } from "@/models/room";
import sanityClient from "./sanity";
import *as queries from "./sanityQueries"

export async function getFeaturedRoom(){
    const result = await sanityClient.fetch<Room>(queries.getFeaturedRoomQuery,
        {},
        {cache: "no-cache"},
        );
        return result;
}

export async function getRooms(){
    const result = await sanityClient.fetch <Room[]>(queries.getRoomsQuery,
        {},
        {cache: "no-cache"},
        );
    return result;
}

export async function getRoomBySlug(slug: string){
    const result = await sanityClient.fetch<Room>(queries.getRoomBySlugQuery,
        {slug},
        {cache: "no-cache"},
        );
    return result;
}
