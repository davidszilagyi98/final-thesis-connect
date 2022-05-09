import styled from "styled-components";
import { useUserAuth } from "../context/userContext";
import React, { useEffect, useState } from "react";
import { getAuth } from "firebase/auth";
import { usersRef } from "../firebase/index";
import { doc, getDoc } from "firebase/firestore";
import Header from "../components/Header";

const Profile = () => {
  const { user } = useUserAuth();
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [nationality, setNationality] = useState("");
  const [residency, setResdidency] = useState("");
  const [bio, setBio] = useState("");
  const [interests, setInterests] = useState("");
  const [projects, setProjects] = useState("");
  const [photos, setPhotos] = useState("");
  const auth = getAuth();
  useEffect(() => {
    async function getUser() {
      if (auth.currentUser) {
        // get more info about the user from users collection
        const docRef = doc(usersRef, auth.currentUser.uid); // use auth users uid to get user data from users collection
        const userData = (await getDoc(docRef)).data();
        if (userData) {
          // if userData exists set states with values from userData (data from firestore)
          setName(userData.name);
          setImage(userData.image);
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
  }, [auth.currentUser]); // dependencies: useEffect is executed when auth.currentUser changes
  return (
    <div>
      {/* <Span /> */}
      <Header />
      <ProfileTop>
        <div className="profiletop-center">
          <img src={image} className="profile-picture" alt=""></img>
          <h3> {user.displayName} </h3>
          <h3> {name} </h3>
          <a href="#">
            <img src="/images/icons/facebook-logo-icon.svg" alt=""></img>
          </a>
          <a>
            <img src="/images/icons/instagram-logo-icon.svg" alt=""></img>
          </a>
        </div>
      </ProfileTop>
      <InfoHolder>
        <About>
          <div className="countries">
            <h3>About</h3>
            <p>Nationality: {nationality} </p>
            <p>Country of residency: {residency} </p>
          </div>
          <p>{bio}</p>
        </About>
      </InfoHolder>
      <InfoHolder>
        <Interests>
          <h3 className="interests-heading">Interests</h3>
          <p className="interests">{interests}</p>
        </Interests>
      </InfoHolder>
      <InfoHolder>
        <Projects>
          <h3>Projects</h3>
        </Projects>
      </InfoHolder>
      <InfoHolder>
        <Photos>
          <h3>Photos</h3>
          
        </Photos>
      </InfoHolder>
    </div>
  );
};

// const Span = styled.div`
//   /* background-color: #d9b233;
//   width: 80%;
//   height: 159px;
//   margin: 0 auto;
//   border-radius: 12px 12px 0 0; */
// `;
const ProfileTop = styled.div`
  background: linear-gradient(to top, #f5f5f5 50%, #d9b233 50%);
  border-radius: 12px 12px 0 0;
  width: 80%;
  margin: 0 auto;
  margin-top: 5rem;
  .profile-picture {
    width: 180px;
    height: 180px;
    border-radius: 360px;
    margin-top: 3rem;
  }

  .profiletop-center {
    text-align: center;
    padding-bottom: 2rem;
  }
`;

const InfoHolder = styled.div`
  background-color: white;
  border-radius: 12px;
  width: 75%;
  margin: 0 auto;
  margin-bottom: 3rem;
  padding: 2rem;
`;

const About = styled.div`
  .countries {
    margin-bottom: 2rem;
  }
`;
const Interests = styled.div`
  .interests-heading {
    margin-bottom: 1rem;
  }
  .interests {
    border: 1px solid #d9b233;
    text-align: center;
    padding: 0.5rem;
    width: 10%;
  }
`;
const Projects = styled.div``;
const Photos = styled.div``;

export default Profile;