import React, { useState } from "react";
import useAuthContext from "../context/AuthContext";
import axios from "../api/axios";

export default function EditProfile() {
  const { user, errors } = useAuthContext();

  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [profile_img, setProfileImg] = useState(user.profile_img);
  const [loadingUpdate, setLoadingUpdate] = useState(false);
  const [loadingDelete, setLoadingDelete] = useState(false);

  const handleUpdate = (e) => {
    e.preventDefault();
    axios.patch(`/admin/user/${user.id}`, {
      name,
      email,
      profile_img,
    });
  };

  const deleteProfile = (e) => {
    e.preventDefault();
    window.confirm("Are you sure you want to delete your account?");
  };

  return (
    <div
      className="container w-50 position-absolute top-50 start-50 translate-middle bg-dark text-white p-5 rounded"
      data-bs-theme="dark"
    >
      <div className="row">
        <h2 className="text-center mb-5">Modify Account</h2>
        <form
          className="w-75 position-relative top-0 start-50 translate-middle-x mb-20"
          onSubmit={handleUpdate}
        >
          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              name="name"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            {errors.name && (
              <div id="emailHelp" className="form-text text-danger">
                {errors.name}
              </div>
            )}
          </div>
          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              name="email"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && (
              <div id="emailHelp" className="form-text text-danger">
                {errors.email}
              </div>
            )}
          </div>
          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">
              Image URL
            </label>
            <input
              type="text"
              className="form-control"
              name="profile_img"
              id="profile_img"
              aria-describedby="emailHelp"
              value={profile_img}
              onChange={(e) => setProfileImg(e.target.value)}
            />
          </div>

          <button type="submit" className="btn btn-warning ">
            UPDATE
          </button>
        </form>

        <form
          onSubmit={deleteProfile}
          className="w-75 position-relative top-0 start-50 translate-middle-x"
        >
          <button type="submit" className="btn btn-danger">
            DELETE ACCOUNT
          </button>
        </form>
      </div>
    </div>
  );
}
