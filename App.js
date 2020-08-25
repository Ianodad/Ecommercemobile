import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';


import AccessScreen from './src/screens/AccessScreen';
import ProductsScreen from './src/screens/ProductsScreen';
import TestingScreen from './src/screens/TestingScreen';
import ProductScreen from './src/screens/ProductScreen';
import AccountScreen from './src/screens/AccountScreen';



const navigator = createStackNavigator(
  {
    Home: AccountScreen,
  },
  {
    initialRouteName:'Home',
    defaultNavigationOptions:{
      title: 'App',
      headerShown: false
    }

  }
);

export default createAppContainer(navigator);