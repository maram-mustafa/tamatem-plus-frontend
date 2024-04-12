import React, { useContext } from 'react';
import { AuthContext } from './authContext';

const ExampleComponent = () => {
  const { accessToken, refreshToken, user, login, logout } = useContext(AuthContext);

  return (
    <div>
      {accessToken ? (
        <div>
          <p>Welcome, {user.name}!</p>
          <button onClick={logout}>Logout</button>
        </div>
      ) : (
        <button onClick={() => login('fakeAccessToken', 'fakeRefreshToken', { name: 'John Doe' })}>
          Login
        </button>
      )}
    </div>
  );
};

export default ExampleComponent;