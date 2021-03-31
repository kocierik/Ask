import React, { useRef } from "react"
import "./index.scss"
import { auth, firestore } from "../../server/firebase"
function MakePost() {
  const textComment = useRef(null)
  const textTitle = useRef(null)

  const onTextChangeComment = (e) => {
    textComment.current = e.target.value
  }
  const onTextChangeTitle = (e) => {
    textTitle.current = e.target.value
  }
  const publicPost = () => {
    const { uid, displayName, email } = auth.currentUser || {}
    const dataPost = {
      content: textComment.current,
      title: textTitle.current,
      stars: 0,
      user: {
        uid: uid,
        displayName: displayName,
<<<<<<< Updated upstream
        email: email,
      },
=======
        email: email
      },
      favorites: 0,
      comments: 0,
      createdAt: new Date(),
>>>>>>> Stashed changes
    }
    firestore.collection("posts").doc(dataPost.id).set(dataPost)
    textComment.current = ""
    textTitle.current = ""
  }
  return (
    <div className="post-maker">
      Scrivi un post
      <input
        placeholder="Insert a title"
        ref={textTitle}
        onChange={onTextChangeTitle}
      />
      <textarea
        placeholder="Insert a comment"
        ref={textComment}
        onChange={onTextChangeComment}
      />
      <button onClick={publicPost}>pubblica</button>
    </div>
  )
}
export default MakePost
