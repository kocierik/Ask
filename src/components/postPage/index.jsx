<<<<<<< Updated upstream
import React, { useEffect, useState } from "react"
import { firestore } from "../../server/firebase"
import Post from "../post"
import { collectionIdAndDocs } from "../../server/utilities"
import AddComment from "../commentArea/AddComment"
import { useParams } from "react-router"

// firestore.doc(`posts/`).collection("comments").onSnapshot(snapshot =>{
//   const comments = snapshot.docs.map(collectionIdAndDocs)
//   setComment(comments)
// })
=======
import React, { useEffect, useState } from 'react'
import { firestore } from '../../server/firebase'
import Post from '../post'
import { collectionIdAndDocs } from '../../server/utilities'
import AddComment from '../commentArea/AddComment'
import { useParams } from 'react-router'
import Comments from '../comments/comments'

>>>>>>> Stashed changes

function PostPage() {
  const [comments,setComments] = useState([])
  const { postId } = useParams()
  const [post, setPost] = useState()

<<<<<<< Updated upstream
  const getPost = async (id) => {
    await firestore.doc(`/posts/${id}`).onSnapshot((snapshot) => {
=======
  const postRef = firestore.doc(`/posts/${postId}`)

  const getPost = async () =>{
    await postRef.onSnapshot(snapshot =>{
>>>>>>> Stashed changes
      const result = collectionIdAndDocs(snapshot)
      setPost(result)  
    })
  }

  const commentRef = postRef.collection("comments")
  
  const getComment = async () =>{
    await commentRef.onSnapshot(snapshot =>{
      const savedComments = snapshot.docs.map(collectionIdAndDocs)
      setComments({savedComments})
    })
  }

<<<<<<< Updated upstream
  useEffect(() => {
    getPost(postId)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (!post) return null

  return (
    <div className="container">
      <Post
        content={post.content}
        id={post.id}
        title={post.title}
        stars={post.stars}
        user={post.user}
      />
=======
  useEffect(() =>{
    getPost()  
    getComment()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  if(!post) return null;
  return (
    <div className="container">
      <Post content={post.content} id={post.id} title={post.title} stars={post.stars} user={post.user}/>
        <Comments textComments={comments} postId={post.id} onCreate={ () => {}}/>
>>>>>>> Stashed changes
      <AddComment />
    </div>
  )
}

export default PostPage
