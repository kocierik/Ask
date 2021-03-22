import React from 'react'
import "./index.scss"
import {signOut} from "../server/firebase"
import { useHistory } from 'react-router'
function MatchDay() {
  const history =  useHistory()
  const out = () =>{
    signOut()
    history.goBack()
  }
  return (
    <div className="container">
      <div className="line-title" />
      <div className="container__content">
      <button onClick={()=> out}>Sign out</button>
      </div>
    </div>
  )
}
export default MatchDay
