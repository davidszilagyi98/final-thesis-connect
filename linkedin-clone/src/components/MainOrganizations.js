import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { storage, db } from "../firebase";
import { collection, getDoc, doc, onSnapshot } from "@firebase/firestore";
import { useParams } from "react-router-dom";
import { async } from "@firebase/util";

const initialState = {
  name: "",
};

const MainOrganizations = (props) => {
  const { id } = useParams();
  const [data, setData] = useState(initialState);
  useEffect(() => {
    id && getSingleUser();
  }, [id]);

  const getSingleUser = async () => {
    const docRef = doc(db, "users", id);
    const snapshot = await getDoc(docRef);
    if (snapshot.exists()) {
      setData({ ...snapshot.data() });
    }
  };
  const [users, setUsers] = useState([]);

  useEffect(() => onSnapshot(collection(db, "users"), (snapshot) => setUsers(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))), []);

  return (
    <Container>
      <OrganizationsList>
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              <a href={`/userprofile/${user.id}`} user={user.value}>
                {user.name}
              </a>
            </li>
          ))}
        </ul>
      </OrganizationsList>
    </Container>
  );
};

const Container = styled.div`
  grid-area: main;
`;

const OrganizationsList = styled.div`
    display: block;

    li {
        list-style-type: none;
        background-color: #fff;
        background: linear-gradient(to left, white 97%, #063A54 3%);
        box-shadow: 0px 3px 6px 2px rgba(207, 207, 207, 0.2);
        -webkit-box-shadow: 0px 3px 6px 2px rgba(207, 207, 207, 0.2);
        -moz-box-shadow: 0px 3px 6px 2px rgba(207, 207, 207, 0.2);
        border-radius: 12px;
        display: flex;
        width: 40%;
        text-align: left;
        margin-bottom: 10px;
        padding: 30px;

  .namewithflag {
    display: flex;
    flex-direction: row;

    a {
      margin-right: 3px;
    }
    }
  }
`;

export default MainOrganizations;
