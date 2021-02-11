import { useRouter } from 'next/router';
import React, { useState, useEffect, memo, useCallback, useMemo } from 'react';
import NotFound from '../NotFound';
import { injectPropInComponent } from './utils';
import RouterProvider from '@/components/NextMiniRouter/context/RouterContext';

interface NextMiniRouter {
  defaultState: object;
}

const NextMiniRouter = ({ children, defaultState }) => {
  const router = useRouter();

  const getChildrenToRender = (routes: string[], children: React.ReactNode) => {
    const currentRoute = `/${routes.join('/')}`;

    return React.Children.map(children, (element) => {
      if (!React.isValidElement(element)) return;
      if (element.props?.path === currentRoute)
        return injectPropInComponent(element, { defaultState });
    })[0];
  };

  const getChildrenCallback = useCallback(getChildrenToRender, []);

  const [, , ...routes] = router.query.routeData as string[];

  return (
    <RouterProvider>
      {getChildrenCallback(routes, children) || <NotFound />}
    </RouterProvider>
  );
};

export default memo(NextMiniRouter) as React.FC<NextMiniRouter>;
