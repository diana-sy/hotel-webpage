    type CoverImage = {
        url: string;
    };

    type Image = {
        _key: string;
        url: string;
    };

    type Amenity ={
        _key: string;
        amenity: string;
        icon: string;
    };

    type Slug ={
        _type:string;
        current:string;
    }

export type Room ={
    _id: string;
    coverImage: CoverImage;
    description: string;
    dimension: string;
    isFeatured: boolean;
    images: Image[];
    isBooked: boolean;
    name: string;
    numberOfBeds: number;
    price: number;
    offeredAmenities:Amenity[];
    slug: Slug;
    specialNotes: string;
    petFriendly: boolean;
    breakfastIncluded: boolean;
    


};