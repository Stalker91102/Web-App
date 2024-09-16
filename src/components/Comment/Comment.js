import React from "react";

const Comment = (props) => {
  console.log(props);
  const { comment } = props.comment;
  return (
    <div>
      <li>{comment}</li>
    </div>
  );
};

export default Comment;
