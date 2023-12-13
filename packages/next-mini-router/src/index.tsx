import type React from 'react'

export * from './NextMiniRouter'
export * from './Route'

export interface RouteParams {
  data?: object
  defaultState?: Record<string, any>
  navigate?: (path: string, data?: object) => object
  setData?: React.Dispatch<React.SetStateAction<any>>
}
