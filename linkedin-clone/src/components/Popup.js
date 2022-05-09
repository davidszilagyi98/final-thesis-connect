import React from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

const PopupProject = () => {
  return (
   
      <Popup trigger={<button> Trigger</button>} position="right center">
        <div>
          Popup content here !!
          <form>
            <label>
              <input type="text" placeholder="What's in your mind?" />
              <p>From</p><input type="date"></input>
               <p>To</p><input type="date"></input>
            </label>
          </form>
        </div>
      </Popup>
   
  );
};

export default PopupProject;
