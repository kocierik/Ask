import React from "react"

function Comment({ commentUser }) {
  console.log(commentUser)
  return (
    <div>
      <p>
        {commentUser.author}: {commentUser.content}
      </p>
    </div>
  )
}

export default Comment
