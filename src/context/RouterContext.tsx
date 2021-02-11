import React, { createContext, useState, useContext } from 'react';

interface Data {
  data: any;
  setData: React.Dispatch<React.SetStateAction<any>>;
}

const RouterContext = createContext<Data | null>(null);

const Router = ({ children }) => {
  const [data, setData] = useState<any>(null);

  return (
    <RouterContext.Provider
      value={{
        data,
        setData,
      }}
    >
      {children}
    </RouterContext.Provider>
  );
};

export function useRouterContext() {
  const context = useContext(RouterContext);

  const { data, setData } = context;

  return {
    data,
    setData,
  };
}

export default Router;
