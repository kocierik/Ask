import React from "react"
import Post from "../post"

function Comments() {
  return (
    <div>
      {comments.map((post) => (
        <Post {...post} key={post.id} />
      ))}
    </div>
  )
}

export default Comments
