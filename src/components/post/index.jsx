import React from 'react'
import "./index.scss"
function Post({text, title}) {
  return (
    <div className="post">
      <legend>{title}</legend>
      <p>{text}</p>
    </div>
  )
}

export default Post
