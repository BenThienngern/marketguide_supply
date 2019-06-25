import { createStackNavigator, createAppContainer } from 'react-navigation';
import MapScreen from './routerStack/MapRoute';
import StoreFrontScreen from '../components/StoreFront';

const MapRoute = createStackNavigator(
  {
    Map: {
      screen: MapScreen,
    },
    StoreFront: {
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

export default createAppContainer(MapRoute);
