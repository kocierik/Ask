import { firestore } from "../../server/firebase"
import Comment from "../comment"

function Comments({ textComments, postId }) {
  console.log(textComments)
  // const commentAuthor = firestore.doc()
  return (
    <div>
      {textComments.map((comment) => (
        <Comment
          content={comment.content}
          createAt={comment.createdAt}
          // postId={}
          key={comment.id}
        />
      ))}
    </div>
  )
}

export default Comments
