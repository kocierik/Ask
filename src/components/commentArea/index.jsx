import React, {useState} from 'react'
import MakePost from "../makePost"
import Post from "../post"
import "./index.scss"
function CommentArea(props) {
  const [posts, setPosts] = useState([])
  const onAddClick = (post) =>{
    setPosts([...posts,post])
  }

  return (
    <div className="container-content_left">   
    {posts.map(text => <Post text={text} key={text}/>)}
    <MakePost onAddClick={onAddClick}/>
    </div>  
  )
}

export default React.memo(CommentArea)
