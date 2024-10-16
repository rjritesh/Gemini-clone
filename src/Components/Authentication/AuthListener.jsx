// src/components/AuthListener.jsx
import React, { useEffect, useState } from 'react';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebaseConfig";

const AuthListener = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });

    return () => unsubscribe();
  }, []);

  return (
    <div>
      {user ? (
        <div>Welcome, {user.email}</div>
      ) : (
        <div>Please log in</div>
      )}
      {children}
    </div>
  );
};

export default AuthListener;
