import React  from 'react'
import { signInWithGoogle } from '../../server/firebase'

function Login() {

  const onSignIn = () => {
    signInWithGoogle()
  }
  
  return (
    <div>
      <form>
        <label>username</label>
        <input type="text" size="30" />
        <label>password</label>
        <input type="text" size="30" />
        <button type="button" value="" className="submit-button" >submit</button>
        <button type="button" value="" onClick={onSignIn} className="submit-button" >submit with google</button>
      </form>
      </div>
  )
}
export default Login
