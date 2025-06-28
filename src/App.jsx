import { useState } from 'react';
import './App.css';
import { collection, getDocs, addDoc, serverTimestamp } from 'firebase/firestore';
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

    let matchedUserDoc = null;
    let matchedUserData = null;

    // Find user with matching email
    querySnapshot.forEach((docSnap) => {
      const data = docSnap.data();
      if (data.email === email) {
        matchedUserDoc = docSnap;
        matchedUserData = data;
      }
    });

    if (matchedUserDoc) {
      const userId = matchedUserDoc.id;

      if (matchedUserData.password === password) {
        // ✅ SUCCESSFUL login
        localStorage.setItem('user', JSON.stringify(matchedUserData));
        setLoggedIn(true);

        // Log to top-level "loginAttempts_successful"
        await addDoc(collection(db, 'loginAttempts_successful'), {
          userId,
          email,
          status: 'success',
          timestamp: serverTimestamp(),
        });

        // Optional: also log in user's own subcollection
        await addDoc(collection(db, 'users', userId, 'loginAttempts'), {
          status: 'success',
          email,
          timestamp: serverTimestamp(),
        });

      } else {
        // ❌ WRONG PASSWORD
        setError('Invalid email or password');

        await addDoc(collection(db, 'loginAttempts_failed'), {
          userId,
          email,
          status: 'failure',
          reason: 'Incorrect password',
          timestamp: serverTimestamp(),
        });

        // Optional: also log in user's own subcollection
        await addDoc(collection(db, 'users', userId, 'loginAttempts'), {
          status: 'failure',
          reason: 'Incorrect password',
          email,
          timestamp: serverTimestamp(),
        });
      }

    } else {
      // ❌ EMAIL NOT FOUND
      setError('Invalid email or password');

      await addDoc(collection(db, 'loginAttempts_unknown'), {
        email,
        status: 'failure',
        reason: 'Email not found',
        timestamp: serverTimestamp(),
      });
    }

  } catch (err) {
    console.error('Login error:', err);
    setError('Something went wrong. Try again.');
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
            placeholder="jane@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          /><br />
          <input
            type="password"
            placeholder="***"
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