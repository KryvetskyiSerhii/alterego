import { Header } from "pages/main/Header";
import { Routing } from "routing/Routing";

export const App: React.FC = () => {
  return (
    <div>
      <Header />
      <Routing />
    </div>
  );
};
