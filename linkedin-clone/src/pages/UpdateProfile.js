import styled from "styled-components";
import { useUserAuth } from "../context/userContext";
import React, { useEffect, useState } from "react";
import { getAuth } from "firebase/auth";
import { usersRef } from "../firebase/index";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import Header from "../components/Header";

const UpdateProfile = () => {
  //   const { user } = useUserAuth();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [image, setImage] = useState("");
  const [nationality, setNationality] = useState("");
  const [residency, setResdidency] = useState("");
  const [bio, setBio] = useState("");
  const [interests, setInterests] = useState("");
  const [projects, setProjects] = useState("");
  const [photos, setPhotos] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const auth = getAuth();
  useEffect(() => {
    async function getUser() {
      if (auth.currentUser) {
        const docRef = doc(usersRef, auth.currentUser.uid);
        const userData = (await getDoc(docRef)).data();
        if (userData) {
          setName(userData.name);
          setImage(userData.image);
          setEmail(userData.email);
          setNationality(userData.nationality);
          setResdidency(userData.residency);
          setBio(userData.bio);
          setInterests(userData.interests);
          setProjects(userData.projects);
          setPhotos(userData.photos);
        }
      }
    }

    getUser();
  }, [auth.currentUser]);

  async function handleSubmit(event) {
    event.preventDefault();

    const userToUpdate = { name: name, image: image }; // create an object to hold the user to update properties
    console.log(userToUpdate);
    const docRef = doc(usersRef, auth.currentUser.uid); // create reference to the user in firestore
    await updateDoc(docRef, userToUpdate); // set/update the user in firestore with the values from userToUpdate/values from input fields
  }

  function handleImageChange(event) {
    const file = event.target.files[0];
    if (file.size < 500000) {
      // image file size must be below 0,5MB
      const reader = new FileReader();
      reader.onload = (event) => {
        setImage(event.target.result);
      };
      reader.readAsDataURL(file);
      setErrorMessage(""); // reset errorMessage state
    } else {
      // if not below 0.5MB display an error message using the errorMessage state
      setErrorMessage("The image file is too big!");
    }
  }

  return (
    <div className>
      <Header />
      <Valami>
        <form onSubmit={handleSubmit}>
          <div className="labels">
            <label>
              Name
              <input type="text" value={name} onChange={(e) => setName(e.target.value)} name="name" placeholder="Type name" />
            </label>
            <label>
              Email
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} name="email" placeholder="Type email" disabled />
            </label>

            <label>
              Image
              <input type="file" className="file-input" accept="image/*" onChange={handleImageChange} />
              <img className="image-preview" src={image} alt="Choose" onError={(event) => event.target.src} />
            </label>
            <label>
              Nationality
              <input type="text" value={nationality} onChange={(e) => setNationality(e.target.value)} name="nationality" placeholder="Type name" />
            </label>
            <label>
              Residency
              <input type="text" value={residency} onChange={(e) => setResdidency(e.target.value)} name="residency" placeholder="Type name" />
            </label>
            <label>
              Bio
              <input type="text" value={bio} onChange={(e) => setBio(e.target.value)} name="bio" placeholder="Type name" />
            </label>
            <label>
              Interests
              <input type="text" value={interests} onChange={(e) => setInterests(e.target.value)} name="interests" placeholder="Type name" />
            </label>
            <label>
              Projects
              <input type="text" value={projects} onChange={(e) => setProjects(e.target.value)} name="projects" placeholder="Type name" />
            </label>
            <label>
              Photos
              <input type="text" value={photos} onChange={(e) => setPhotos(e.target.value)} name="photos" placeholder="Type name" />
            </label>
            <p className="text-error">{errorMessage}</p>
            <button>Save User</button>
          </div>
        </form>
      </Valami>
    </div>
  );
};

const Valami = styled.div`
  margin-top: 7rem;
  grid-template-columns: 1 1fr;
  margin-bottom: 2rem;

  .labels {
    display: grid;
    margin: 0 auto;
    width: 75%;
    /* justify-items: center; */
   
  }

  input {
    line-height: 2.3;
    padding: 5px 10px;
    background-color: #ececec;
    border: none;
    margin-bottom: 8px;

    :focus {
      outline: 1px solid #1f5b87;
    }
  }

  button {
    display: block;
    font-size: 1rem;
    background-color: #1f5b87;
    padding: 0 50px;
    height: 40px;
    width: 50%;
    margin: 20px auto 0 auto;
    border-radius: 24px;
    border: none;
    color: #fff;
    text-align: center;

    &:hover {
      background-color: #063a54;
      cursor: pointer;
    }
  }
`;

export default UpdateProfile;
