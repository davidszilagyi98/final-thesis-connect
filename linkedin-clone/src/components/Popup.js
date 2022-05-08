import React from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

const PopupProject = () => {
  return (
    <div>
      <Popup trigger={<button> Trigger</button>} position="right center">
        <div>
          Popup content here !!
          <form>
            <label>
              <input type="text" placeholder="What's in your mind?" />
            </label>
          </form>
        </div>
      </Popup>
    </div>
  );
};

export default PopupProject;