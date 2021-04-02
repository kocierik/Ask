import React from "react"

function Comment({ content, createAt }) {
  console.log(content)
  return (
    <div>
      <p>{content}</p>
    </div>
  )
}

export default Comment
