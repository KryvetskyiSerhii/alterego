import {
  styled,
  Container,
  Paper,
  Button,
  Toolbar,
  Stack,
} from "@mui/material";

export const MainBase = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  marginTop: theme.spacing(4),
  borderRadius: 15,
}));

export const ButtonLink = styled(Button)(({ theme }) => ({
  color: "#fff",
}));

export const HeaderContainer = styled(Container)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  position: "relative",
}));

export const LanguageModalContainer = styled(Stack)(({ theme }) => ({
  padding: theme.spacing(2),
  marginTop: theme.spacing(4),
  borderRadius: 15,
  position: "absolute",
  top: 20,
  right: 20,
  zIndex: 10,
  backgroundColor: "#121212",
  backgroundImage:
    "linear-gradient(rgba(255, 255, 255, 0.09), rgba(255, 255, 255, 0.09))",
  border: "1px solid #000",
}));
