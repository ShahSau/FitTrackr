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
  const [burntCalories, setBurntCalories] = useState<number>(0)
  const [totalMinutes, setTotalMinutes] = useState<number>(0)
  const [totalSets, setTotalSets] = useState<number>(0)
  return (
    <FitnessContext.Provider value={{ 
      authenticated, setAuthenticated,
      initialScreen, setInitialScreen,
      completed, setCompleted,
      currentWorkout, setCurrentWorkout,
      loggedemail, setLoggedEmail,
      burntCalories, setBurntCalories,
      totalMinutes, setTotalMinutes,
      totalSets, setTotalSets
    }}>
      {children}
    </FitnessContext.Provider>
  );
};

export { FitnessContext, FitnessContextProvider };
