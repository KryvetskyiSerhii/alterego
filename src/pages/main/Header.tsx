import { Language } from "@mui/icons-material";
import { AppBar, Toolbar, Stack, useMediaQuery } from "@mui/material";
import { NAV_BAR } from "constants/generalConstants";
import { useAppDispatch, useAppSelector } from "hooks/useTyped";
import { Link } from "react-router-dom";
import i18n from "service/i18/i18n";
import { setModalIsVisible } from "store/generalSlice";
import { LanguageModal } from "./LanguageModal";
import { ButtonLink, HeaderContainer } from "./Main.styled";

interface Props {
  language: string;
}

export const Header: React.FC<Props> = ({ language }) => {
  const dispatch = useAppDispatch();
  const media = useMediaQuery("(max-width:560px)");
  const isLoggedIn = useAppSelector(
    (state) => state.generalSlice.auth.isLoggedIn
  );
  const languageModal = useAppSelector(
    (state) => state.generalSlice.language.modalIsVisible
  );

  const handleLanguageModalIsVisible = () => {
    dispatch(setModalIsVisible());
  };

  return (
    <header>
      <AppBar position="relative">
        <HeaderContainer maxWidth="lg">
          <Toolbar>
            {NAV_BAR.map((item) => (
              <Link
                to={item.path}
                key={item.id}
                style={{ textDecoration: "none" }}
              >
                <ButtonLink
                  variant="contained"
                  color="primary"
                  sx={{ m: 2, fontSize: media ? 10 : 14 }}
                >
                  {isLoggedIn ? i18n.t(item.name) : i18n.t(item.altName)}
                </ButtonLink>
              </Link>
            ))}
          </Toolbar>
          <Stack
            onClick={handleLanguageModalIsVisible}
            alignItems="center"
            justifyContent="space-between"
            flexDirection="row"
            sx={{ cursor: "pointer" }}
          >
            <Language sx={{ marginRight: 1 }} />
            {language}
          </Stack>
          {languageModal && <LanguageModal />}
        </HeaderContainer>
      </AppBar>
    </header>
  );
};
