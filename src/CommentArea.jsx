import React, {useEffect, useState} from 'react'
import MakePost from "./components/makePost"
import Post from "./post"

function CommentArea(props) {
  const [posts, setPosts] = useState([])
  const onAddClick = (post) =>{
    setPosts([...posts,post])
  }
  useEffect(() =>{
    if(posts.length !==0) alert("commento pubblicato!")
  },[posts])
  return (
    <div className="container-content_left">
        
    {posts.map(text => <Post text={text} key={text}/>)}
    <MakePost onAddClick={onAddClick}/>
    
    </div>  
  )
}

export default React.memo(CommentArea)
