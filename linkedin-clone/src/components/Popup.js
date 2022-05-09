import React from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

const PopupProject = () => {
  return (
    <div>
      <Popup trigger={<button>Project</button>} position="right center">
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
   </div>
  );
};

export default PopupProject;
