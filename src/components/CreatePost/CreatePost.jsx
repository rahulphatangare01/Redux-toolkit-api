import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createUser } from "../../store/Slice/getuserSlice";
import { useNavigate } from "react-router-dom";

const CreatePost = () => {
  const [users, setUsers] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const getUserdata = (e) => {
    setUsers({ ...users, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createUser(users));
    navigate("/read");
    console.log("users...", users);
  };
  return (
    <div>
      <h2 className="my-4"> Add User</h2>
      <form className="w-50 mx-auto my-5" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            name="name"
            aria-describedby="emailHelp"
            onChange={getUserdata}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            name="email"
            id="exampleInputPassword1"
            onChange={getUserdata}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">age</label>
          <input
            type="text"
            className="form-control"
            name="age"
            id="exampleInputPassword1"
            onChange={getUserdata}
          />
        </div>
        <div className="mb-3">
          <input
            className="form-check-input"
            type="checkbox"
            name="gender"
            value="Male"
            onChange={getUserdata}
          />
          <label className="form-check-label">Male</label>
        </div>
        <div className="mb-3">
          <input
            className="form-check-input"
            type="checkbox"
            name="gender"
            value="Female"
            onChange={getUserdata}
          />
          <label className="form-check-label">Female</label>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default CreatePost;
