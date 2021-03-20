import React, {useState, useEffect} from 'react'
import MakePost from "../makePost"
import Post from "../post"
import {firestore} from "../../server/firebase"
import "./index.scss"
import { collectionId } from '../../server/utilities'
function CommentArea() {
  
  const onAddClick = async (post) => {
    console.log(post)
    const docRef = await firestore.collection("posts").add(post)
    const doc = await docRef.get()
    const newPost = collectionId(doc)
    setPosts([newPost,...posts])
  }

  const [posts,setPosts] = useState([{}])

  const callBack = async () => {
    const snapshot = await firestore.collection('posts').get();
    const dbData = snapshot.docs.map(collectionId)
    setPosts(dbData)
    snapshot.forEach(doc => {
      const id = doc.id
      const data = doc.data()
      console.log({id, data})
    })  
  }
  useEffect( () =>{
    callBack()
  },[])

  return (
    <div className="container-content_left">   
    {posts.map(post => <Post text={post.content} title={post.title} key={post.id}/>)}
    <MakePost onAddClick={onAddClick}/>
    </div>  
  )
}

export default React.memo(CommentArea)
