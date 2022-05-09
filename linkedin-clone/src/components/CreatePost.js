import { useEffect, useState } from "react";
import styled from "styled-components";
import placeholder from "../photo-icon.svg";
import PopupProject from "./Popup";
import { usersRef } from "../firebase";
import { doc, getDoc } from "firebase/firestore";
import { getAuth } from "firebase/auth";

export default function CreatePost({ savePost, post }) {
  const [image, setImage] = useState("");
  const [body, setBody] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const [userImage, setUserImage] = useState("");
  const auth = getAuth();

  useEffect(() => {
    async function getUser() {
      if (auth.currentUser) {
        const docRef = doc(usersRef, auth.currentUser.uid);
        const userData = (await getDoc(docRef)).data();
        if (userData) {
          setUserImage(userData.image);
        }
      }
    }

    getUser();
  }, [auth.currentUser]);

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
          <img src={userImage} alt=""></img>
        <label>
          <input className="posttextinput" type="text" value={body} placeholder="What's in your mind?" onChange={(e) => setBody(e.target.value)} />
        </label>
       
        <button type="submit">Post</button>
        
         </div>
          <p className="text-error">{errorMessage}</p>
       
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

  .textpost {
  display: grid; 
  grid-template-columns: 0.3fr 1fr 1fr 0.4fr; 
  grid-template-rows: 1fr; 
  gap: 0px 0px; 
  grid-template-areas: "image label label button"; 
  align-items: center;
  margin: 0 10px 30px 10px;
   
    img {
      grid-area: image;
      width: 60px;
      height: 60px;
      margin: 0 auto;
    }

    label {
      width: 95%;
      grid-area: label; 
      margin: 0 auto;

      input {
        display: flex;
        width: 95%;
        border: none;
        background-color: #E5E5E7;
        line-height: 2rem;
        border-radius: 12px;
        padding: 4px 12px;
        
        ::placeholder {
          color: #333;
          font-family: Poppins, sans-serif;
        }

        :focus {
         outline: none;
        }
      }
    }

    button {
      grid-area: button;
      display: block;
      margin: 0 auto;
      color: #fff;
      background-image: linear-gradient(to right top, #114265, #15486d, #184e76, #1c557e, #1f5b87);
      width: 90%;
      font-size: 14px;
      padding: 0.3rem;
      border: none;
      border-radius: 8px;
      text-decoration: none;
       box-shadow: 0px 3px 6px 2px rgba(207, 207, 207, 0.4);
      -webkit-box-shadow: 0px 3px 6px 2px rgba(207, 207, 207, 0.4);
      -moz-box-shadow: 0px 3px 6px 2px rgba(207, 207, 207, 0.4);
      &:hover {
      cursor: pointer;
      background-color: #164466;
      }
    }
  }

  .sharebuttons {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    

    label {
      display: flex;
      justify-content: center;
      align-items: center;
    

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
      box-shadow: none;
    }

    span {
          color: #1f5b87;
          font-size: 12px;
          align-items: center;
          font-weight: 500;
        }
  }

  .upload-button {
    display: flex;
  }
  .upload-button>input {
  display: none;
}
`;
