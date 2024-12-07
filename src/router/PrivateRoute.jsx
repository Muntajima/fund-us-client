import React, { Children, useContext, useState } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import LottieAnimation from '../components/LottieAnimation';

const PrivateRoute = ({children}) => {
    const {users, loading} = useContext(AuthContext)
    const location = useLocation();

    if(loading){
        return <LottieAnimation/>
    }
    if(users && users?.email){
        return children;
    } else{
        return <Navigate state={location.pathname} to={'/login'}/>
    }
    
};

export default PrivateRoute;