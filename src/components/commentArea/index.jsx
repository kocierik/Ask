import React, {useState, useEffect} from 'react'
import MakePost from "../makePost"
import Post from "../post"
import {firestore} from "../../server/firebase"
import "./index.scss"
import { collectionId } from '../../server/utilities'


function CommentArea() {
  const [posts,setPosts] = useState([])

  const callBack = async () => {
    firestore.collection('posts').onSnapshot(snapshot =>{
      const posts = snapshot.docs.map(collectionId)
      setPosts(posts) 
    })
  }

  useEffect( () =>{
    callBack()
  },[])


  return (
    <div className="container-content_left">   
  {posts.map(post => <Post text={post.content} title={post.title} key={post.id}  id={post.id} stars={post.stars} />)}
    <MakePost />
    </div>  
  )
}

export default CommentArea
