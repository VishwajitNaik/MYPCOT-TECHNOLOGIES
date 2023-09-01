import React, { useState } from 'react';

function RegistrationForm() {
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    password: '',
    gender: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:3001/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      if (response.ok) {
        // Registration successful, you can redirect or show a success message here
        console.log('Registration successful');
      } else {
        // Handle registration error, e.g., display an error message
        console.error('Registration failed');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="login-form-container"> {/* Apply the CSS class to the div */}
    <h2>User Registration</h2>
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        className="registration-input" 
        placeholder="Name"
        value={userData.name}
        onChange={handleChange}
        required
      />
      <input
        type="email"
        name="email"
        className="registration-input"
        placeholder="Email"
        value={userData.email}
        onChange={handleChange}
        required
      />
      <input
        type="password"
        name="password"
        className="registration-input"
        placeholder="Password"
        value={userData.password}
        onChange={handleChange}
        required
      />
      <select
        name="gender"
        className="registration-input" 
        value={userData.gender}
        onChange={handleChange}
      >
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>
      <button type="submit" className="button">Register</button> {/* Apply the CSS class to the button */}
    </form>
  </div>
  );
}

export default RegistrationForm;
