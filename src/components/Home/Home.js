import React from "react";
import Posts from "../Posts/Posts";
import { useState } from "react";
import "./Home.css";
import About from "../About/About";
import { useEffect } from "react";
const Home = () => {
  const [posts, setPosts] = useState([]);
 
  const [loading, setLoading] = useState(false);
  const [count,setCount]=useState(0);
 
  const [text, setText] = useState("");
 
  const handlePost = (e) => {
    e.preventDefault();
    const newPost = [
      {
        id: Math.floor(Math.random() * 20) + 30,
        joke: text,
      },
      ...posts,
    ];
    setPosts(newPost);
    setCount(posts.length+1);
    setText("");
  };
  return (
    <section>
      <div className="container py-3">
        <div className="row">
          <div className="col-md-3 profile">
            <div className="img">

            </div>
            
            <form>
              <textarea 
                className="textarea"
                rows="5"
                placeholder="Напиши пост!"
                onChange={(e) => setText(e.target.value)}
                value={text}
              ></textarea>
              <br />
              <button onClick={handlePost} className="btn btn-primary btn-sm">
                Опубликовать!
              </button>
            </form>
          </div>
          <div> количество постов: {count}</div>
          <div className="col-md-7">
            {loading ? (
              <h1 className="text-center">...</h1>
            ) : (
              posts.map((post) => <Posts key={post.id} posts={post}></Posts>)
            )}
          </div>
          <div className="col-md-2">
            <About></About>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
