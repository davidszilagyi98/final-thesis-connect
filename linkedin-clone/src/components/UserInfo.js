import { useState, useEffect } from "react";
import { doc, getDoc } from "firebase/firestore";
import { usersRef } from "../firebase/index";
import placeholder from "../volunteer-placeholder-image.svg";
import styled from "styled-components";
export default function UserInfo({ uid }) {
  const [user, setUser] = useState({
    image: placeholder,
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
    <Avatar>
      <div className="avatar">
        <img src={user.image} alt={user.id} />
        <span>
          <h2>{user.name}</h2>
        </span>
      </div>
    </Avatar>
  );
}

const Avatar = styled.div`
  img {
    width: 6rem;
    height: 6rem;
    border-radius: 50%;
    object-fit: cover;
    margin-top: 1rem;
  }

  .avatar {
    display: flex;
    align-items: center;
  }
`;
