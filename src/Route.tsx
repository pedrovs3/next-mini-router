import { injectPropInComponent } from './utils';
import { RouteParams } from './index';
import React, {ComponentType, memo} from 'react';
import { useRouterContext } from './context/RouterContext';
import {useRouter} from "next/router";

export interface IRouteProps extends RouteParams {
  path: string;
  children?: React.ReactNode;
}

/**
 * Route
 * @param {IRouteProps} props
 * @returns {JSX.Element}
 * @constructor
 * @category Components
 * @subcategory NextMiniRouter
 * @public
 * @example
 * import { Route } from 'next-mini-router'
 *
 * export const Test = () => {
 * return (
 * <NextMiniRouter defaultState={{ ...variables }}>
 *  <Route path="/test1" >
 *     <Test1 />
 *  </Route>
 * </NextMiniRouter>
 */
export const Route: React.MemoExoticComponent<ComponentType<IRouteProps>> = memo(({ children, defaultState }: IRouteProps) => {
  const router = useRouter();

  const { setData, data: contextData } = useRouterContext();

  const navigate = (page: string, data?: object) => {
    const { routeData } = router.query;
    const [identifier, service, ...routes] = routeData as string[];
    router.push(`${identifier}/${service}/${page}`, undefined, {
      shallow: true,
    });

    data && setData && setData(data);
  };

  return (
    <>
      {injectPropInComponent(children, {
        navigate,
        setData,
        defaultState,
        data: contextData,
      })}
    </>
  );
});
