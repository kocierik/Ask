import React, { useState } from "react"
import "./index.scss"

function AddComment() {
  const [comment, setComment] = useState("")

<<<<<<< Updated upstream
  const onTextChangeComment = (e) => {
    setComment(e.target.value)
  }

  const publicComment = () => {
    setComment("")
=======
  const [textComment,setTextComment] = useState("")

  const onTextChangeComment = (e) =>{
    setTextComment(e.target.value)
    console.log(textComment)
  }

  const publicComment = () =>{
    
    setTextComment("")
>>>>>>> Stashed changes
  }

  return (
    <div className="container__comment">
<<<<<<< Updated upstream
      <input
        type="text"
        placeholder="Insert a comment"
        value={comment}
        onChange={onTextChangeComment}
      />
=======
      <input type="text" placeholder="Insert a comment" value={textComment} onChange={onTextChangeComment} />
>>>>>>> Stashed changes
      <button onClick={publicComment}>pubblica</button>
    </div>
  )
}

export default AddComment
