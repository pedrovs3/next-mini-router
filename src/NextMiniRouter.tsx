import { useRouter } from 'next/router';
import React, { useState, useEffect, memo, useCallback, useMemo } from 'react';
import { injectPropInComponent } from './utils';
import RouterProvider from './context/RouterContext';
import NotFound from "next/dist/client/components/not-found-error";

export type NextMiniRouterProps = {
  children: React.ReactElement;
  defaultState: object;
}

export const NextMiniRouter: React.FC<NextMiniRouterProps> = memo(({children, defaultState}: NextMiniRouterProps) => {
  const router = useRouter();

  const getChildrenToRender = (routes: string[], children: React.ReactNode) => {
    const currentRoute = `/${routes.join('/')}`;

    // @ts-ignore
    return React.Children.map(children, (element) => {
      if (!React.isValidElement(element)) return;
      if (element.props?.path === currentRoute)
        return injectPropInComponent(element, {defaultState});
    })[0];
  };

  const getChildrenCallback = useCallback(getChildrenToRender, []);

  const [, , ...routes] = router.query.routeData as string[];

  return (
    <RouterProvider>
      {getChildrenCallback(routes, children) || <NotFound/>}
    </RouterProvider>
  );
}) as React.FC<NextMiniRouterProps>;
