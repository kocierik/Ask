import React from "react"
import ReactDOM from "react-dom"
import "./index.scss"
import App from "./pages/App"
import { BrowserRouter as Router } from "react-router-dom"
import PostsProvider from "./providers/PostsProvider"
import UsersProvider from "./providers/UsersProvider"
import CommentsProvider from "./providers/commentsProvider"

ReactDOM.render(
  <Router>
    <UsersProvider>
      <PostsProvider>
        <CommentsProvider>
          <App />
        </CommentsProvider>
      </PostsProvider>
    </UsersProvider>
  </Router>,
  document.getElementById("root")
)
