import Comment from "../comment"

function Comments({ textComments, postId }) {
  console.log(textComments)
  return (
    <div>
      {textComments.map((comment) => (
        <Comment
          content={comment.content}
          createAt={comment.createdAt}
          key={comment.id}
        />
      ))}
    </div>
  )
}

export default Comments
