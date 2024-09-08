import React, { createContext, useState } from 'react';

const FitnessContext = createContext<any>(null);

interface FitnessContextProviderProps {
  children: React.ReactNode;
}

const FitnessContextProvider = ({ children }: any) => {
  const [authenticated, setAuthenticated] = useState(false);
  const [initialScreen, setInitialScreen] = useState(false);
  const  [completed, setCompleted] = useState<any>([])
  const [currentWorkout, setCurrentWorkout] = useState<any>([])
  const [loggedemail, setLoggedEmail] = useState<string>("")
  return (
    <FitnessContext.Provider value={{ 
      authenticated, setAuthenticated,
      initialScreen, setInitialScreen,
      completed, setCompleted,
      currentWorkout, setCurrentWorkout,
      loggedemail, setLoggedEmail
    }}>
      {children}
    </FitnessContext.Provider>
  );
};

export { FitnessContext, FitnessContextProvider };
