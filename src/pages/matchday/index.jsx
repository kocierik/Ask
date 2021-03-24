import React from 'react'
import "./index.scss"
import {auth, signOut} from "../../server/firebase"
import { useHistory } from 'react-router'
import MakePost from '../../components/makePost'
import CommentArea from '../../components/commentArea'

function MatchDay() {
  const history = useHistory()
  const onLogOutClick = async () =>{
    await signOut()
    history.push("/auth")
  }
  console.log(auth.currentUser.displayName )

  return (
    <div className="container">
      <div className="line-title">{auth.currentUser.username} </div>
      <div className="container__content">
      <CommentArea />
      <MakePost />
      <button onClick={onLogOutClick}>Sign out</button>
      </div>
    </div>
  )
}
export default MatchDay
