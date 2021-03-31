import React, { createContext, useEffect, useState } from "react"
import { firestore } from "../server/firebase"
import { collectionIdAndDocs } from "../server/utilities"

export const PostsContext = createContext()

function PostsProvider(props) {
  const [posts, setPosts] = useState([])

  const callBack = async () => {
    await firestore.collection("posts").onSnapshot((snapshot) => {
      const posts = snapshot.docs.map(collectionIdAndDocs)
      setPosts(posts)
    })

  }

<<<<<<< Updated upstream
  useEffect(() => {
=======

  useEffect( () =>{
>>>>>>> Stashed changes
    callBack()
  }, [])

  return (
<<<<<<< Updated upstream
    <PostsContext.Provider value={[posts, setPosts]}>
      {" "}
      {props.children}{" "}
    </PostsContext.Provider>
=======
    <PostsContext.Provider value={posts}> { props.children } </PostsContext.Provider>
>>>>>>> Stashed changes
  )
}

export default PostsProvider
