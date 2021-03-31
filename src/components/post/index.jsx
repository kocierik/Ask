import React, { useContext } from "react"
import "./index.scss"
import { firestore } from "../../server/firebase"
import { userContext } from "../../providers/UsersProvider"
import { Link } from "react-router-dom"

function Post({ content, id, title, stars, user }) {
  const postRef = firestore.doc(`posts/${id}`)
  const remove = () => postRef.delete()
  const starRef = () => postRef.update({ stars: stars + 1 })
  const currentUser = useContext(userContext)

  const ownerPost = (currentUser, user) => {
    if (!currentUser) return false
    return currentUser.uid === user.uid
  }
  return (
    <div className="post">
      <Link to={`/posts/${id}`}>
        {" "}
        <label>Author: {user.displayName}</label>{" "}
      </Link>
      <legend>title: {title}</legend>
      <p>content: {content}</p>
      {ownerPost(currentUser, user) && <button onClick={remove}>Delete post</button>}
      <button onClick={starRef}>⭐{stars}</button>
    </div>
  )
}

export default Post
