import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack'; 
import AccessScreen from './src/screens/AccessScreen';


const navigator = createStackNavigator(
  {
    Home: AccessScreen
  },
  {
    initialRouteName:'Home',
    defaultNavigationOptions:{
      title: 'App'
    }

  }
);

export default createAppContainer(navigator);