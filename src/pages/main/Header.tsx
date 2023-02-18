import { NAV_BAR } from "constants/generalConstants";
import { Link } from "react-router-dom";
import i18n from "service/i18/i18n";

export const Header: React.FC = () => {
  return (
    <header>
      <nav>
        {NAV_BAR.map((item) => (
          <Link to={item.path} key={item.id}>
            {i18n.t(item.name)}
          </Link>
        ))}
      </nav>
    </header>
  );
};
