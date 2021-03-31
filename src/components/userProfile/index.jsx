import React, { useContext, useRef } from "react"
import { userContext } from "../../providers/UsersProvider"
import { auth, firestore, storage } from "../../server/firebase"
import "./index.scss"

function UserProfile() {
  const currentUser = useContext(userContext)
  const textName = useRef()
  const imageInput = useRef(null)

  const onChangeName = (e) => {
    return (textName.current = e.target.value)
  }

  const handleSubmit = async () => {
    if (textName.current) {
      const userRef = await firestore.doc(`users/${auth.currentUser.uid}`)
      userRef.update({ displayName: textName.current })
    }
  }

  const handlePhoto = async (e) => {
    imageInput.current = e.target.files[0]
    if (imageInput !== null) {
      const userRef = await firestore.doc(`users/${auth.currentUser.uid}`)
      storage
        .ref()
        .child("user-profiles")
        .child(auth.currentUser.uid)
        .child(imageInput.current.name)
        .put(imageInput.current)
        .then((response) => response.ref.getDownloadURL())
        .then((photoURL) => userRef.update({ photoURL }))
    }
  }

  return (
    <div className="container">
      <div className="header">Questo è il profilo di {currentUser.displayName}</div>
      <div className="line-title" />
      <div className="container__content">
        <div className="container__content__left">
          <img
            src={currentUser.photoURL}
            alt="profile"
            height="100px"
            width="100px"
          />
        </div>

        <div className="container__content_right">
          <input
            type="text"
            ref={textName}
            onChange={onChangeName}
            placeholder="Change name"
          />
          <input type="submit" onClick={handleSubmit} />
          <input type="file" ref={imageInput} onChange={handlePhoto} />
        </div>
      </div>
    </div>
  )
}

export default UserProfile
