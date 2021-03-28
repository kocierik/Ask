import React, { useContext, useRef } from 'react'
import { userContext } from '../../providers/UsersProvider'
import { auth, firestore } from '../../server/firebase'
import "./index.scss"

  
function UserProfile() {

  const currentUser = useContext(userContext)
  const textName = useRef()

  const onChangeName = (e) =>{
    return textName.current = e.target.value
  }

  const handleSubmit = async () =>{
    if(textName.current){
       const userRef = await firestore.doc(`users/${auth.currentUser.uid}`)
       userRef.update({displayName: textName.current})
    }
  }

  return (
    <div className="container">
      <div className="header">
        Questo è il profilo di {currentUser.displayName}
      </div>
      <div className="line-title"/>
      <div className="container__content">
        <div className="container__content__left">
          <img src={currentUser.photoURL} alt="profile" height="100px" width="100px"/>
        </div>
        
        <div className="container__content_right">
          <input type="text" ref={textName} onChange={onChangeName} placeholder="Change name"/>
          <input type="submit" onClick={handleSubmit}/>
        </div>
      </div>
    </div>
  )
}

export default UserProfile
