import Comment from "./Comment";

const CommentList = ({ comments }) => {
  return (
    <div className="space-y-4">
      {comments.map((comment) => (
        <Comment key={comment.id} {...comment} />
      ))}
    </div>
  );
};

export default CommentList;
