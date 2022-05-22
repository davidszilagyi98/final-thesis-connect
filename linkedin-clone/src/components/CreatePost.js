import { useEffect, useState } from "react";
import styled from "styled-components";
import placeholder from "../photo-icon.svg";
import { usersRef } from "../firebase";
import { doc, getDoc } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import placeholderIMG from "../volunteer-placeholder-image.svg";

export default function CreatePost({ savePost, post }) {
  const [image, setImage] = useState("");
  const [body, setBody] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const [userImage, setUserImage] = useState("");
  const auth = getAuth();

  const [show, setShow] = useState(false);

  useEffect(() => {
    async function getUser() {
      if (auth.currentUser) {
        const docRef = doc(usersRef, auth.currentUser.uid);  // gets the autentichated user
        const userData = (await getDoc(docRef)).data();  // gets the data of the autentichated user
        if (userData) {
<<<<<<< HEAD
          setUserImage(userData.image);  // shows the image of the autentichated user
=======
          setUserImage(userData.image);
        } else {
          setUserImage(placeholderIMG);
<<<<<<< Updated upstream
=======
>>>>>>> 2d0a6c9567a61838a2dd9d58727f1130c1ba33cc
>>>>>>> Stashed changes
        }
      }
    }

    getUser();
  }, [auth.currentUser]);

  useEffect(() => {
    if (post) {
      // if post, set the states with values from the post object.
      // The post object is a prop, passed from UpdatePage
      setBody(post.body);
      setImage(post.image);
    }
  }, [post]); // useEffect is called every time post changes

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
      // create a new objebt to hold the value from states / input fields
      body: body,
      image: image,
    };

    const validForm = formData.body || formData.image; // will return false if one of the properties doesn't have a value
    if (validForm) {
      // if all fields or properties are filled, then call savePost
      savePost(formData);
    } else {
      // if not hten show errorMessage
      setErrorMessage("Please, write something.");
    }
    setBody("");
    setImage((event.target.src = placeholder));
  }

  return (
    <PostBoxContainer>
      <form onSubmit={handleSubmit}>
        <div className="textpost">
          <img src={userImage} alt="current-user" />
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
                <img className="image-preview" src={image} alt="Choose" onError={(event) => (event.target.src = placeholder)} />
                <span>Photo</span>
              </label>
              <input id="file-input" type="file" accept="image/*" onChange={handleImageChange} />
            </div>

            <div className="upload-button">
              <label for="file-input">
                <img src="./images/icons/video-icon.svg" alt="video-icon" />
                <span>Video</span>
              </label>
            </div>

            <div className="upload-button">
              <button onClick={() => setShow(!show)}>
                <img src="./images/icons/project-icon.svg" alt="" />
                <span>Project</span>
              </button>
            </div>
          </div>

          {show ? (
            <form className="projectform">
              <input type="text" name="Project name" placeholder="Project name" />
              <input type="text" name="place" placeholder="Place" />
              <input type="date" name="datefrom" placeholder="Project starting date" />
              <input type="date" name="dateto" placeholder="Project ending date" />
              <input type="text" name="countires" placeholder="Volunteers from" />
              <input type="text" name="topic" placeholder="Topic" />
              <input type="text" name="description" placeholder="Description" />
            </form>
          ) : null}
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
    margin: 0 10px 20px 10px;

    img {
      grid-area: image;
      width: 60px;
      height: 60px;
      margin: 0 auto;
    }

    label {
      width: 100%;
      grid-area: label;
      margin: 0 auto;

      input {
        display: flex;
        width: 95%;
        border: none;
        background-color: #e5e5e7;
        line-height: 2rem;
        border-radius: 12px;
        padding: 4px 12px;
        margin: 0;

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

  .text-error {
    color: #333;
    margin: 20px;
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

    button {
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: transparent;
      border: none;

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

  .upload-button > input {
    display: none;
  }

  .projectform {
    margin: 30px auto 10px auto;
    display: flex;
    flex-direction: column;
    width: 80%;
  }

  input {
    line-height: 1.5;
    padding: 5px 10px;
    background-color: #ececec;
    border: none;
    margin-bottom: 8px;
  }
`;
