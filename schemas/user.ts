import { defineField } from "sanity";

const user ={

    name:"user",
    title:"User",
    type:"document",
    fields:[
      defineField( {
        name:"isAdmin",
        title:"isAdmin",
        type:"boolean",
        description:"Ckecking if the user is admin",
        initialValue:false,
        validation: Rule => Rule.required(),
        // readOnly: true,
        // hidden: true,
      }),
      defineField( {
        name:"name",
        title:"name",
        type:"string",
        description:"Name of the user",
        validation: Rule => Rule.required(),
        readOnly: true,
      }),
      defineField( {
        name:"image",
        title:"image",
        type:"url",
      }),
      defineField( {
        name:"password",
        title:"password",
        type:"string",
        hidden: true,
      }),
      defineField( {
        name:"about",
        title:"about",
        type:"string",
        description:"Short info about the user",
      }),
],
};

export default user