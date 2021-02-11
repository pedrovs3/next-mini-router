import { injectPropInComponent } from './utils';
import { RouteParams } from './index';
import { memo, useMemo } from 'react';
import { useRouterContext } from './context/RouterContext';
import { useRouter } from 'next/router';

interface Route extends RouteParams {
  path: string;
}

const Route = ({ children, defaultState }) => {
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
};

export default memo(Route) as React.FC<Route>;
