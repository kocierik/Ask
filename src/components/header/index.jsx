import React from 'react'
import { Link } from 'react-router-dom'
import "./index.scss"
function Header(props) {

  return (
    <div className="header">
    <div className="header-title"><a href="http://localhost:3000/">StreamingSport</a></div>
    <div className="menu-bar">
      <div className="info">
        <Link to="/daily-match" className="btn-style">Daily match</Link>
      </div>
      <div className="post">
        <button className="btn-style" onClick={() =>props.change()}>{props.log ? "Sign in" : "Sign up"} </button>
      </div>
    </div>
    </div>
  )
}

export default Header
