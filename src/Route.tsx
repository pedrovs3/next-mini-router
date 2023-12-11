import { injectPropInComponent } from './utils';
import { RouteParams } from './index';
import React, { memo, useMemo } from 'react';
import { useRouterContext } from './context/RouterContext';
import {useRouter} from "next/router";

export type Route = RouteParams & {
  path: string;
}

type RouteProps = {
  children: React.ReactElement;
  defaultState?: object;
}

// @ts-ignore
export const Route: React.FC<RouteProps> = memo(({ children, defaultState }: RouteProps) => {
  const router = useRouter();

  const { setData, data: contextData } = useRouterContext();

  const navigate = (page: string, data?: object) => {
    const { routeData } = router.query;
    const [identifier, service, ...routes] = routeData as string[];
    router.push(`${identifier}/${service}/${page}`, undefined, {
      shallow: true,
    });

    data && setData(data);
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
}) as React.FC<Route>;
