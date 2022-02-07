import { createContext, useState } from "react";

// eslint-disable-next-line react-hooks/rules-of-hooks
const [boxType, setBoxType] = useState(undefined);

let OptionsContext = createContext({ boxType, setBoxType });

const OptionsContextProvider = ({ children }) => {
  console.log(children);

  return (
    <OptionsContext.Provider value={{ boxType, setBoxType }}>
      {children}
    </OptionsContext.Provider>
  );
};

export { OptionsContext, OptionsContextProvider };