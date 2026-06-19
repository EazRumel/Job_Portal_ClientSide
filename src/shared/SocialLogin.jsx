import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';

const SocialLogin = () => {
  const {googleSignIn} = useContext(AuthContext)
  return (
    <div>
    <div className="divider">OR</div>
      <button onClick={googleSignIn} className="btn bg-blue-400">Google Sign In</button>
    </div>
  );
};

export default SocialLogin;