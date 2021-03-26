import React, { useState, useEffect } from 'react'
import Post from "../post"
import {firestore} from "../../server/firebase"
import "./index.scss"
import { collectionIdAndDocs } from '../../server/utilities'
function CommentArea() {

  const [posts,setPosts] = useState([])

  const callBack = async () => {
    await firestore.collection('posts').onSnapshot(snapshot =>{
      const posts = snapshot.docs.map(collectionIdAndDocs)
      setPosts(posts) 
    })
  }

  useEffect( () =>{
    callBack()
  },[])  
  
  return (
    <div className="container-content_left">   
   {posts.map(post => <Post {...post} key={post.id} />)}
   </div>  
  )
}
export default CommentArea
