import React from 'react'
import "./index.scss"
import {firestore} from "../../server/firebase"
function Post({text, id, title, stars}) {


  const postRef = firestore.doc(`posts/${id}`)
  const remove = () => postRef.delete()
  const starRef = () => postRef.update({stars:stars+1})
  
  return (
    <div className="post">
      <legend>{title}</legend> 
      <p> {text}</p>
      <button onClick={remove}>Delete post</button>
      <button onClick={starRef}>⭐{stars}</button> 
    </div>
  )
}

export default Post
