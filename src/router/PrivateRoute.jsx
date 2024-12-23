import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import Loading from '../components/Loading';

const PrivateRoute = ({children}) => {
  const {loading,user} = useContext(AuthContext)
  const location = useLocation()
  // console.log(location)

  if(loading){
    return <Loading></Loading>
  }
  
  if(user){
    return children;
  }
  return (
   <Navigate to="/login" state={location?.pathname}></Navigate>
  );
};

export default PrivateRoute;