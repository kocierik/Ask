import React, { useContext } from "react"
import { userContext } from "../../providers/UsersProvider"

function Comment({ content, createAt }) {
  const commentUser = useContext(userContext)
  console.log(commentUser)
  return (
    <div>
      <p>
        {commentUser.displayName}: {content}
      </p>
    </div>
  )
}

export default Comment
