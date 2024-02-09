import { Room } from "@/models/room";
import { FC } from "react";
import Image from 'next/image';
import Link from "next/link";

type Props ={
    room: Room;
};

const RoomCard: FC<Props> = props => {
  
  const{
    room:{coverImage, name, price, type, description, slug, isBooked},
}=props;
    return (
    <div className="rounded-xl w-72 mb-10 mx-auto md:mx-0 overflow-hidden text-black dark:bg-black dark:text-white">
        <div className="h-60 overflow-hidden">
            <Image
            src ={coverImage.url}
            alt ={name}
            width={250} 
            height={250}
            className="img scale-animation"
            />
        </div>

        <div className="p-4 bg-white dark:bg-black ">
            <div className="flex flex-col justify-between text-lg font-semibold h-24">
                <p>{name}</p>
                <p className="text-secondary">{price}€</p>
                <p className="pt-2 text-xs ">
                    {type} room
                </p>
            </div>
                <p className="pt-3 pb-6">
                    {description.slice(1,100)}...
                </p>
                <Link href={`/rooms/${slug.current}`} className="bg-tertiary-dark inline-block text-center w-full py-4 rounded-xl text-white text-xl font-bold hover:-translate-y-2 hover:shadow-lg transition-all duration-500">
                    {isBooked ? "Booked" : "Book now"}
                </Link>
            </div>
        </div>
       
  )
};

export default RoomCard