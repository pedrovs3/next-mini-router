import { useRouter } from 'next/router';
import React, {memo, useCallback } from 'react';
import { injectPropInComponent } from './utils';
import RouterProvider from './context/RouterContext';
import NotFound from "next/dist/client/components/not-found-error";

export interface INextMiniRouterProps {
  children: React.ReactNode;
  defaultState: object;
}

/**
 * NextMiniRouter
 * @augments {NextMiniRouter<{children: React.ReactNode; defaultState: object;}>}
 * @param {INextMiniRouterProps} props
 * @returns {JSX.Element}
 * @constructor
 * @category Components
 * @subcategory NextMiniRouter
 * @public
 * @example
 * import { NextMiniRouter } from 'next-mini-router'
 *
 * export const Test = () => {
 *  return (
 *    <NextMiniRouter defaultState={{ ...variables }}>
 *      <Route path="/test1" >
 *        <Test1 />
 *      </Route>
 *      <Route path="/test2" >
 *        <Test2 />
 *      </Route>
 *    </NextMiniRouter>
 * )}
 * 
 * export default Test
*/
export const NextMiniRouter: React.FC<INextMiniRouterProps> = memo(({children, defaultState}: INextMiniRouterProps) => {
  const router = useRouter();

  const getChildrenToRender = (routes: string[], children: React.ReactNode) => {
    const currentRoute = `/${routes.join('/')}`;

    return React.Children.map(children, (element) => {
      if (!React.isValidElement(element)) return;
      if (element.props?.path === currentRoute)
        return injectPropInComponent(element, {defaultState});
    })?.[0];
  };

  const getChildrenCallback = useCallback(getChildrenToRender, []);

  const [, , ...routes] = router.query.routeData as string[];

  return (
    <RouterProvider>
      {getChildrenCallback(routes, children) || <NotFound/>}
    </RouterProvider>
  );
});
