import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const navigate = useNavigate();
  const [user, setUser] = useState(null); // {username ///
  const [token, setToken] = useState(localStorage.getItem("token") || null);

  useEffect(() => {
    if (token) setUser({ username: "user" }); // fake user
    else setUser(null);
  }, [token]);

  const login = ({ username, password }) => {
    // simple hardcoded users
    if (username === 'user' && password === 'user123') {
    
    // Fake auth so any username/password works
    const fakeToken = "fake-jwt-token-12345";
    
    localStorage.setItem("token", fakeToken);
    
      setToken(fakeToken);
      setUser({ username });

      navigate('/');
    } else {
      // alert('Invalid credentials');
      <p>error</p>
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    setToken(null);
    setUser(null);
    navigate('/')
  };

  const isAuthenticated = !!token;

  return (
    <AuthContext.Provider value={{ user, token, login, logout, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
}