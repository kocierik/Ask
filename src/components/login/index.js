import React from 'react'

function Login() {
  return (
    <div>
      <form>
        <label>username</label>
          <input type="text" size="30"></input>
        <label>password</label>
          <input type="text" size="30"></input>
        <input type="submit" value="submit" className="submit-button"></input>
      </form>
    </div>
  )
}

export default Login
