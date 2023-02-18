import { useAppDispatch, useAppSelector } from "hooks/useTyped";
import { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { PATHES } from "routing/routes";

import {
  handleUserAuthorization,
  setIsLoggedIn,
  setLoggedOff,
} from "store/generalSlice";

interface AuthValues {
  name: string;
  password: string;
}

export const Auth: React.FC = () => {
  const authorization = useAppSelector((state) => state.generalSlice.auth);

  const [authValues, setAuthValues] = useState<AuthValues>({
    name: "",
    password: "",
  });
  const dispatch = useAppDispatch();

  const handleNameValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAuthValues({ name: e.target.value, password: authValues.password });
  };

  const handlePasswordValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAuthValues({ name: authValues.name, password: e.target.value });
  };

  const handleSubmitAuthorization = () => {
    dispatch(handleUserAuthorization(authValues));
  };

  useEffect(() => {
    if (authorization.isLoggedIn)
      localStorage.setItem(
        "credentials",
        JSON.stringify({ name: "admin", password: "12345" })
      );
  }, [authorization]);

  useEffect(() => {
    if (localStorage.getItem("credentials")) {
      const credentials = JSON.parse(localStorage.getItem("credentials") || "");
      if (credentials.name === "admin" && credentials.password === "12345")
        dispatch(setIsLoggedIn());
      else dispatch(setLoggedOff());
    }
  }, []);

  return (
    <>
      {authorization.isLoggedIn ? (
        <Navigate to={PATHES.PROFILE} />
      ) : (
        <form onSubmit={handleSubmitAuthorization}>
          <input
            type="text"
            value={authValues.name}
            onChange={handleNameValue}
          />
          <input
            type="text"
            value={authValues.password}
            onChange={handlePasswordValue}
          />
          <button type="submit">Submit</button>
        </form>
      )}
    </>
  );
};
