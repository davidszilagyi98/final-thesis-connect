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
  const [residency, setResidency] = useState("");
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
          setResidency(userData.residency);
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
      <UpdateProfileFormContainer>
        <form onSubmit={handleSubmit}>
          <img className="image-preview" src={image} alt="Choose" onError={(event) => event.target.src} />
          <input type="file" className="file-input" accept="image/*" onChange={handleImageChange} />
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} name="name" placeholder="Name" />
          <input type="text" value={nationality} onChange={(e) => setNationality(e.target.value)} name="nationality" placeholder="Nationality" />
          <input type="text" value={residency} onChange={(e) => setResidency(e.target.value)} name="residency" placeholder="Country of residency" />
          <input type="text" value={bio} onChange={(e) => setBio(e.target.value)} name="bio" placeholder="Tell us about yourself" />
           <input type="text" value={interests} onChange={(e) => setInterests(e.target.value)} name="interests" placeholder="Interests (e.g. traveling, cooking, languages)" />
           <input type="text" value={projects} onChange={(e) => setProjects(e.target.value)} name="projects" placeholder="Previous projects" />
           <input type="text" value={photos} onChange={(e) => setPhotos(e.target.value)} name="photos" placeholder="Upload photos" />
            <p className="text-error">{errorMessage}</p>
            <button>Update Profile</button>
        </form>
      </UpdateProfileFormContainer>
    </div>
  );
};

const UpdateProfileFormContainer = styled.div`
  margin: 7rem auto 2rem auto;
  width: 50%;
  background-color: #fff;
  padding: 3rem;
  border-radius: 24px;
  box-shadow: 0px 3px 6px 2px rgba(207, 207, 207, 0.4);
  -webkit-box-shadow: 0px 3px 6px 2px rgba(207, 207, 207, 0.4);
  -moz-box-shadow: 0px 3px 6px 2px rgba(207, 207, 207, 0.4); 
  
  form {
    display: grid;
    margin: 0 auto;
    width: 70%;
     
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

  img {
    margin: 0 auto 24px auto;
    width: 13rem;
    height: 13rem;
    object-fit: cover;
    border-radius: 50%;
  }

  button {
    display: block;
    font-size: 1rem;
    background-image: linear-gradient(to right top, #114265, #15486d, #184e76, #1c557e, #1f5b87);
    padding: 0 50px;
    height: 40px;
    width: 50%;
    margin: 20px auto 0 auto;
    border-radius: 24px;
    border: none;
    color: #fff;
    text-align: center;
    box-shadow: 0px 3px 6px 2px rgba(207, 207, 207, 0.4);
   -webkit-box-shadow: 0px 3px 6px 2px rgba(207, 207, 207, 0.4);
    -moz-box-shadow: 0px 3px 6px 2px rgba(207, 207, 207, 0.4);

    &:hover {
      background-color: #063a54;
      cursor: pointer;
    }
  }
  }


`;

export default UpdateProfile;
