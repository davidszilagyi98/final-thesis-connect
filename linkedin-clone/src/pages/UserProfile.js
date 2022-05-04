import styled from "styled-components";
import React, { useEffect, useState } from "react";
import { usersRef } from "../firebase/index";
import { doc, getDoc } from "firebase/firestore";
import placerholder from "../volunteer-placeholder-image.svg";

const UserProfile = ({ uid }) => {
  const { user, setUser } = useState("");

  const [name, setName] = useState("");
  const [nationality, setNationality] = useState("");
  const [residency, setResdidency] = useState("");
  const [bio, setBio] = useState("");
  const [interests, setInterests] = useState("");
  const [projects, setProjects] = useState("");
  const [photos, setPhotos] = useState("");

  useEffect(() => {
    async function getUser() {
      if (uid) {
        // get more info about the user from users collection
        const docRef = doc(usersRef, user.uid); // use auth users uid to get user data from users collection
        const userData = (await getDoc(docRef)).data();
        if (userData) {
          // if userData exists set states with values from userData (data from firestore)
          setName(userData.name);
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
  }, [uid]);

  return (
    <div>
      <ProfileTop>
        <div>
          <img></img>
          <h3> {user.displayName} </h3>
          <h3> {name} </h3>
          <a>
            <img></img>
          </a>
          <a>
            <img></img>
          </a>
        </div>
      </ProfileTop>
      <InfoHolder>
        <About>
          <h3>About</h3>
          <p>Nationality {nationality} </p>
          <p>Country of residency {residency} </p>
          <p>{user.bio}</p>
        </About>
      </InfoHolder>
      <InfoHolder>
        <Interests>
          <h3>Interests</h3>
          <p>{interests}</p>
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
          <img></img>
        </Photos>
      </InfoHolder>
    </div>
  );
};
const ProfileTop = styled.div``;

const InfoHolder = styled.div``;

const About = styled.div``;
const Interests = styled.div``;
const Projects = styled.div``;
const Photos = styled.div``;

export default UserProfile;
