import React from 'react'

function Header(props) {

  return (
    <div className="header">
    <div className="header-title"><a href="http://localhost:3000/">StreamingSport</a></div>
    <div className="menu-bar">
      <div className="info">
        <button className="btn-style">matchDay</button>
      </div>
      <div className="post">
        <button className="btn-style" onClick={() =>props.change()}>{props.log ? "Sign in" : "Sign up"} </button>
      </div>
    </div>
    </div>
  )
}

export default Header
