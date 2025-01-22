import React from 'react';

const ProfileCard = ({ user }) => {
  return (
    <div className="profile-card">
      <h2>{user.name}</h2>
      <p>Email: {user.email}</p>
      <p>Age: {user.age}</p>
      <p>Bio: {user.bio}</p>
    </div>
  );
};

export default ProfileCard;
