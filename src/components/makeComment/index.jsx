import React, { useState } from "react"
import { firestore } from "../../server/firebase"
import "./index.scss"

function AddComment({ postId }) {
  const [textComment, setTextComment] = useState("")
  const onTextChangeComment = (e) => {
    setTextComment(e.target.value)
  }

  const publicComment = async () => {
    const dataComment = { createdAt: new Date(), content: textComment }
    console.log(dataComment)
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
      <button onClick={publicComment}>pubblica</button>
    </div>
  )
}

export default AddComment
