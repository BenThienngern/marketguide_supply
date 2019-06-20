import { createStackNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from './routerStack/HomeRoute';
import StoreFrontScreen from '../components/StoreFront';

const HomeRouter = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    StoreFont: {
      screen: StoreFrontScreen,
    },
  },
  {
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
    },
  },
);

export default createAppContainer(HomeRouter);
