import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Conent_Create_Task } from "../Components/CreateTask/ConentsCreateTask";

export const CreateTask = ({ token, setTitle, setSearch, jwtDecoded }) => {
  const Navigate = useNavigate();

  useEffect(() => {
    if (!token) Navigate('/login');
    setTitle('SMART-задачи');
    setSearch(false);
  }, [])

  return (
    <>
      {
        token ?
          <>
            <Conent_Create_Task token={token} jwtDecoded={jwtDecoded}/>
          </>
          : null
      }
    </>
  );
};