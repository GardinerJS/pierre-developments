import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Navigation from './components/Navigation/Navigation';
import Routes from './Routes';
import { IRoutesData } from './types/IRoutesData';

const App: React.FC = () => {
  return (
    <div>
      <Navigation />
      <Switch>
        {Routes.map((route: IRoutesData) => (
          <Route exact path={route.Path} key={route.Path}>
            <route.Component />
          </Route>
        ))}
      </Switch>
      <Footer />
    </div>
  );
};

export default App;
