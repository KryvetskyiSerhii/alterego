import { Route, Routes } from "react-router-dom";
import { routes } from "./routes";

export const Routing: React.FC = () => {
  return (
    <>
      <Routes>
        {routes.map((route) => (
          <Route
            path={route.path}
            key={route.name}
            element={<route.component />}
          />
        ))}
      </Routes>
    </>
  );
};
