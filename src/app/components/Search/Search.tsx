"use client";
import { useRouter } from "next/navigation";
import {ChangeEvent, FC} from "react";

type Props ={
    roomTypeFilter: string;
    setRoomTypeFilter: (value:string)=> void;
    searchQuery: string;
    setSearchQuery: (value:string)=> void;
 
}


const Search: FC<Props>= ({ roomTypeFilter, setRoomTypeFilter, searchQuery, setSearchQuery}) => {
  
const router = useRouter();

  const handleRoomTypeChange = (event: ChangeEvent<HTMLSelectElement>) => {
setRoomTypeFilter(event.target.value);

  }
  
  const handleSearchQueryChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  }

const handleFilterClick = ()=>{
router.push(`/rooms?roomType=${roomTypeFilter}&searchQuery=${searchQuery}`);
}
  
  
  
    return (
   <section className="bg-tertiary-light px-4 py-6 rounded-lg">
    <div className="container mx-auto flex gap-4 flex-wrap justify-between items-center">
        <div className="w-full md:1/3 lg:w-auto mb-4 m:mb-0">
            <label className="block text-black text-sm font-medium mb-2">
                Room type
            </label>
            <div className="relative">
                <select 
                 value={roomTypeFilter}
                 onChange={handleRoomTypeChange}
                 className="w-full px-4 py-2 capitalize rounded leading-tight dark:bg-black focus:outline-none">
                    <option value="All">All</option>
                    <option value="Standart">Standart room</option>
                    <option value="Delux">Delux room</option>
                    <option value="Suite">Suite room</option>
                </select>
            </div>
        </div>

        <div className="w-full md:1/3 lg:w-auto mb-4 md:mb-0">
            <label className="block text-sm text-black font-medium mb-2">
                Search
            </label>
            <input
            type="search" 
            placeholder ="Search..."
            id="search"
            className="w-full px-4 py-3 rounded leading-tight focus:outline-none placeholder:text-black dark:placeholder:text-white dark:bg-black"
            value={searchQuery}
            onChange={handleSearchQueryChange}  
            />
        </div>
        <button 
        className="btn-secondary"
        type="button" 
        onClick={handleFilterClick}
        >
            Search!

        </button>
    </div>

   </section>
  )
}

export default Search