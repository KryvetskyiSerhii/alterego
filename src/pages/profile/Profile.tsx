import { useAppSelector } from "hooks/useTyped";
import { Navigate } from "react-router-dom";
import { PATHES } from "routing/routes";

export const Profile: React.FC = () => {
  const authorization = useAppSelector((state) => state.generalSlice.auth);

  return (
    <>
      {!authorization.isLoggedIn ? (
        <Navigate to={PATHES.MAIN} />
      ) : (
        <div>Hello Profile</div>
      )}
    </>
  );
};
