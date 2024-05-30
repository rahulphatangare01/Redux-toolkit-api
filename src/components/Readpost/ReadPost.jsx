import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser, showUser } from "../../store/Slice/getuserSlice";
import CustomModal from "../custom/customModal/CustomModal";
import { Link } from "react-router-dom";
const ReadPost = () => {
  const dispatch = useDispatch();
  const { users, loading } = useSelector((state) => state.app);
  const [id, setId] = useState();
  const [showPopup, setShowPopup] = useState(false);
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
      {users &&
        users.map((ele) => (
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
              <Link class="card-link">Edit</Link>
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
