import React, { useState } from 'react';
import ProfileCard from './component/Profilecard';
import ProfileForm from './component/Profileform';

const App = () => {
  const [user, setUser] = useState({
    name: 'John Doe',
    email: 'johndoe@example.com',
    age: 30,
    bio: 'A software developer passionate about React.'
  });

  const handleSaveProfile = (newData) => {
    setUser(newData);
  };

  return (
    <div>
      <h1>User Profile</h1>
      <ProfileCard user={user} />
      <ProfileForm onSave={handleSaveProfile} />
    </div>
  );
};

export default App;
