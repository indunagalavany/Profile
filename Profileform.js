import React, { useState } from 'react';

const ProfileForm = ({ onSave }) => {
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    age: '',
    bio: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(userData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={userData.name}
        onChange={handleChange}
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={userData.email}
        onChange={handleChange}
      />
      <input
        type="number"
        name="age"
        placeholder="Age"
        value={userData.age}
        onChange={handleChange}
      />
      <textarea
        name="bio"
        placeholder="Bio"
        value={userData.bio}
        onChange={handleChange}
      />
      <button type="submit">Save</button>
    </form>
  );
};

export default ProfileForm;
