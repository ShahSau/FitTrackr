import React, { createContext, useState } from 'react';

const FitnessContext = createContext<any>(null);

interface FitnessContextProviderProps {
  children: React.ReactNode;
}

const FitnessContextProvider = ({ children }: any) => {
  const [authenticated, setAuthenticated] = useState(false);
  const [initialScreen, setInitialScreen] = useState(false);
  return (
    <FitnessContext.Provider value={{ 
      authenticated, setAuthenticated,
      initialScreen, setInitialScreen
    }}>
      {children}
    </FitnessContext.Provider>
  );
};

export { FitnessContext, FitnessContextProvider };
