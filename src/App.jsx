import { useState } from 'react';
import './App.css';
import { collection, getDocs } from 'firebase/firestore';
import { db } from './firebase-config';

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const usersRef = collection(db, 'users');
      const querySnapshot = await getDocs(usersRef);

      let found = false;

      querySnapshot.forEach((doc) => {
        const data = doc.data();
        if (data.email === email && data.password === password) {
          found = true;
          // Save session
          localStorage.setItem('user', JSON.stringify(data));
          setLoggedIn(true);
        }
      });

      if (!found) {
        setError('Invalid email or password');
      }
    } catch (err) {
      setError('Something went wrong. Try again.');
      console.error(err);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('user');
    setLoggedIn(false);
    setEmail('');
    setPassword('');
  };

  return (
    <div className="App">
      {loggedIn ? (
        <div>
          <h2>Welcome, {email} 🎉</h2>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <form onSubmit={handleLogin}>
          <h2>Login</h2>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          /><br />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          /><br />
          <button type="submit">Login</button>
          {error && <p style={{ color: 'red' }}>{error}</p>}
        </form>
      )}
    </div>
  );
}

export default App;
