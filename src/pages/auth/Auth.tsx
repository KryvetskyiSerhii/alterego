import { Button, TextField, Typography, useMediaQuery } from "@mui/material";
import { Box, Container, Stack } from "@mui/system";
import { useAppDispatch, useAppSelector } from "hooks/useTyped";
import { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { useFormik, FormikProps } from "formik";
import { PATHES } from "routing/routes";
import i18n from "service/i18/i18n";

import { handleUserAuthorization } from "store/generalSlice";

interface Formik {
  name: string;
  password: string;
}

export const Auth: React.FC = () => {
  const dispatch = useAppDispatch();
  const media = useMediaQuery("(max-width:750px)");
  const authorization = useAppSelector(
    (state) => state.generalSlice.auth.authorized
  );
  const loggedIn = useAppSelector(
    (state) => state.generalSlice.auth.isLoggedIn
  );

  const initialValues: Formik = {
    name: "",
    password: "",
  };
  const handleSubmitAuthorization = (values: Formik) => {
    dispatch(
      handleUserAuthorization({ name: values.name, password: values.password })
    );
  };

  const formik: FormikProps<Formik> = useFormik<Formik>({
    initialValues: initialValues,
    onSubmit: (values: Formik, { resetForm }) => {
      handleSubmitAuthorization(values);
      resetForm();
    },
  });

  const handleResetForm = () => {
    formik.resetForm();
  };

  useEffect(() => {
    if (loggedIn)
      localStorage.setItem(
        "credentials",
        JSON.stringify({ name: "admin", password: "12345" })
      );
  }, [loggedIn]);

  return (
    <>
      {loggedIn ? (
        <Navigate to={PATHES.PROFILE} />
      ) : (
        <Container maxWidth="lg" sx={{ marginTop: 10 }}>
          <form onSubmit={formik.handleSubmit}>
            <Stack spacing={2} alignItems="center">
              <TextField
                name="name"
                variant="outlined"
                label={i18n.t("TextFieldName")}
                onChange={formik.handleChange}
                value={formik.values.name}
                sx={{ width: media ? "100%" : "50%" }}
                error={authorization === "rejected"}
              />

              <TextField
                variant="outlined"
                name="password"
                type="password"
                label={i18n.t("TextFieldPassword")}
                onChange={formik.handleChange}
                value={formik.values.password}
                sx={{ width: media ? "100%" : "50%" }}
                error={authorization === "rejected"}
              />
              {authorization === "rejected" && (
                <Typography sx={{ color: "red" }} key="Error">
                  {i18n.t("AuthorizationError")}
                </Typography>
              )}
              <Box>
                <Button type="submit">{i18n.t("LoginButton")}</Button>
                <Button type="button" onClick={handleResetForm}>
                  {i18n.t("CancelButton")}
                </Button>
              </Box>
            </Stack>
          </form>
        </Container>
      )}
    </>
  );
};
