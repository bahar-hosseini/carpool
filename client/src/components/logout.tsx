import React, { useContext } from 'react';
import { signinContext } from '../providers/SigninProvider'
import axios from 'axios';

const Logout = () => {
  const { setIsLogin }: any = useContext(signinContext)
  const handlelogOut = () => {
    setIsLogin(() => false);
  };

  return (
    <div>
      <button onClick={handlelogOut}>logout</button>
    </div>
  );
};

export default Logout;
