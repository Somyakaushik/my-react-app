// src/Login.jsx
import { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { db } from './firebase-config';

function Login() {
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: ''
  });
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const usersCollection = collection(db, 'users');
      await addDoc(usersCollection, user);
      setMessage('User successfully logged in and data saved!');
      setUser({ name: '', email: '', password: '' });
    } catch (error) {
      setMessage('Error saving user: ' + error.message);
    }
  };

  return (
    <div className="card">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Name" value={user.name} onChange={handleChange} required />
        <input name="email" type="email" placeholder="Email" value={user.email} onChange={handleChange} required />
        <input name="password" type="password" placeholder="Password" value={user.password} onChange={handleChange} required />
        <button type="submit">Login</button>
      </form>
      <p>{message}</p>
    </div>
  );
}

export default Login;
