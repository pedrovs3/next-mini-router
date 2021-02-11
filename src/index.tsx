export { default as NextMiniRouter } from './NextMiniRouter';
export { default as Route } from './Route';

export interface RouteParams {
  navigate?: (path: string, data?: {}) => {};
  data?: object;
  setData?: React.Dispatch<React.SetStateAction<any>>;
  defaultState?: { [propName: string]: any };
}
