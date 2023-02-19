import { PATHES } from "routing/routes";

export const NAV_BAR = [
  {
    id: Math.random(),
    name: "Main",
    altName: "Main",
    path: PATHES.MAIN,
  },
  {
    id: Math.random(),
    name: "News",
    altName: "News",
    path: PATHES.NEWS,
  },
  {
    id: Math.random(),
    name: "Profile",
    altName: "Auth",
    path: PATHES.AUTH,
  },
];

export const LANGUAGES = [
  {
    id: "ua",
    name: "Українська",
  },
  {
    id: "en",
    name: "English",
  },
];
