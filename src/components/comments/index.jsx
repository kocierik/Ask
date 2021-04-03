import Comment from "../comment"

function Comments({ textComments }) {
  console.log(textComments)
  debugger
  return (
    <div>
      {textComments.map((comment) => (
        <Comment
          commentUser={comment}
          createAt={comment.createdAt}
          key={comment.id}
        />
      ))}
    </div>
  )
}

export default Comments
