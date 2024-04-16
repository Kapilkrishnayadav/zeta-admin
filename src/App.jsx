import { useState, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Dashboard, Auth } from "@/layouts";

function App() {
  const [hasCookie, setHasCookie] = useState(false);
  function extractToken(cookieString) {
    const cookies = cookieString.split(';'); // Split into individual cookies
    for (const cookie of cookies) {
      const [name, value] = cookie.trim().split('='); // Split each cookie into name-value pair
      if (name === 'token') { // Check if the name matches the token cookie
        return value;
      }
    }
    return null; // If token cookie not found, return null
  } 
   const token=extractToken(document.cookie);
  //  if(token!=null)
  //  setHasCookie(true);
  useEffect(() => {
    const token = extractToken(document.cookie);
    setHasCookie(!!token);
  }, []);

  return (
    <Routes>
      {hasCookie ? (
        <Route path="/dashboard/*" element={<Dashboard />} />
      ) : (
        <Route path="/auth/*" element={<Auth />} />
      )}
      <Route
        path="*"
        element={
          hasCookie ? (
            <Navigate to="/dashboard/home" replace />
          ) : (
            <Navigate to="/auth/sign-in" replace />
          )
        }
      />
    </Routes>
  );
}

export default App;
