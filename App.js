import React, { Component } from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import { Main } from './src/components/Main'
import { ExampleScreen } from './src/components/ExampleScreen';

const MainNavigator = createStackNavigator({
  Home: { screen: Main },
  NotHome: {screen: ExampleScreen },
}, {
  initialRouteName: 'Home',
});

export const App = createAppContainer(MainNavigator);

//
// const Navigation = createAppContainer(MainNavigator);
//
//
// export class App extends Component {
//   render() {
//     return (
//       <Navigation />
//     );
//   }
// }
