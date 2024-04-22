import React, { useState, useEffect } from 'react';
import { SignIn } from '.';
import { Navigate } from 'react-router-dom';
const CheckAuth = (Component) => {
    // console.log(Component)
    const [isloading, setisloading] = useState(true);

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
    useEffect(() => {

        const token = extractToken(document.cookie);
        setisloading(false);
    }, []); // Empty dependency array ensures this effect runs only once after the initial render
    
    if (isloading) {
        return <p>Loading...</p>;
    }

    const token = extractToken(document.cookie);
    if (token == null) {
        return <Navigate to="/auth/sign-in" replace />;
    }
   
    
    // console.log(token);
    return <Component/>;
};

export default CheckAuth;
