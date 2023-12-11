import {Dispatch, SetStateAction} from "react";

export * from './NextMiniRouter';
export * from './Route';

export interface RouteParams {
  navigate?: (path: string, data?: {}) => {};
  data?: object;
  setData?: Dispatch<SetStateAction<any>>;
  defaultState?: { [propName: string]: any };
}
