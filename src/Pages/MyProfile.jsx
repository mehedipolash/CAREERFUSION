import React, { use } from "react";
import { useNavigate } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";

const MyProfile = () => {
  const navigate = useNavigate();
  const { user } = use(AuthContext);

  const handleBack = () => navigate(-1);
  const handleHome = () => navigate("/");

  const defaultAvatar = "https://i.ibb.co/4pDNDk1/avatar.png";

  return (
    <div className="max-w-xl mx-auto mt-10 bg-base-200 p-8 rounded-xl shadow-lg">
      <h2 className="text-3xl font-bold text-center text-primary mb-6">
        My Profile
      </h2>

      <div className="flex flex-col items-center gap-4">
        {/* Profile Photo */}
        <img
          src={user?.photoURL || defaultAvatar}
          alt="User"
          className="w-28 h-28 rounded-full border-4 border-primary object-cover"
        />

        {/* User Info */}
        <p className="text-lg font-semibold">
          Name: {user?.displayName || "Not Provided"}
        </p>

        <p className="text-lg">
          Email: <span className="font-medium">{user?.email}</span>
        </p>

        <p className="text-sm text-gray-600">
          User ID: <span className="font-mono">{user?.uid}</span>
        </p>

        {/* Buttons */}
        <div className="flex gap-4 mt-5">
          <button onClick={handleBack} className="btn btn-outline">
            ⬅ Back
          </button>

          <button onClick={handleHome} className="btn btn-primary">
            Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
