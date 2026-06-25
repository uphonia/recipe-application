import { Dispatch, SetStateAction } from "react";
import { User } from "../../models/User";

export type AuthContextState = {
  setUser: Dispatch<SetStateAction<User | null>>;
  user: User | null;
  userLoading: boolean;
};
