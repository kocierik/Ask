import React, { useEffect, useState } from 'react';
import './App.scss';
import './components/static/img/image.jpg'
import AccessPage from './components/accessPage'
import Header from './components/header'
import Footer from './components/footer'
import CommentArea from './components/commentArea'
import { auth } from './server/firebase';
function App() {
  // eslint-disable-next-line no-unused-vars
  const [user, setUser] = useState()
  const [sign, onSign] = useState(true)
  const onChangeSign = () => {
    sign ? onSign(false) : onSign(true)
  }

  useEffect(()=>{
    auth.onAuthStateChanged(user =>{
      setUser(user)
      console.log(user)
    })
  }, [])

  return (
    <div className="container">
      <Header change={onChangeSign} log={sign} />
      <div className="line-title" />
      <div className="container__content">
      
        <CommentArea />
        <AccessPage sign={sign}/>
      </div>
      <Footer />
    </div>
  );
}

export default App;
