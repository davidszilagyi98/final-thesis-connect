import { useState, useEffect } from "react";
import { doc, getDoc } from "firebase/firestore";
import { usersRef } from "../firebase/index";
import placerholder from "../volunteer-placeholder-image.svg";


export default function UserInfo({ uid }) {
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
        <div className="avatar">
            <img src={user.image} alt={user.id} />
            <span>
                <h3>{user.name}</h3>
            </span>
        </div>
    );
}
