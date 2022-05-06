import { useEffect, useState } from "react";
import styled from "styled-components";
import placeholder from "../volunteer-placeholder-image.svg";

export default function CreatePost({ savePost, post }) {
  const [image, setImage] = useState("");
  const [body, setBody] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    if (post) {
      setBody(post.body);
      setImage(post.image);
    }
  }, [post]); // useEffect is called every time post changes.

function handleImageChange(event) {
        const file = event.target.files[0];
        if (file.size < 5000000) {
            // image file size must be below 0,5MB
            const reader = new FileReader();
            reader.onload = event => {
                setImage(event.target.result);
            };
            reader.readAsDataURL(file);
            setErrorMessage(""); // reset errorMessage state
        } else {
            // if not below 0.5MB display an error message using the errorMessage state
            setErrorMessage("The image file is too big!");
        }
    }

  function handleSubmit(event) {
      
    event.preventDefault();
    const formData = {
      body: body,
      image: image,
    };

    const validForm = formData.body && formData.image; // will return false if one of the properties doesn't have a value
    if (validForm) {
      // if all fields/ properties are filled, then call savePost
      savePost(formData);
    } else {
      // if not, set errorMessage state.
      setErrorMessage("Please, fill in all fields.");
    }
  }

  return (
      <PostBoxContainer>
    <form onSubmit={handleSubmit}>
      <label>
        <input type="text" value={body} placeholder="What's in your mind?" onChange={(e) => setBody(e.target.value)} />
      </label>
      <label>
                Image
                <input type="file" className="file-input" accept="image/*" onChange={handleImageChange} />
                <img className="image-preview" src={image} alt="Choose" onError={event => (event.target.src = placeholder)} />
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
