import { createStackNavigator } from 'react-navigation';
import HomeScreen from '../../components/pages/home';

const HomeStack = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        tabarVisible: true,
      },
    },
  },
  {
    initialRouteName: 'Home',
    headerMode: 'none',
    navigationOptions: {
      gesturesEnabled: false,
    },
  },
);

export default HomeStack;
