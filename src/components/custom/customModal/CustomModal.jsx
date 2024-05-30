import React from "react";
import "./customModal.css";
import { useSelector } from "react-redux";

const CustomModal = ({ id, showPopup, setShowPopup }) => {
  const alluser = useSelector((state) => state.app.users);
  const singleUser = alluser.filter((ele) => ele.id === id);
  return (
    <div>
      Custom Modal
      <div className="modalBackground">
        <div className="modalContainer">
          <button onClick={() => setShowPopup(false)}> close </button>
          <h2> {singleUser[0].name} </h2>
          <h3> {singleUser[0].email} </h3>
          <h4> {singleUser[0].age} </h4>
          <p> {singleUser[0].gender} </p>
        </div>
      </div>
    </div>
  );
};

export default CustomModal;
