// api.js

// Define your backend API URL here
const API_URL = 'http://localhost:3001/api';

// Function to handle HTTP GET requests
export const get = async (url) => {
  try {
    const response = await fetch(`${API_URL}${url}`);

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};

// Function to handle HTTP POST requests
export const post = async (url, body) => {
  try {
    const response = await fetch(`${API_URL}${url}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};

// Function to handle HTTP PUT requests
export const put = async (url, body) => {
  try {
    const response = await fetch(`${API_URL}${url}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};

// Function to handle HTTP DELETE requests
export const remove = async (url) => {
  try {
    const response = await fetch(`${API_URL}${url}`, {
      method: 'DELETE',
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};
