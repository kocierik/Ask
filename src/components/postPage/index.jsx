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

function PostPage() {
  const { postId } = useParams()
  const [post, setPost] = useState()

  const getPost = async (id) => {
    await firestore.doc(`/posts/${id}`).onSnapshot((snapshot) => {
      const result = collectionIdAndDocs(snapshot)
      setPost(result)
    })
  }

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
      <AddComment />
    </div>
  )
}

export default PostPage
