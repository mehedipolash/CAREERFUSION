import React, { useState } from "react";
import { useNavigate } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";
import { updateProfile } from "firebase/auth";
import { Helmet } from "react-helmet";
import toast from "react-hot-toast";

const UpdateProfile = () => {
  const navigate = useNavigate();
  const { user, auth } = React.useContext(AuthContext);

  const [photoURL, setPhotoURL] = useState(user?.photoURL || "");
  const [displayName, setDisplayName] = useState(user?.displayName || "");
  const [loading, setLoading] = useState(false);

  const handleUpdate = (e) => {
    e.preventDefault();
    setLoading(true);

    updateProfile(auth.currentUser, {
      displayName,
      photoURL,
    })
      .then(() => {
        toast.success("Profile updated successfully!");
        navigate("/my-profile");
      })
      .catch((err) => {
        toast.error(err.message);
      })
      .finally(() => setLoading(false));
  };

  return (
    <div className="max-w-xl mx-auto mt-10 bg-base-200 p-8 rounded-xl shadow-lg">
      <Helmet>
        <title>Update Profile | CareerFusion</title>
      </Helmet>

      <h2 className="text-3xl font-bold text-center text-primary mb-6">
        Update Profile
      </h2>

      <form className="flex flex-col gap-4" onSubmit={handleUpdate}>
        <label className="label">Photo URL</label>
        <input
          type="text"
          placeholder="Photo URL"
          className="input input-bordered w-full"
          value={photoURL}
          onChange={(e) => setPhotoURL(e.target.value)}
        />

        <label className="label">Display Name</label>
        <input
          type="text"
          placeholder="Name"
          className="input input-bordered w-full"
          value={displayName}
          onChange={(e) => setDisplayName(e.target.value)}
        />

        <button
          type="submit"
          className={`btn btn-primary mt-4 ${loading ? "loading" : ""}`}
        >
          Update Information
        </button>
      </form>

      <button
        onClick={() => navigate(-1)}
        className="btn btn-outline mt-4 w-full"
      >
        Cancel
      </button>
    </div>
  );
};

export default UpdateProfile;
