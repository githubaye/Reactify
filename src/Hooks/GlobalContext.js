import { createContext } from "react";
export const GlobalContext = createContext();

const GlobalContextProvider = (props) => {
  return (
    <GlobalContext.Provider value={"this is coming from global context"}>
      {props.children}
    </GlobalContext.Provider>
  );
};

export default GlobalContextProvider;
