//Complete the necessary code in this file
// import useState
import React, { useState } from "react";
import Post from "./Post";
import "./Posts.css";
import dummyData from '../../dummy-data';
// import data 

const PostsPage = (props) => {
  // set up state for your data
  const [ posts, setPosts ] = useState(dummyData);

  const filterPosts = () => {
    return posts.filter(post => {
      if(!props.searchTerm) {
        return post;
      }
      if(post.username.toLowerCase().includes(props.searchTerm.toLowerCase())) {
        return post;
      }
    });
  }

  return (
    <div className="posts-container-wrapper">
      {/* map through data here to return a Post and pass data as props to Post */}
      { filterPosts().map((post, i) => {
        return <Post key={post.username + i} post={post} />
      }) }
    </div>
  );
};

export default PostsPage;
