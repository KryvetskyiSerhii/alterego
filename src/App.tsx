import { useAppSelector } from "hooks/useTyped";
import { Header } from "pages/main/Header";
import { Routing } from "routing/Routing";

export const App: React.FC = () => {
  const language = useAppSelector((state) => state.generalSlice.language.code);
  return (
    <div>
      <Header language={language} />
      <Routing />
    </div>
  );
};
