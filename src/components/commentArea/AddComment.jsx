import React, { useState } from "react"
import "./index.scss"

function AddComment() {
  const [comment, setComment] = useState("")

  const [textComment, setTextComment] = useState("")

  const onTextChangeComment = (e) => {
    setTextComment(e.target.value)
  }

  const publicComment = () => {
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
