import React from 'react'
import "./index.scss"
function Register() {
  return (
    <div>
      <form>
        <label>username</label>
          <input type="text" size="30"></input>
        <label>email</label>
          <input type="email" size="30"></input>
        <label>password</label>
          <input type="password" size="30"></input>
        <input type="submit" value="submit" className="submit-button"></input>
      </form>
    </div>
  )
}

export default Register
