import React from 'react';
import {
  StackNavigation,
  TabNavigation,
  TabNavigationItem as TabItem,
} from '@exponent/ex-navigation';
import { Text } from 'react-native';
import { Router } from '../';

export default class Tabs extends React.Component {

  render() {
    return (
      <TabNavigation
        id="main"
        navigatorUID="main"
        initialTab="mapOne">
        <TabItem
          id="mapOne"
          renderIcon={(isSelected) => <Text>1</Text> }>
          <StackNavigation
            id="mapOne"
            navigatorUID="mapOne"
            initialRoute={Router.getRoute('mapOne')}
          />
        </TabItem>

        <TabItem
          id="mapTwo"
          renderIcon={(isSelected) => <Text>2</Text>  }>
          <StackNavigation
            id="mapTwo"
            initialRoute={Router.getRoute('mapTwo')}
          />
        </TabItem>

        <TabItem
          id="mapThree"
          renderIcon={(isSelected) => <Text>3</Text>  }>
          <StackNavigation
            id="mapThree"
            initialRoute={Router.getRoute('mapThree')}
          />
        </TabItem>

        <TabItem
          id="mapFour"
          renderIcon={(isSelected) => <Text>4</Text>  }>
          <StackNavigation
            id="mapFour"
            initialRoute={Router.getRoute('MapFour')}
          />
        </TabItem>

      </TabNavigation>
    );
  }
}
