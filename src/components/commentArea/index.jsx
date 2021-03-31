import React, { useContext } from "react"
import Post from "../post"
import "./index.scss"
import { PostsContext } from "../../providers/PostsProvider"
function CommentArea() {
<<<<<<< Updated upstream
  const [posts] = useContext(PostsContext)

=======
  
  const posts = useContext(PostsContext)
>>>>>>> Stashed changes
  return (
    <div className="container-content_left">
      {posts.map((post) => (
        <Post {...post} key={post.id} />
      ))}
    </div>
  )
}
export default CommentArea
