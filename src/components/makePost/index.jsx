import React, {useRef} from 'react'
import './index.scss';
function MakePost({onAddClick}) {
  const textComment = useRef()
  const textTitle = useRef()
  const onTextChangeComment = (e) =>{
    textComment.current = e.target.value
  }
  const onTextChangeTitle = (e) =>{
    textTitle.current = e.target.value
  }
  const publicPost = () =>{
    const dataPost = {content : textComment.current}
    onAddClick(dataPost)
    textComment.current = ""
    textTitle.current = ""
  }

  return (
    <div className="post-maker">
      Scrivi un post
      <input placeholder="Insert a title" ref={textTitle} onChange={onTextChangeTitle} />
      <textarea placeholder="Insert a comment" ref={textComment} onChange={onTextChangeComment} />
      <button onClick={publicPost}>pubblica</button>
    </div>
  )
}

export default MakePost
