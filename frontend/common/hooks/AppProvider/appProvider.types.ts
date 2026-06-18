import { Dispatch, SetStateAction } from "react";
import { User } from "../../models/User";

export type AppContextState = {
  setUser: Dispatch<SetStateAction<User | null>>;
  user: User | null;
};
