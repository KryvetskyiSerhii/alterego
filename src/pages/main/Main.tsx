import Container from "@mui/material/Container";
import { useAppDispatch } from "hooks/useTyped";
import { useEffect } from "react";
import i18n from "service/i18/i18n";
import { setIsLoggedIn, setLoggedOff } from "store/generalSlice";

import { MainBase } from "./Main.styled";

export const Main: React.FC = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (localStorage.getItem("credentials")) {
      const credentials = JSON.parse(localStorage.getItem("credentials") || "");
      if (credentials.name === "admin" && credentials.password === "12345")
        dispatch(setIsLoggedIn());
      else dispatch(setLoggedOff());
    }
  }, []);
  return (
    <main>
      <Container maxWidth="sm">
        <MainBase elevation={3}>{i18n.t("MainContent")}</MainBase>
      </Container>
    </main>
  );
};
