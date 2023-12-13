import React from 'react'

interface Data {
  data: any
  setData: React.Dispatch<React.SetStateAction<any>>
}

interface RouterProps {
  children: React.ReactNode
}

const RouterContext = React.createContext<Data | null>(null)

/**
 * Router
 * @param children
 * @constructor
 * @category Components
 * @subcategory NextMiniRouter
 * @public
 * @example
 *
 * import { Router } from 'next-mini-router'
 *
 * export const Test = () => {
 * return (
 * <Router>
 *   <Route path="/test1" >
 */
export const Router = ({ children }: RouterProps) => {
  const [data, setData] = React.useState<any>(null)

  return (
    <RouterContext.Provider
      value={{
        data,
        setData
      }}
    >
      {children}
    </RouterContext.Provider>
  )
}

export function useRouterContext () {
  const context = React.useContext(RouterContext)

  const { data, setData } = context ?? {}

  return {
    data,
    setData
  }
}
