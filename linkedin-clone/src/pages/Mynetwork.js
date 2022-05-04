import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, onSnapshot } from "@firebase/firestore";

const Dot = ({ user }) => {
  const style = {
    height: 25,
    width: 25,
    margin: "0px 10px",
    borderRadius: "50%",
    display: "inline-block",
  };
  return <span style={style}></span>;
};

const Mynetwork = () => {
  const [users, setUsers] = useState([]);
  console.log(users);
  useEffect(() => onSnapshot(collection(db, "users"), (snapshot) => setUsers(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))), []);

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>
          <a href="/profile"></a> <Dot user={user.value} /> {user.name}: {user.nationality} {user.residency} {user.interests} {user.bio}
        </li>
      ))}
    </ul>
  );
};

export default Mynetwork;
