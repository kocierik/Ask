import React  from 'react'
import { useHistory } from 'react-router'
import { signInWithGoogle } from '../../server/firebase'

function Login() {
  const history = useHistory()

  const onSignIn = () => {

    signInWithGoogle().then(()=>{
      history.push("/daily-match")
    })
  
  }
  
  return (
    <div>
      <form>
        <label>username</label>
        <input type="text" size="30" />
        <label>password</label>
        <input type="text" size="30" />
        <button type="button" value="" className="submit-button" >submit</button>
        <button type="button" value="" onClick={onSignIn} className="submit-button" > submit with google </button>
      </form>
      </div>
  )
}
export default Login
