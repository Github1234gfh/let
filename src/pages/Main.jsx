import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { _Content } from '../Components/Main/Content';

export const Main = ({ token, setToken, jwtDecoded, setTitle, setSearch }) => {
  const Navigate = useNavigate();

  useEffect(() => {
    if (!token) Navigate('/login');
    setTitle('Протал сотрудника');
    setSearch(true);
  }, [])

  return (
    <>
      {
        token ?
          <_Content token={token} setToken={setToken} jwtDecoded={jwtDecoded} />
          : null
      }
    </>
  );
};
