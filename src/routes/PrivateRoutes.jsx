import React, { use } from 'react';
import { AuthContext } from '../contexts/AuthContext/AuthContext';
import {  useLocation } from 'react-router';
import { Navigate } from "react-router-dom";


const PrivateRoutes = ({children}) => {
    const {user, loading} = use(AuthContext)
    const location = useLocation()
    if(loading){
        return <span className="loading loading-infinity loading-xl"></span>
    }

    if(!user){
        return <Navigate to="/register" state={location.pathname}></Navigate>
    }

    return children
};

export default PrivateRoutes;