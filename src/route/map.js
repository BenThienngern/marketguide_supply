import { createStackNavigator, createAppContainer } from 'react-navigation';
import MapScreen from './routerStack/MapRoute';

const MapRoute = createStackNavigator(
  {
    Map: {
      screen: MapScreen,
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
