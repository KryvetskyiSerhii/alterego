import { NAV_BAR } from "constants/generalConstants";
import { Link } from "react-router-dom";

export const Header: React.FC = () => {
  return (
    <header>
      <nav>
        {NAV_BAR.map((item) => (
          <Link to={item.path} key={item.id}>
            {item.name}
          </Link>
        ))}
      </nav>
    </header>
  );
};
