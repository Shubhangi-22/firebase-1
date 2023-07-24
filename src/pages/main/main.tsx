 import { getDocs,collection } from "firebase/firestore";
import { db } from "../../config/firebase";
import { useEffect, useState } from "react";
import { Post } from "./post";
 

 export interface Post{
    id:string;
    userId:string;
    title:string;
    description:string;
    username:string;

}
 export const Main=()=>
 {
    const [postslist,setPostslist]=useState<Post[]| null>(null);
    const postsRef=collection(db,"posts");
    const getPosts=async()=>{
const data= await getDocs(postsRef);
setPostslist(data.docs.map((doc)=>({...doc.data(),id:doc.id}))as Post[]);

    };
    useEffect(()=>{
getPosts();
    },[]);
return <div>

    <h1>{postslist?.map((post)=>
    <Post post={post}/>)}
    </h1></div>
};