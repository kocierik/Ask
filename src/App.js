import { useState } from 'react';
import './App.css';
import "./image.jpg"
import Login from "./Login"
import Register from "./Register"
function App() {
  const [sign,onSign] = useState(true)

  const onChangeSign = () =>{
    sign ? onSign(false) : onSign(true)
  }

  return (
    <div className="container">
      <div className="header">
      <div className="header-title"><a href="http://localhost:3000/">StreamingSport</a></div>

      <div className="menu-bar">
        <div className="info">
          <button className="btn-style">matchDay</button>
        </div>
        <div className="post">
          <button className="btn-style" onClick={() =>onChangeSign()}>{sign ? "Sign in" : "Sign up"} </button>
        </div>
      </div>
      </div>
      <div className="line-title"></div>
      
      <div className="container-content">
        <div className="container-content_left"></div>  
        <div className="container-content_right">
          <div className="container-form">
            <div className="title-login" >{!sign ? "Sign in" : "Sign up"}</div>
            <div className="line"></div>
              {sign ? <Login /> : <Register />} 
          </div>
        </div>

      </div>
      <div className="footer">
        <div className="line"></div>
      </div>
    </div>
  );
}

export default App;
