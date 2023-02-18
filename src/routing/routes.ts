import { Auth } from "pages/auth/Auth";
import { Main } from "pages/main/Main";
import { News } from "pages/news/News";
import { Profile } from "pages/profile/Profile";

export enum PATHES {
  MAIN = "/",
  NEWS = "/news",
  PROFILE = "/profile",
  AUTH = "/auth",
}

interface RouterProps {
  path: PATHES;
  component: React.ComponentType;
  name: string;
}

export const routes: RouterProps[] = [
  {
    path: PATHES.MAIN,
    component: Main,
    name: "Main",
  },
  {
    path: PATHES.NEWS,
    component: News,
    name: "News",
  },
  {
    path: PATHES.PROFILE,
    component: Profile,
    name: "Profile",
  },
  {
    path: PATHES.AUTH,
    component: Auth,
    name: "Auth",
  },
];
