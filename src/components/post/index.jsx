import React from 'react'
import "./index.scss"
function Post({text}) {
  return (
    <div className="post">
      <legend>Titolo post</legend>
      <p>{text}</p>
    </div>
  )
}

export default Post
