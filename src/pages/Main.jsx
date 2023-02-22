import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { _Content } from '../Components/Main/Content';

export const Main = ({ token, setToken }) => {
  const Navigate = useNavigate();
  
  useEffect(() => {
    if (!token) Navigate('/login');

  }, [])

  return (
    <>
      {
        token ?
          <_Content token={token} setToken={setToken} />
          : null
      }
    </>
  );
};
