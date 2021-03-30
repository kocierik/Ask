import React from 'react'

function Comments() {
  return (
    <div>
      { comments.map(post => <Post {...post} key={post.id} />) }
    </div>
  )
}

export default Comments
