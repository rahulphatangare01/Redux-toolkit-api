import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createUser } from "../../store/Slice/getuserSlice";

const CreatePost = () => {
  const [users, setUsers] = useState({});
  const dispatch = useDispatch();
  const getUserdata = (e) => {
    setUsers({ ...users, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("users...", users);
    dispatch(createUser(users));
  };
  return (
    <div>
      <form className="w-50 mx-auto my-5" onSubmit={handleSubmit}>
        <div class="mb-3">
          <label class="form-label">Name</label>
          <input
            type="text"
            class="form-control"
            id="exampleInputEmail1"
            name="name"
            aria-describedby="emailHelp"
            onChange={getUserdata}
          />
        </div>
        <div class="mb-3">
          <label class="form-label">Email</label>
          <input
            type="email"
            class="form-control"
            name="email"
            id="exampleInputPassword1"
            onChange={getUserdata}
          />
        </div>
        <div class="mb-3">
          <label class="form-label">age</label>
          <input
            type="text"
            class="form-control"
            name="age"
            id="exampleInputPassword1"
            onChange={getUserdata}
          />
        </div>
        <div class="mb-3">
          <input
            class="form-check-input"
            type="checkbox"
            name="gender"
            value="Male"
            onChange={getUserdata}
          />
          <label class="form-check-label">Male</label>
        </div>
        <div class="mb-3">
          <input
            class="form-check-input"
            type="checkbox"
            name="gender"
            value="Female"
            onChange={getUserdata}
          />
          <label class="form-check-label">Female</label>
        </div>
        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default CreatePost;
