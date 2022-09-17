import React, { createContext, useContext, useState } from 'react';
const LoaderContext = createContext({
  loading: false,
  setLoading: (flag: boolean) => {},
});

function useLoader() {
  return useContext(LoaderContext);
}

export function LoaderProvider({ children }) {
  const [loading, setLoading] = useState(false);
  return (
    <LoaderContext.Provider value={{ loading, setLoading }}>
      {children}
    </LoaderContext.Provider>
  );
}

export default useLoader;
