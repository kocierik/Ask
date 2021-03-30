import React, { useRef, useState } from 'react'
import "./index.scss"
function AddComment() {

  const [comment,setComment] = useState("")

  const onTextChangeComment = (e) =>{
    setComment(e.target.value)
  }

  const publicComment = () =>{
    setComment("")
  }

  return (
    <div className="container__comment">
      <input type="text" placeholder="Insert a comment" value={comment} onChange={onTextChangeComment} />
      <button onClick={publicComment}>pubblica</button>
    </div>
  )
}

export default AddComment
