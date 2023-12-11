import React, { createContext, useState, useContext } from 'react';

export interface Data {
  data: any;
  setData: React.Dispatch<React.SetStateAction<any>>;
}

export interface RouterProps {
  children: React.ReactNode;
}

const RouterContext = createContext<Data | null>(null);

const Router = ({ children }: RouterProps) => {
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

  // @ts-ignore
  const { data, setData } = context;

  return {
    data,
    setData,
  };
}

export default Router;
