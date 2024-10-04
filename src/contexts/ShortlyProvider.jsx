/* eslint-disable react/prop-types */
import useScreenSize from "../hooks/useScreenSize";
import { useContext, useEffect, useState } from "react";
import { createContext } from "react";

const ShortlyContext = createContext();

function ShortlyProvider({ children }) {
  const [isMobile, setIsMobile] = useState(null);
  const screenSize = useScreenSize();

  useEffect(
    function () {
      setIsMobile(screenSize.width <= 1000);
    },
    [screenSize.width]
  );

  return (
    <ShortlyContext.Provider
      value={{
        isMobile,
      }}
    >
      {children}
    </ShortlyContext.Provider>
  );
}

function useShortly() {
  const context = useContext(ShortlyContext);
  if (context === undefined)
    throw new Error("bankContext was used outside the EasyBankProvider");
  return context;
}

export { ShortlyProvider, useShortly };
