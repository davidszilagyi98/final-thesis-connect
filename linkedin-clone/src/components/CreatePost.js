import { useEffect, useState } from "react";
import styled from "styled-components";
import placeholder from "../photo-icon.svg";
import PopupProject from "./Popup";

export default function CreatePost({ savePost, post }) {
  const [image, setImage] = useState("");
  const [body, setBody] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    if (post) {
      setBody(post.body);
      setImage(post.image);
    }
  }, [post]); // 

  function handleImageChange(event) {
    const file = event.target.files[0];
    if (file.size < 500000) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setImage(event.target.result);
      };
      reader.readAsDataURL(file);
      setErrorMessage(""); 
    } else {
      setErrorMessage("The file is too big!");
    }
  }
  


  function handleSubmit(event) {
    event.preventDefault();
    const formData = {
      body: body,
      image: image,
    };

    const validForm = formData.body || formData.image; 
    if (validForm) {
      savePost(formData);
    } else {
      setErrorMessage("Please, write something.");
    }
    setBody('');
     setImage(event.target.src = placeholder);
  }

  return (
    <PostBoxContainer>
      <form onSubmit={handleSubmit}>
        <div className="textpost">
        <label>
          <input className="posttextinput" type="text" value={body} placeholder="What's in your mind?" onChange={(e) => setBody(e.target.value)} />
        </label>
        <p className="text-error">{errorMessage}</p>
        <button type="submit">Post</button>
         </div>
       
        <div>

            <div className="sharebuttons">
              <div className="upload-button">
              <label for="file-input">
              <img className="image-preview" src={image} alt="Choose" onError={event => (event.target.src = placeholder)} />
               <span>Photo</span>
              </label>
              <input id="file-input" type="file" accept="image/*" onChange={handleImageChange} />
              </div>

              <div className="upload-button">
              <label for="file-input">
              <img src="./images/icons/video-icon.svg" alt="" />
              <span>Video</span>
              </label>
              </div>

              <div className="upload-button">
              <label for="file-input">
              <img src="./images/icons/project-icon.svg" alt="" />
                 <span>Project</span>
              </label>
              <PopupProject/>
              <p className="text-error">{errorMessage}</p>
              </div>
          </div>
        </div>
       </form> 
     </PostBoxContainer>
  );
}

const PostBoxContainer = styled.div`
  .sharebuttons {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;

    label {
      display: flex;
      justify-content: center;
    

    &:hover {
      cursor: pointer;
    }
  }

    img {
      display: block;
      margin-right: 0;
      height: 20px;
      width: 100%;
      margin-right: 5px;
      border-radius: 0;
    }

    span {
          color: #1f5b87;
          font-size: 14px;
          align-items: center;
          font-weight: 600;
        }
  }

  .upload-button {
    display: flex;
  }
  .upload-button>input {
  display: none;
}
`;
