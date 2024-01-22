"use client";

import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import {AiFillGithub} from "react-icons/ai";
import {FcGoogle} from "react-icons/fc";
import {signUp} from "next-auth-sanity/client";
import {signIn, useSession} from "next-auth/react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

const defaultFormData = {
  email :"",
  password :"",
  name :"",
}

const Auth = () => {

  const [formData, setFormData] = useState(defaultFormData);

const inputStyle =
"border border-gray-300 sm:text-sm text-black rounded-lg block w-full p-2.5 focus:outline-none dark:shadow-[0_10px_15px_-3px_rgb(242,198,65)] "

const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
 const { name, value } = event.target;
 setFormData({...formData, [name]: value });
};

const {data: session} = useSession();
// console.log(session);

const router = useRouter();
useEffect(()=>{
 if(session) router.push("/");
}, [router, session]);

const loginHandler = async () => {
  try{
 await signIn();
 router.push("/");
  }catch(err){
    // console.log(err);
    toast.error("Something went wrong!");
  }
};

const handleSubmit =async (events: FormEvent<HTMLFormElement>) => {
  events.preventDefault();
  try{
    const user=await signUp (formData)
    if (user){
      toast.success("Success! Please, sign in.");
    }
  } catch(error){
    // console.log(error);
    toast.error("Oops! Something went wrong.");
} finally{
  setFormData(defaultFormData);
};
};


  return (
<section className="container mx-auto">
<div className="p-6 space-y-4 md:space-y-6 sm:p-8 w-80 md:w-[70%] mx-auto">

<div className="flex mb-8 flex-col md:flex-row items-center justify-between">
    <h1 className="text-xl font-bold leading-tight tracking-tight md:text-2xl cursor-pointer">
        Create account
        </h1>
<p>
    OR
</p>
<span className="inline-flex items-center">
<AiFillGithub
 onClick={loginHandler} 
 className="mr-3 text-4xl cursor-pointer text-black dark:text-white"/>
 {" "}
|
<FcGoogle 
onClick={loginHandler} 
className="ml-3 text-4xl cursor-pointer"/>
</span>
</div>

<form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
    <input 
    type="text" 
    name="name" 
    placeholder="John Doe" 
    required
    pattern="[A-Za-z ]{1,32}"
    title="Please, follow the example: Name Surname (like : John Doe)"
    className={inputStyle}
    value={formData.name}
    onChange={handleInputChange}
    />
   
    <input 
    type="email" 
    name="email" 
    placeholder="your_email@mail.com" 
    required
    pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$"
    className={inputStyle}
    value={formData.email}
    onChange={handleInputChange}
    />

    <input 
    type="password" 
    name="password" 
    placeholder="Your Password"
    required
    pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
    title= "Must contain at least one  number and one uppercase and lowercase letter, and at least 8 or more characters"
    className={inputStyle}
    value={formData.password}
    onChange={handleInputChange}
    />
  
<button
  type="submit"
  className="w-full bg-tertiary-light focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white "
>
    Sign Up
</button>

<button 
onClick={loginHandler} 
className="text-blue-600 underline">
    Login
</button>
</form>

</div>
</section>
  )
}

export default Auth