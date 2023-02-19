interface Auth {
  isLoggedIn: boolean;
  authorized: "initial" | "granted" | "rejected";
}

interface Language {
  code: string;
  modalIsVisible: boolean;
}

export interface GeneralProps {
  auth: Auth;
  language: Language;
}

export interface Login {
  name: string;
  password: string;
}
