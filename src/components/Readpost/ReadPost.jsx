import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser, showUser } from "../../store/Slice/getuserSlice";
import CustomModal from "../custom/customModal/CustomModal";
import { Link } from "react-router-dom";
const ReadPost = () => {
  const dispatch = useDispatch();
  const { users, loading, searchData } = useSelector((state) => state.app);
  const [id, setId] = useState();
  const [showPopup, setShowPopup] = useState(false);
  const [radiodata, setRadioData] = useState("");
  useEffect(() => {
    dispatch(showUser());
  }, []);

  if (loading) {
    return <h2> Loading</h2>;
  }
  return (
    <div>
      {showPopup && (
        <CustomModal
          id={id}
          showPopup={showPopup}
          setShowPopup={setShowPopup}
        />
      )}
      <h2> All user List</h2>
      <input
        className="form-check-input"
        name="gender"
        checked={radiodata === ""}
        type="radio"
        onChange={(e) => setRadioData("")}
      />
      <label className="form-check-label"> All</label>
      <input
        className="form-check-input"
        name="gender"
        value="Male"
        checked={radiodata === "Male"}
        type="radio"
        onChange={(e) => setRadioData(e.target.value)}
      />
      <label className="form-check-label"> Male</label>
      <input
        className="form-check-input"
        name="gender"
        value="Female"
        checked={radiodata === "Female"}
        type="radio"
        onChange={(e) => setRadioData(e.target.value)}
      />
      <label className="form-check-label"> Female</label>

      {users &&
        users
          .filter((ele) => {
            if (searchData.length === 0) {
              return ele;
            } else {
              return ele.name.toLowerCase().includes(searchData.toLowerCase());
            }
          })
          .filter((ele) => {
            if (radiodata === "Male") {
              return ele.gender === radiodata;
            } else if (radiodata === "Female") {
              return ele.gender === radiodata;
            } else return ele;
          })
          .map((ele) => (
            <div key={ele.id} class="card w-50 mx-auto my-2">
              <div class="card-body">
                <h5 class="card-title"> {ele.name} </h5>
                <h6 class="card-title"> {ele.email} </h6>
                <p class="card-text">{ele.gender}</p>
                <button
                  class="card-link"
                  onClick={() => [setId(ele.id), setShowPopup(true)]}
                >
                  view
                </button>
                <Link to={`/update/${ele.id}`} class="card-link">
                  Edit
                </Link>
                <Link
                  onClick={() => dispatch(deleteUser(ele.id))}
                  class="card-link"
                >
                  Delete
                </Link>
              </div>
            </div>
          ))}
    </div>
  );
};

export default ReadPost;
