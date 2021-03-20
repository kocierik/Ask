import { useEffect, useState } from 'react';
import React from 'react'
import './App.scss';
import "./image.jpg"
import AccessPage from "./AccessPage"
import {firestore} from "./firebase"
import Header from "./Header"
import Footer from "./components/footer"
import CommentArea from "./CommentArea"

function App() {
  const [sign,onSign] = useState(true)
  const onChangeSign = () =>{
    sign ? onSign(false) : onSign(true)
  }  

  useEffect(() =>{
    const match = firestore.collection('match').get().then(snapshot => {
      console.log({snapshot})
    })
    console.log({match})
  },[])

  return (
    <div className="container">
      <Header change={onChangeSign} log={sign}/>
      <div className="line-title"></div>
      <div className="container__content">
        <CommentArea />
        <AccessPage sign={sign}/>
      </div>
      <Footer />
    </div>
  );
}

export default App;
