import { createContext, useContext, useState } from 'react';

const FarmContext = createContext();

export function FarmProvider({ children }) {
  const [selectedFarm, setSelectedFarm] = useState(null);

  return (
    <FarmContext.Provider value={{ selectedFarm, setSelectedFarm }}>
      {children}
    </FarmContext.Provider>
  );
}

export function useFarm() {
  const context = useContext(FarmContext);
  if (!context) {
    throw new Error('useFarm must be used within a FarmProvider');
  }
  return context;
}
