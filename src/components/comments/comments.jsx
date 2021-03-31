import React from 'react'
import Comment from './comment'

function Comments(props) {
  console.log(props.textComments.savedComments)
  return (
    <div>
      {/* {props.textComments.savedComments.map(comment => <Comment {...comment} key={comment.id} />)} */}
    </div>
  )
}

export default Comments
