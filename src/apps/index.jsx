import React, { Suspense } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import routes from 'config/routes';
import { Spinner } from 'apps/components';

export default function RoutesApp() {
  return (
    <BrowserRouter>
      <Switch>
        {routes.map((route, index) => {
          const { path, exact, component: Component } = route;
          return (
            <Route
              key={index}
              path={path}
              exact={exact}
              render={(props) => (
                <Suspense fallback={<Spinner.FixSpinner />}>
                  <Component {...props} />
                </Suspense>
              )}
            />
          );
        })}
      </Switch>
    </BrowserRouter>
  );
}
