import { defineField } from "sanity";

const user ={

    name:"user",
    title:"User",
    type:"document",
    fields:[
      defineField( {
        name:"isAdmin",
        title:"Admin",
        type:"boolean",
        description:"Ckecking if the user is admin",
        initialValue:false,
        validation: Rule => Rule.required(),
        // readOnly: true,
        // hidden: true,
      }),
      defineField( {
        name:"name",
        title:"Name",
        type:"string",
        description:"User's name",
        validation: Rule => Rule.required(),
        readOnly: true,
      }),
      defineField( {
        name:"image",
        title:"Image",
        type:"url",
      }),
      defineField( {
        name:"password",
        title:"Password",
        type:"string",
        hidden: true,
      }),
      defineField( {
        name:"email",
        title:"Email",
        type:"string",
        description:"User's email address",
      }),
      defineField( {
        name:"emailVerified",
        type:"datetime",
        hidden: true,
      }),
      defineField( {
        name:"about",
        title:"About",
        type:"text",
        description:"Short info about the user",
      }),
],
};

export default user