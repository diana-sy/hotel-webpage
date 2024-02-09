"use client";

import { getRoomBySlug } from "@/app/libs/apis";
import useSWR from "swr";
import LoadingSpinner from "../../loading";
import HotelGallery from "@/app/components/HotelGallery/HotelGallery";

const RoomBySlug= (props : {params: {slug :string}}) => {
const {
    params : {slug},} = props;

    const fetchRoom = async () => getRoomBySlug(slug);
    const {data: room, error, isLoading} = useSWR("/api/room", fetchRoom);

    if (error) throw new Error ("Error fetching");
    if (typeof room === "undefined" && !isLoading)
    throw new Error ("Cannot fetch data");

    if (!room) return <LoadingSpinner/>;
    console.log (room);

  return (
    <div>
        <HotelGallery photos ={room.images}/>
    </div>
  )
}
export default RoomBySlug;
