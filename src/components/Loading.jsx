import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';

const Loading = () => {
  const {loading} = useContext(AuthContext)
 if(loading){
  return (
    <div className="w-11/12 mx-auto justify-center">
      <span className="loading loading-infinity loading-lg"></span>
    </div>
  );
 }
  
};

export default Loading;