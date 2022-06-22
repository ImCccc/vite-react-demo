import { Suspense } from 'react';
import { HashRouter, Route, RouteObject, Routes } from 'react-router-dom';

import Loading from '@/components/Loading';
import routes from '@/config/routes';

import '@/styles/global.less';

const getRoute = (routes: RouteObject[]) => {
  return routes.map((options) => (
    <Route
      key={options.path}
      path={options.path}
      element={<Suspense fallback={<Loading />}>{options.element}</Suspense>}
    >
      {options.children && getRoute(options.children)}
    </Route>
  ));
};

function App() {
  return (
    <HashRouter>
      <Routes>{getRoute(routes)}</Routes>
    </HashRouter>
  );
}

export default App;
