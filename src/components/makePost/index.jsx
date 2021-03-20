import React, {useRef} from 'react'
import './index.scss';
function MakePost({onAddClick}) {
  const text = useRef()
  // const [text,setText] = useState("")
  const onTextChange = (e) =>{
    text.current = e.target.value
  }
  const publicPost = (e) =>{
    onAddClick(text.current)
    text.current = ""
  }

  return (
    <div className="post-maker">
      Scrivi un post
      <textarea placeholder="Insert a comment" ref={text} onChange={onTextChange} />
      <button onClick={publicPost}>pubblica</button>
    </div>
  )
}

export default MakePost
