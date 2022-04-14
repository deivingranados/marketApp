import React, { useContext } from "react";
import { AppContextType } from "./type";

export const AppContext = React.createContext<AppContextType>({
  state: {},
  setState: () => null,
});
export const useAppContext = () => useContext(AppContext);
