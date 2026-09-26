import { createContext, useState, useEffect } from 'react';
import { getFromStorage, saveToStorage, removeFromStorage } from '../utils/localStorage';

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const savedUser = getFromStorage('currentUser', null);
    if (savedUser) {
      setCurrentUser(savedUser);
    }
  }, []);

  const login = (user) => {
    setCurrentUser(user);
    saveToStorage('currentUser', user);
  };

  const logout = () => {
    setCurrentUser(null);
    removeFromStorage('currentUser');
  };

  return (
    <AuthContext.Provider value={{ currentUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
