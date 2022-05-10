// import React, { useEffect, useState } from "react";
// import { db } from "../firebase";
// import { collection, onSnapshot } from "@firebase/firestore";
import React from "react";
import styled from "styled-components";
import Header from "../components/Header";
import { LeftsideOrganizations } from "../components/LeftsideOrganizations";
import Rightside from "../components/Rightside";
import MainOrganizations from "../components/MainOrganizations";
import { Container } from "./Home";

// const Dot = ({ user }) => {
//   const style = {
//     height: 25,
//     width: 25,
//     margin: "0px 10px",
//     borderRadius: "50%",
//     display: "inline-block",
//   };
//   return <span style={style}></span>;
// };

const Mynetwork = () => {
  // const [users, setUsers] = useState([]);
  // console.log(users);
  // useEffect(() => onSnapshot(collection(db, "users"), (snapshot) => setUsers(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))), []);

  return (
    // <ul>
    //   {users.map((user) => (
    //     <li key={user.id}>
    //       <a href="/profile"></a> <Dot user={user.value} /> {user.name}
    //     </li>
    //   ))}
    // </ul>
    <Container>
      <Header />
      <LayoutOrganizations>
        <LeftsideOrganizations />
        <Rightside />
        <MainOrganizations />
      </LayoutOrganizations>
    </Container>
  );
};
const LayoutOrganizations = styled.div`
  display: grid;
  grid-template-areas: "leftsideorganizations main rightside";
  grid-template-columns: minmax(0, 5fr) minmax(0, 12fr) minmax(0, 5fr);
  column-gap: 25px;
  row-gap: 25px;
  /* grid-template-row: auto; */
  margin: 25px 0;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    padding: 0 5px;
  }
`;

export default Mynetwork;
