import { AppRoutesEndpoints } from 'constants/endpoints';
import { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const Home = lazy(() => import('./home'));

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route exact path={AppRoutesEndpoints.Home} component={Home} />
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
}
