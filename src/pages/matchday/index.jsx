import React from 'react'
import "./index.scss"
import {signOut} from "../../server/firebase"
import { useHistory } from 'react-router'
import MakePost from '../../components/makePost'
import CommentArea from '../../components/commentArea'

function MatchDay() {
  const history = useHistory()
  const onLogOutClick = async () =>{
    await signOut()
    history.push("/auth")
  }

  return (
    <div className="container">
      <div className="line-title" />
      <div className="container__content">
      <CommentArea />
      <MakePost />
      <button onClick={onLogOutClick}>Sign out</button>
      </div>
    </div>
  )
}
export default MatchDay
