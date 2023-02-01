import React, { useEffect, useState } from "react";
import "./Feed.css";
import EditIcon from "@mui/icons-material/Edit";

import InputItems from "./InputItems/InputItems";
import PhotoIcon from "@mui/icons-material/Photo";
import Post from "./Post/Post";
import { useAuth0 } from "@auth0/auth0-react";
function Feed() {
  const [posts, setPosts] = useState([]);
  const [input,setInput]=useState()
  const{user}=useAuth0()

  async function getPost() {
    const response = await fetch("https://dummyjson.com/posts");
    const data = await response.json();
    setPosts(data.posts);
  }
  useEffect(() => {
    getPost();
  }, []);
  function addNewPost(e){
    e.preventDefault()
    const copyArray=[...posts]
    copyArray.unshift({

      id:`11${user?.given_name}`,
      body:input,
      tags:['HTML','CSS'],
      name:user?.name,
      userId:10,
      email:user.email,
      reactions:0
     

    })
    setPosts(copyArray)
    setInput("")

  }

  return (
    <div className="feed_container">
      <div className="container">
        <div className="input_container">
          <EditIcon />
          <form>
            <input type="text" value={input}  onChange={(e)=>setInput(e.target.value)}placeholder="Write a post" />
            <button onClick={addNewPost}>Post</button>
          </form>
        </div>
        <div className="input_items">
          <InputItems Icon={PhotoIcon} title="Photo" color="#70B5f9" />
        </div>
      </div>
      {posts?.map((value) => (
        <Post
        key={value.id}
          id={value.id}
          message={value.body}
          tags={value.tags}
          name={value.name}
          userId={value.userId}
          likeCount={value.reactions}
          email={value.email}
        />
      ))}
    </div>
  );
}

export default Feed;
