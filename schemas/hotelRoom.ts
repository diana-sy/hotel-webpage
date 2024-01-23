import { defineField } from "sanity";

const roomTypes =[
    {title: "Standard", value: "standard"},
    {title: "Deluxe", value: "deluxe"},
    {title: "Suite", value: "suite"},
]

const hotelRoom = {
    name:"hotelRoom",
    title:"Hotel Room",
    type:"document",
    fields:[
        defineField( {
            name:"name",
            title:"Name of the room",
            type:"string",
            validation: Rule => Rule.required().max(50).error("Maximum 50 characters allowed"),
        }),
        defineField( {
            name:"slug",
            type:"slug",
            validation: Rule => Rule.required(),
            options: {
                source: "name",
            },
        }),
        defineField( {
            name:"description",
            title:"Description of the room",
            type:"text",
            validation: Rule => Rule.required().min(50).error("Minimum 50 characters"),
        }),
        defineField( {
            name:"price",
            title:"Price of the room",
            type:"number",
            validation: Rule => Rule.required().min(50).error("Maxim 50 characters allowed"),
        }),
      
        defineField( {
            name: "images",
            title: "Images",
            type: "array",
            of: [{
                type:"object", 
                fields: [
                {name:"url", type:"url", title:"URL"},
                {name:"file", type:"file", title:"File"}
            ],
            }],
            validation: Rule => Rule.required().min(3).error("Minimum 3 images required"),        
        }),
        defineField( {
            name:"coverImage",
            title:"Cover Image",
            type:"object",
            fields: [
                {name:"url", type:"url", title:"URL"},
                {name:"file", type:"file", title:"File"}
            ],
            validation: Rule => Rule.required().error("Cover image required"),
        }),
        defineField( {
            name:"type",
            title:"Room Type",
            type:"string",
           options: {
            list: roomTypes,
            },
            initialValue:"standard",
            validation: Rule => Rule.required(),
        }),
        defineField( {
            name:"specialNote",
            title:"Special Note",
            type:"text",
            initialValue:"Please contact us if you have any questions or special requests",
            validation: Rule => Rule.required(),
        }),
        defineField( {
            name:"dimension",
            title:"Dimention",
            type:"string",
        }),
        defineField( {
            name:"numberOfBeds",
            title:"Number of Beds",
            type:"number",
            initialValue: 1,
            validation: Rule => Rule.required().min(1),
        }),
        defineField( {
            name:"breakfastIncluded",
            title:"Breackfast Included",
            type:"boolean",
            initialValue: false,
        }),
        defineField( {
            name:"petFriendly",
            title:"Pet Friendly",
            type:"boolean",
            initialValue: false,
        }),
        defineField( {
            name: "offerAmenities",
            title: "Offer Amenities",
            type: "array",
            of: [{
                type:"object", 
                fields: [
                {name:"icon", type:"string", title:"Icon"},
                {name:"amenity", type:"string", title:"Amenity"}
            ],
            }],
        }),
        defineField( {
            name:"isBooked",
            title:"Is Booked",
            type:"boolean",
            initialValue: false,
        }),
        defineField( {
            name:"isFeatured",
            title:"Is Featured",
            type:"boolean",
            initialValue: false,
        }),
        defineField( {
            name:"reviews",
            title:"Reviews",
            type:"array",
            of: [{ type:"review"}]
        }),
    ],
}
export default hotelRoom;