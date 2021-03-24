import React, { useRef } from 'react'
import { useHistory } from 'react-router'
import { auth, createUserProfileDocument } from '../../server/firebase'
import "./index.scss"
function Register() {

  const textEmail = useRef()
  const textUsername = useRef()
  const textPassword = useRef()
  const history = useHistory()
  const onLogin = async  () => {
    const data = {
      username : textUsername.current,
      email : textEmail.current,
      password : textPassword.current
    }
     const {email, password, username} = data
 
     try {
       const { user } = await auth.createUserWithEmailAndPassword(email, password).then(
         history.push("/daily-match")
       )
       createUserProfileDocument(user, {username})
     } catch (error) {
       console.error(error)
     }

  }

  const onTextChangeUsername = (e) =>{
    textUsername.current = e.target.value
  }
  const onTextChangeEmail = (e) =>{
    textEmail.current = e.target.value
  }
  const onTextChangePassword = (e) =>{
    textPassword.current = e.target.value
  }


  return (
    <div>
      <form>
        <label>username</label>
          <input type="text" size="30" ref={textUsername} onChange={onTextChangeUsername}></input>
        <label>email</label>
          <input type="email" size="30" ref={textEmail} onChange={onTextChangeEmail}></input>
        <label>password</label>
          <input type="password" size="30" ref={textPassword} onChange={onTextChangePassword}></input>
        <input type="button" value="submit" onClick={onLogin} className="submit-button"></input>
      </form>
    </div>
  )
}

export default Register
