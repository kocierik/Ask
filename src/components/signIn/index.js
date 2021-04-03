import React, { useState } from "react"
import { useHistory } from "react-router"
import { auth, createUserProfileDocument, firestore } from "../../server/firebase"
import "./index.scss"
function Register() {
  const [textEmail, setEmail] = useState("")
  const [textUsername, setTextUsername] = useState("")
  const [textPassword, setTextPassword] = useState("")
  const [error, setErrror] = useState()

  const history = useHistory()
  console.log(textUsername)
  const onLogin = async () => {
    firestore.doc(`users/${auth.currentUser.uid}`).add({ displayName: textUsername })
    const data = {
      displayName: textUsername,
      email: textEmail,
      password: textPassword,
    }
    const { email, password, displayName } = data

    try {
      debugger
      // console.log(displayName)
      const user = await auth.createUserWithEmailAndPassword(email, password)
      history.push("/daily-match")
      createUserProfileDocument(user, displayName)
      setEmail("")
      setTextUsername("")
      setTextPassword("")
    } catch (error) {
      console.error(error)
      setEmail("")
      setTextUsername("")
      setTextPassword("")
      setErrror(error.message)
    }
  }

  const onTextChangeUsername = (e) => {
    setTextUsername(e.target.value)
  }
  const onTextChangeEmail = (e) => {
    setEmail(e.target.value)
  }
  const onTextChangePassword = (e) => {
    setTextPassword(e.target.value)
  }

  return (
    <div>
      <form>
        <label>username</label>
        <input
          type="text"
          size="30"
          value={textUsername}
          onChange={onTextChangeUsername}
        ></input>
        <label>email</label>
        <input
          type="email"
          size="30"
          value={textEmail}
          onChange={onTextChangeEmail}
        ></input>
        <label>password</label>
        <input
          type="password"
          size="30"
          value={textPassword}
          onChange={onTextChangePassword}
        ></input>
        <input
          type="submit"
          value="submit"
          onClick={onLogin}
          className="submit-button"
        />
      </form>
      {error && <p> Error: {error} </p>}
    </div>
  )
}

export default Register
