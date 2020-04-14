// You will add code to this file
import React, { useState } from "react";
import CommentInput from "./CommentInput";
import Comment from "./Comment";
import "./Comment.css";

const CommentSection = props => {
  // Add state for the comments
  const [ comments, setComments ] = useState(props.comments);
  const [ newComment, setNewComment ] = useState({ text: '' });

  return (
    <div>
      {comments.map(comment => {
        return <Comment comment={comment} />
      })}
      <CommentInput comment={newComment} setNewComment={setNewComment} submitComment={() => {
          setComments([...comments,  newComment]);
          setNewComment({ text: '' });
        }
      } />
    </div>
  );
};

export default CommentSection;
