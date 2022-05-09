import styled from "styled-components";
import React, { useEffect, useState } from "react";
import { usersRef } from "../firebase/index";
import { doc, getDoc } from "firebase/firestore";
import placerholder from "../volunteer-placeholder-image.svg";
import { useParams } from "react-router-dom";
import Header from "../components/Header";

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
      <Header />
      <ProfileTop>
        <div className="profiletop-center">
          <img src={user.image} className="profile-picture" alt=""></img>
          <h3> {user.displayName} </h3>
          <h3> {user.name} </h3>
          <a>
            <img src="/images/icons/facebook-logo-icon.svg"></img>
          </a>
          <a>
            <img src="/images/icons/instagram-logo-icon.svg"></img>
          </a>
        </div>
      </ProfileTop>
      <InfoHolder>
        <About>
          <div className="countries">
            <h3>About</h3>
            <p>Nationality: {user.nationality} </p>
            <p>Country of residency: {user.residency} </p>
          </div>
          <p>{user.bio}</p>
        </About>
      </InfoHolder>
      <InfoHolder>
        <Interests>
          <h3 className="interests-heading">Interests</h3>
          <p className="interests">{user.interests}</p>
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
    object-fit: cover;
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
  border: 1px solid #d9b233;
  text-align: center;
  padding: 0.5rem;
  width: 10%;
`;
const Projects = styled.div``;
const Photos = styled.div``;

export default UserProfile;
