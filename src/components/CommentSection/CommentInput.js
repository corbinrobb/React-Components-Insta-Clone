// You do not need to do anything in this file
import React from 'react';

const CommentInput = props => {
  return (
    <form className="comment-form" onSubmit={(e) => {
      e.preventDefault();
      props.submitComment();
    }}>
      <input
        type="text"
        value={props.comment.text}
        placeholder="Add comment... "
        onChange={(e) => {
          props.setNewComment({
            username: "Shrek",
            text: e.target.value
          })
        }}
      />
    </form>
  );
};

export default CommentInput;
