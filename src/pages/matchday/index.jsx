import React, { useContext } from 'react'
import "./index.scss"
import {auth, signOut} from "../../server/firebase"
import { useHistory } from 'react-router'
import MakePost from '../../components/makePost'
import CommentArea from '../../components/commentArea'
import { userContext } from '../../providers/UsersProvider'
function MatchDay() {
  const history = useHistory()
  const onLogOutClick = async () =>{
    await signOut()
    history.push("/auth")
  }
  const user = useContext(userContext)
  return (
    <div className="container">
    <div className="header-matchday">
      {auth.currentUser.displayName}
      <img src={user.photoURL} alt="foto"/>
      <div className="line-title"></div>
    </div>
      <div className="container__content">
      <CommentArea />
      <MakePost />
      <button onClick={onLogOutClick}>Sign out</button>
      </div>
    </div>
  )
}
export default MatchDay
