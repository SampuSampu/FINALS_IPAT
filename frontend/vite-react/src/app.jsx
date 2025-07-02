import React, { useState } from 'react';
import EmailForm from './components/EmailForm';
import Login from './components/Login';
import './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div>
      <div className="top-right-btn">
        {isLoggedIn ? (
          <button onClick={handleLogout}>Logout</button>
        ) : null}
      </div>
      {isLoggedIn ? (
        <EmailForm />
      ) : (
        <Login onLogin={setIsLoggedIn} />
      )}
    </div>
  );
}

export default App;