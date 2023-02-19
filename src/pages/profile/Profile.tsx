import { Button, Container, Typography, useMediaQuery } from "@mui/material";
import { useAppDispatch, useAppSelector } from "hooks/useTyped";
import { Navigate } from "react-router-dom";
import { PATHES } from "routing/routes";
import avatar from "assets/images/avatar.jpg";
import { Stack } from "@mui/system";
import i18n from "service/i18/i18n";
import { setLoggedOff } from "store/generalSlice";

export const Profile: React.FC = () => {
  const dispatch = useAppDispatch();
  const media = useMediaQuery("(max-width:750px)");
  const authorization = useAppSelector((state) => state.generalSlice.auth);

  const handleLogOut = () => {
    localStorage.removeItem("credentials");
    dispatch(setLoggedOff());
  };

  return (
    <>
      {!authorization.isLoggedIn ? (
        <Navigate to={PATHES.MAIN} />
      ) : (
        <Container maxWidth="lg" sx={{ marginTop: 5 }}>
          <Stack direction="row" justifyContent="center">
            <img src={avatar} width={media ? 200 : 500} />
            <Stack
              direction="column"
              justifyContent="space-between"
              sx={{ marginLeft: media ? 10 : 20 }}
            >
              <Typography>{i18n.t("TextFieldName")}: admin</Typography>
              <Button onClick={handleLogOut}>{i18n.t("LogOutButton")}</Button>
            </Stack>
          </Stack>
        </Container>
      )}
    </>
  );
};
