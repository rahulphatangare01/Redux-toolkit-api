import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { showUser } from "../../store/Slice/getuserSlice";
import CustomModal from "../custom/customModal/CustomModal";
const ReadPost = () => {
  const dispatch = useDispatch();
  const { users, loading } = useSelector((state) => state.app);

  useEffect(() => {
    dispatch(showUser());
  }, []);

  if (loading) {
    return <h2> Loading</h2>;
  }
  return (
    <div>
      <CustomModal />
      <h2> All user List</h2>
      {users &&
        users.map((ele) => (
          <div>
            <div class="card w-50 mx-auto my-2">
              {/* <img src="..." class="card-img-top" alt="..." /> */}
              <div class="card-body">
                <h5 class="card-title"> {ele.name} </h5>
                <h6 class="card-title"> {ele.email} </h6>
                <p class="card-text">{ele.gender}</p>
                <a href="#" class="card-link">
                  view
                </a>
                <a href="#" class="card-link">
                  Edit
                </a>
                <a href="#" class="card-link">
                  Delete
                </a>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default ReadPost;
