import  { createContext, useState, ReactNode } from 'react';

interface ChallengesProviderProps {
  children: ReactNode
}

interface ChallengesContextData {
  level: number;
  currentExperience: number;
  ChallengesCompleted: number;
  startNewChallenge: () => void;
  levelUp: () => void;
}

export const ChallengesContext = createContext({} as ChallengesContextData);

export const ChallengesProvider = ({ children }: ChallengesProviderProps) => {

  const [level, setLevel] = useState(1);
  const [currentExperience, setCurrentExperience] = useState(0);
  const [ChallengesCompleted, setChallengesCompleted] = useState(0);
  
  const levelUp = () => {
    setLevel(level + 1);
  }

  const startNewChallenge = () => {
    console.log("startNewChallenge")
  }

  return (
    <ChallengesContext.Provider value={{
      level,
      currentExperience,
      ChallengesCompleted,
      startNewChallenge,
      levelUp
    }}>
      {children}
    </ChallengesContext.Provider>
  );
};