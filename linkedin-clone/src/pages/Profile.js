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
  }, [auth.currentUser]); // useEffect is executed

  return (
    <div>
      <Header />
      <ProfileTop>
        <img src={image} className="profile-picture" alt="user"></img>
      </ProfileTop>
      <ProfileTopInfo>
        <h3> {user.displayName} </h3>
        <h3>
          {" "}
          {name}
          <a href="/updateprofile">
            <svg xmlns="http://www.w3.org/2000/svg" width="26.385" height="23.449" viewBox="0 0 26.385 23.449">
              <path
                id="Icon_awesome-edit"
                data-name="Icon awesome-edit"
                d="M18.442,3.814l4.132,4.132a.448.448,0,0,1,0,.632l-10,10-4.251.472a.891.891,0,0,1-.985-.985l.472-4.251,10-10A.448.448,0,0,1,18.442,3.814Zm7.421-1.049L23.628.529a1.792,1.792,0,0,0-2.529,0L19.478,2.151a.448.448,0,0,0,0,.632L23.61,6.915a.448.448,0,0,0,.632,0l1.622-1.622a1.792,1.792,0,0,0,0-2.529Zm-8.273,13.1v4.663H2.932V5.866H13.458a.563.563,0,0,0,.389-.16L15.68,3.873a.55.55,0,0,0-.389-.939H2.2A2.2,2.2,0,0,0,0,5.133V21.257a2.2,2.2,0,0,0,2.2,2.2H18.323a2.2,2.2,0,0,0,2.2-2.2V14.029a.551.551,0,0,0-.939-.389l-1.832,1.832A.563.563,0,0,0,17.59,15.861Z"
                transform="translate(0 -0.007)"
                fill="#333"
              />
            </svg>
          </a>
        </h3>
        <div className="profile-social-icons">
          <img src="/images/icons/facebook-logo-icon.svg" alt="facebook-logo" />
          <img src="/images/icons/instagram-logo-icon.svg" alt="instagram-logo" />
        </div>
      </ProfileTopInfo>

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

const ProfileTop = styled.div`
  background: linear-gradient(to top, #f5f5f5 40%, #d9b233 40%);
  border-radius: 12px 12px 0 0;
  width: 80%;
  margin: 5rem auto 0 auto;
  text-align: center;
  height: 15rem;

  .profile-picture {
    width: 180px;
    height: 180px;
    border-radius: 360px;
    margin-top: 3rem;
    object-fit: cover;
  }
`;

const ProfileTopInfo = styled.div`
  text-align: center;
  margin: 0 auto 2rem auto;
  font-size: 1.3rem;
  color: #333;

  a {
    margin-left: 5px;

    svg {
      width: 24px;

      path {
        &:hover {
          cursor: pointer;
          fill: #1f5b87;
        }
      }
    }
  }

  .profile-social-icons {
    display: flex;
    justify-content: center;
    margin-top: 5px;

    img {
      padding: 3px;
    }
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
