import React from 'react';
import { createRouter, NavigationProvider, StackNavigation } from '@exponent/ex-navigation';
import Tabs from './components/Tabs';
import MapOne from './components/MapOne';
import MapTwo from './components/MapTwo';
import MapThree from './components/MapThree';
import MapFour from './components/MapFour';

export const Router = createRouter(() => ({
  tabs: () => Tabs,
  mapOne: () => MapOne,
  mapTwo: () => MapTwo,
  mapThree: () => MapThree,
  MapFour: () => MapFour
}));

export default class App extends React.Component {
  render() {

    return (
      <NavigationProvider router={Router}>
        <StackNavigation initialRoute={Router.getRoute('tabs')} />
      </NavigationProvider>
    );
  }
}
