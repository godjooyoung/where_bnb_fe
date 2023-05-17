// context/DataStore.js
import { createContext, useContext, useState } from 'react';

const DataStore = createContext();

export const useDataStore = () => {
  const context = useContext(DataStore);
  if (!context) {
    throw new Error('useDataStore must be used within a DataStore.Provider');
  }
  return context;
};

export const DataStoreProvider = ({ children }) => {
  const [data, setData] = useState([]);

  const store = {
    data,
    setData,
  };

  return <DataStore.Provider value={store}>{children}</DataStore.Provider>;
};

export default DataStore;
