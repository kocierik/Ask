import React, { createContext, useEffect, useState } from "react"
import { useParams } from "react-router"
import { firestore } from "../server/firebase"
import { collectionIdAndDocs } from "../server/utilities"

export const CommentsContext = createContext()

function CommentsProvider(props) {
  const [comments, setComments] = useState()
  const { postId } = useParams()
  const postsRef = firestore.doc(`/posts/${postId}`)
  const commentsRef = postsRef.collection("comments")
  const getComment = async () => {
    await commentsRef.onSnapshot((snapshot) => {
      const savedComments = snapshot.docs.map(collectionIdAndDocs)
      setComments(savedComments)
    })
  }
  useEffect(() => {
    getComment()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [postId])

  return (
    <CommentsContext.Provider value={[comments, setComments]}>
      {props.children}
    </CommentsContext.Provider>
  )
}

export default CommentsProvider
