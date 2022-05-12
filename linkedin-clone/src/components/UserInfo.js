import { useState, useEffect } from "react";
import { doc, getDoc } from "firebase/firestore";
import { usersRef } from "../firebase/index";
import placeholder from "../volunteer-placeholder-image.svg";
import styled from "styled-components";
export default function UserInfo({ uid }) {
  const [user, setUser] = useState({
    image: placeholder,
    name: "User's name",
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
    <Avatar>
        <img src={user.image} alt={user.id} />
        <span>{user.name}</span>
        <span>{user.displayName}</span>
    </Avatar>
  );
}

const Avatar = styled.div`
  display: grid; 
  grid-template-columns: 0.3fr 1fr 1fr; 
  grid-template-rows: 1fr; 
  gap: 0px 0px; 
  grid-template-areas: 
    "useravatar avatarusername ."; 
  padding: 0 20px;
  align-items: center;


  img {
    grid-area: useravatar;
    width: 5.5rem;
    height: 5.5rem;
    border-radius: 50%;
    object-fit: cover;
  }

  span {
    grid-area: avatarusername;
    justify-self: flex-start;
    padding-left: 10px;
    font-weight: 500;
    color: #333;
  }
`;
