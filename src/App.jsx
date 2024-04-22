import { useState, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Dashboard, Auth } from "@/layouts";
import CheckAuth from "./pages/auth/CheckAuth";

function App() {

 
 

  return (
    <Routes>
      
        <Route path="/dashboard/*" element={CheckAuth(Dashboard)} />
        
        <Route path="/auth/*" element={<Auth/>} />
        
    </Routes>
  );
}

export default App;
