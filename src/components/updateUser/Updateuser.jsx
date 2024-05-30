import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { updateUser } from "../../store/Slice/getuserSlice";

const Updateuser = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { users, loading } = useSelector((state) => state.app);

  const [updateuserData, setUpdateUserdata] = useState();
  useEffect(() => {
    if (id) {
      const singleUser = users.filter((ele) => ele.id === id);
      setUpdateUserdata(singleUser[0]);
    }
  }, []);

  const newData = (e) => {
    setUpdateUserdata({ ...updateuserData, [e.target.name]: e.target.value });
    // setUsers({ ...users, [e.target.name]: e.target.value });
  };
  console.log(updateuserData);

  const handleUpdate = (e) => {
    e.preventDefault();
    dispatch(updateUser(updateuserData));
    navigate("/read");
  };
  return (
    <div>
      <div>
        <h2 className="my-4"> Edit User Data</h2>
        <form className="w-50 mx-auto my-5" onSubmit={handleUpdate}>
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              name="name"
              value={updateuserData && updateuserData.name}
              aria-describedby="emailHelp"
              onChange={newData}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              name="email"
              value={updateuserData && updateuserData.email}
              id="exampleInputPassword1"
              onChange={newData}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">age</label>
            <input
              type="text"
              className="form-control"
              name="age"
              value={updateuserData && updateuserData.age}
              id="exampleInputPassword1"
              onChange={newData}
            />
          </div>
          <div className="mb-3">
            <input
              className="form-check-input"
              type="checkbox"
              name="gender"
              value="Male"
              checked={updateuserData && updateuserData.gender === "Male"}
              onChange={newData}
            />
            <label className="form-check-label">Male</label>
          </div>
          <div className="mb-3">
            <input
              className="form-check-input"
              type="checkbox"
              name="gender"
              value="Female"
              checked={updateuserData && updateuserData.gender === "Female"}
              onChange={newData}
            />
            <label className="form-check-label">Female</label>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Updateuser;
