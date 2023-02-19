import { LANGUAGES } from "constants/generalConstants";
import { useAppDispatch, useAppSelector } from "hooks/useTyped";
import { useEffect, useRef } from "react";
import i18n from "service/i18/i18n";
import { setOffModalIsVisible, setTheLanguage } from "store/generalSlice";
import { ButtonLink, LanguageModalContainer } from "./Main.styled";

export const LanguageModal: React.FC = () => {
  const dispatch = useAppDispatch();
  const modal = useAppSelector(
    (state) => state.generalSlice.language.modalIsVisible
  );
  const modalRef = useRef<HTMLElement>(null);
  const handleCloseMenu = () => {
    dispatch(setOffModalIsVisible());
  };

  const handlePageLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    dispatch(setTheLanguage(lng));
    handleCloseMenu();
  };

  useEffect(() => {
    const handleOffSearchModalVisible = (e: React.MouseEvent<HTMLElement>) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        handleCloseMenu();
      }
    };
    document.addEventListener(
      "click",
      handleOffSearchModalVisible as unknown as EventListener,
      true
    );
    return () => {
      document.removeEventListener(
        "click",
        handleOffSearchModalVisible as unknown as EventListener,
        true
      );
    };
  }, [modal]);

  return (
    <LanguageModalContainer ref={modalRef}>
      {LANGUAGES.map((language) => (
        <ButtonLink
          key={language.id}
          onClick={() => {
            handlePageLanguage(language.id);
          }}
        >
          {language.name}
        </ButtonLink>
      ))}
    </LanguageModalContainer>
  );
};
