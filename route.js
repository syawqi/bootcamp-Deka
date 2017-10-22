import React from 'react';
import { StackNavigator } from 'react-navigation';
import App from './App'
import Test from './test'
const Router = StackNavigator({
  App: { screen: App },
  Test :  { screen : Test }
});

export default class Route extends React.Component {
  static navigationOptions = {
  };
  render() {
    return <Router />;
  }
}
