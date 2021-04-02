import React from "react"

function Comment({ content, createAt }) {
  return (
    <div>
      <p>{content}</p>
    </div>
  )
}

export default Comment
