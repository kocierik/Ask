import React, { createContext, useEffect, useState } from 'react'
import { firestore } from '../server/firebase'
import { collectionIdAndDocs } from '../server/utilities'

export const PostsContext = createContext()

function PostsProvider(props) {
  const [posts,setPosts] = useState([])

  const callBack = async () => {
    await firestore.collection('posts').onSnapshot(snapshot =>{
      const posts = snapshot.docs.map(collectionIdAndDocs)
      setPosts(posts) 
    })
  }

  useEffect( () =>{
    callBack()
  },[]) 

  return (
    <PostsContext.Provider value={[posts, setPosts]}> { props.children } </PostsContext.Provider>
  )
}

export default PostsProvider
