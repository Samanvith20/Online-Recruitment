import React, { useState } from 'react';
import './styles.css';
const App = () => {
  const [showLogin, setShowLogin] = useState(true);
  const [showRegister, setShowRegister] = useState(false);
  const [showCandidateSearch, setShowCandidateSearch] = useState(false);

  const handleLoginClick = () => {
    setShowLogin(true);
    setShowRegister(false);
    setShowCandidateSearch(false);
  };

  const handleRegisterClick = () => {
    setShowLogin(false);
    setShowRegister(true);
    setShowCandidateSearch(false);
  };

  const handleCandidateSearchClick = () => {
    setShowLogin(false);
    setShowRegister(false);
    setShowCandidateSearch(true);
  };

  return (
    <div>
      <header>
        <h1>Online Recruitment</h1>
        <nav>
          <ul>
            <li><button onClick={handleLoginClick}>Login</button></li>
            <li><button onClick={handleRegisterClick}>Register</button></li>
            <li><button onClick={handleCandidateSearchClick}>Candidate Search</button></li>
          </ul>
        </nav>
      </header>

      <main>
        {showLogin && (
          <div>
            <h2>Login</h2>
            {/* Login Component */}
            <form>
              <label htmlFor="username">Username:</label>
              <input type="text" id="username" />
              <label htmlFor="password">Password:</label>
              <input type="password" id="password" />
              <button type="submit">Login</button>
            </form>
          </div>
        )}

        {showRegister && (
          <div>
            <h2>Register</h2>
            {/* Register Component */}
            <form>
              <label htmlFor="username">Username:</label>
              <input type="text" id="username" />
              <label htmlFor="password">Password:</label>
              <input type="password" id="password" />
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" />
              <button type="submit">Register</button>
            </form>
          </div>
        )}

        {showCandidateSearch && (
          <div>
            <h2>Candidate Search</h2>
            {/* Candidate Search Component */}
            <p>Implement candidate search functionality here.</p>
          </div>
        )}
      </main>

      <footer>
        <p>&copy; 2023 Online Recruitment. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;
