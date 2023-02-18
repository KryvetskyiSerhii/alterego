interface Auth {
  isLoggedIn: boolean;
  authorized: "initial" | "granted" | "rejected";
}

export interface GeneralProps {
  auth: Auth;
}

export interface Login {
  name: string;
  password: string;
}
