import React, { useState } from "react"
import { auth, firestore } from "../../server/firebase"
import "./index.scss"

function AddComment({ postId }) {
  const [textComment, setTextComment] = useState("")
  const onTextChangeComment = (e) => {
    setTextComment(e.target.value)
  }

  const publicComment = async () => {
    const dataComment = {
      author: auth.currentUser.displayName,
      createdAt: new Date(),
      content: textComment,
    }
    await firestore.doc(`/posts/${postId}`).collection("comments").add(dataComment)
    setTextComment("")
  }

  return (
    <div className="container__comment">
      <input
        type="text"
        placeholder="Insert a comment"
        value={textComment}
        onChange={onTextChangeComment}
      />
      <input type="submit" value="pubblica" onClick={publicComment} />
    </div>
  )
}

export default AddComment
