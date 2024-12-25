import React from "react";
import "../styles/Profile.css";

const Profile = () => {
  return (
    <div className="profile-container">
      <h1 className="user-header">User Settings</h1>
      <div className="List">
        <ul className="list-container">
          <li>personal Information</li>
          <li>Account setting</li>
          <li>Privacy and Security</li>
          <li>Logout</li>
        </ul>
      </div>
    </div>
  );
};

export default Profile;
