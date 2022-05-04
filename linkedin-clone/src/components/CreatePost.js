import { useEffect, useState } from "react";
import styled from "styled-components";

export default function CreatePost({ savePost, post }) {
  const [body, setBody] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    if (post) {
      setBody(post.body);
    }
  }, [post]); // useEffect is called every time post changes.

  function handleSubmit(event) {
      
    event.preventDefault();
    const formData = {
      body: body,
    };

    const validForm = formData.body; // will return false if one of the properties doesn't have a value
    if (validForm) {
      // if all fields/ properties are filled, then call savePost
      savePost(formData);
    } else {
      // if not, set errorMessage state.
      setErrorMessage("Please, fill in all fields.");
    }
    setBody("");
  }

  return (
      <PostBoxContainer>
    <form onSubmit={handleSubmit}>
      <label>
        <input type="text" value={body} placeholder="What's in your mind?" onChange={(e) => setBody(e.target.value)} />
      </label>
      <p className="text-error">{errorMessage}</p>
      <button type="submit">Post</button>
    </form>
     </PostBoxContainer>
  );
}

const PostBoxContainer = styled.div`
   input {
       width: 80%;
   }
`
