import React, { useContext, useEffect, useState } from "react"
import { firestore } from "../../server/firebase"
import Post from "../post"
import { collectionIdAndDocs } from "../../server/utilities"
import AddComment from "../commentArea/AddComment"
import { useParams } from "react-router"
import Comments from "../comments/comments"
import { CommentsContext } from "../../providers/commentsProvider"

function PostPage() {
  const [comments, setComments] = useContext(CommentsContext)
  console.log(comments)
  const { postId } = useParams()
  const [post, setPost] = useState()
  console.log(comments)
  const postsRef = firestore.doc(`/posts/${postId}`)

  const commentsRef = postsRef.collection("comments")
  const getComment = async () => {
    await commentsRef.onSnapshot((snapshot) => {
      const savedComments = snapshot.docs.map(collectionIdAndDocs)
      setComments(savedComments)
    })
  }
  const getPost = async () => {
    await postsRef.onSnapshot((snapshot) => {
      const result = collectionIdAndDocs(snapshot)
      setPost(result)
    })
  }

  useEffect(() => {
    getPost()
    getComment()
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
      <Comments textComments={comments} postId={post.id} />
      <AddComment postId={post.id} />
    </div>
  )
}

export default PostPage
