import React from 'react'

function Post({text}) {
  return (
    <div className="post">
      <legend>Titolo post</legend>
      <p>{text}</p>
    </div>
  )
}

export default Post
