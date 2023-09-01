import React, { useState } from 'react';
import LoginForm from './LoginFrom'; // Create a LoginForm component
import RegistrationForm from './RegistrationForm'; // Create a RegistrationForm component

function LoginRegistrationPage() {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div>
      <h1>{isLogin ? 'Login' : 'Registration'}</h1>
      {isLogin ? (
        <LoginForm onRegisterClick={toggleForm} /> // Pass onRegisterClick
        ) : (
        <RegistrationForm onLoginClick={toggleForm} /> // Pass onLoginClick
        )}

    </div>
  );
}

export default LoginRegistrationPage;
