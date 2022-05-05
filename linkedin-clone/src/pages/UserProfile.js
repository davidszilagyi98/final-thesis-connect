import styled from "styled-components";
import React, { useEffect, useState } from "react";
import { usersRef } from "../firebase/index";
import { doc, getDoc } from "firebase/firestore";
import placerholder from "../volunteer-placeholder-image.svg";
import { useParams } from "react-router-dom";

const UserProfile = () => {
  const { uid } = useParams();

  const [user, setUser] = useState({
    image: placerholder,
    name: "User's Name",
  });

  useEffect(() => {
    async function getUser() {
      const docRef = doc(usersRef, uid);
      const docSnap = await getDoc(docRef);
      if (docSnap.data()) {
        setUser(docSnap.data());
      }
    }
    getUser();
  }, [uid]);

  return (
    <div>
      <ProfileTop>
        <div>
          <img src={user.image} alt=""></img>             
          <h3> {user.displayName} </h3>
          <h3> {user.name} </h3>
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
          <p>Nationality {user.nationality} </p>
          <p>Country of residency {user.residency} </p>
          <p>{user.bio}</p>
        </About>
      </InfoHolder>
      <InfoHolder>
        <Interests>
          <h3>Interests</h3>
          <p>{user.interests}</p>
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
