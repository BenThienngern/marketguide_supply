import React from 'react';
import {
  View,
  ImageBackground,
  StyleSheet,
  Text,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import axios from 'axios';
import { Title } from 'react-native-paper';
import ListView from '../../components/ListView';
import HeadBanner from '../../components/HeadBanner';
import PromotionCard from '../../components/PromotionCard';
import CategoriesCard from '../../components/CategoriesCard';

class HomeRoute extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      stores: [],
    };
  }
  componentWillMount() {
    this.getStoreFront();
    console.disableYellowBox = true;
  }
  onClickRecomendShop = (name) => {
    console.log(name);
    this.props.navigation.navigate('StoreFont', { shopName: name });
  };
  onClickSeeAll = () => {
    this.props.navigation.navigate('List');
  };
  onClickZones = () => {
    this.props.navigation.navigate('Map');
  };

  async getStoreFront() {
    await axios
      .get('https://chiangmai.thaimarket.guide/shop?offset=0&limit=10')
      .then((response) => {
        this.setState(() => ({
          stores: response.data.data,
        }));
      });
  }

  render() {
    console.log(this.state.stores);
    return (
      <View>
        <HeadBanner headerText={'Home'} />

        <ScrollView>
          <View style={{ padding: 16 }}>
            <Title>Top Categories in Chiangmai</Title>
            <View style={{ flexDirection: 'row' }}>
              <CategoriesCard
                text="RESTAURANTS"
                url="http://cdn.shopify.com/s/files/1/0065/4917/6438/products/outside-a-fancy-restaurant-background_ff1aca85-4d04-4ce8-9a4b-c9dc9a81729c_1200x1200.jpg?v=1549231065"
              />
              <CategoriesCard
                text="SHOPS"
                url="https://upload.wikimedia.org/wikipedia/commons/1/13/Supermarkt.jpg"
              />
            </View>
          </View>
          <View style={{ paddingLeft: 16, paddingTop: 2 }}>
            <Title>Zones</Title>
            <View>
              <TouchableOpacity onPress={() => this.onClickZones()}>
                <View>
                  <ImageBackground
                    style={styles.zonesImage}
                    source={{
                      uri:
                        'https://map.viamichelin.com/map/carte?map=viamichelin&z=10&lat=18.80329&lon=98.98108&width=550&height=382&format=png&version=latest&layer=background&debug_pattern=.*',
                    }}
                  >
                    <View>
                      <Text style={styles.textOnImage}>Chiang Mai</Text>
                      <View style={[styles.zonesText, { flex: 1 }]} />
                    </View>
                  </ImageBackground>
                </View>
              </TouchableOpacity>
            </View>
          </View>
          <View style={{ padding: 16 }}>
            <View
              style={{
                flexDirection: 'row',
                flex: 1,
                justifyContent: 'space-between',
              }}
            >
              <Title>Promotions</Title>
              <TouchableOpacity
                style={{ justifyContent: 'center', alignContent: 'flex-end' }}
              >
                <Text style={{ color: 'purple', fontSize: 17 }}>See All></Text>
              </TouchableOpacity>
            </View>
            <View style={{ flexDirection: 'row' }}>
              <PromotionCard
                text="Promotion"
                url="https://api.thaimarket.guide/images/service/download/5bfb6e138882f90001d19bd4?"
                dis="Test "
                date="17 Jan - 17 Dec 2019"
              />
              <PromotionCard
                text="Promotion"
                url="https://api.thaimarket.guide/images/service/download/5c2064fb70967d0001a9ba41?"
                dis="Test"
                date="02 Feb - 19 Jun 2020"
              />
            </View>
          </View>
          <View style={{ padding: 16 }}>
            <View
              style={{
                flexDirection: 'row',
                flex: 1,
                justifyContent: 'space-between',
              }}
            >
              <Title>Recommended Stores</Title>
              <TouchableOpacity
                style={{ justifyContent: 'center', alignContent: 'flex-end' }}
                onPress={() => this.onClickSeeAll()}
              >
                <Text style={{ color: 'purple', fontSize: 17 }}>See All></Text>
              </TouchableOpacity>
            </View>

            <View style={{ flexDirection: 'row' }}>
              <ScrollView horizontal>
                {this.state.stores.length > 0
                  ? this.state.stores.map((data) => (
                      <ListView
                        key={data.id}
                        onClick={() => this.onClickRecomendShop(data.lang.en.name)}
                        text={data.lang.en.name}
                        url={data.image}
                      />
                    ))
                  : null}
              </ScrollView>
            </View>
          </View>
          <Text style={styles.EmptySpace}>, </Text>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textOnImage: {
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
    backgroundColor: 'rgba(52, 52, 52, 0.6)',
  },
  EmptySpace: {
    fontSize: 100,
    color: 'white',
  },
  zonesImage: {
    height: 120,
    width: 379,
    justifyContent: 'flex-end',
    alignItems: 'stretch',
  },
});
export default HomeRoute;
