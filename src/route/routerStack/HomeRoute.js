import React from 'react';
import {
  View,
  ImageBackground,
  StyleSheet,
  Text,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { Title } from 'react-native-paper';
import ListView from '../../components/ListView';
import HeadBanner from '../../components/HeadBanner';
import PromotionCard from '../../components/PromotionCard';
import CategoriesCard from '../../components/CategoriesCard';

const HomeRoute = () => (
  <View>
    <HeadBanner headerText={'Home'} />

    <ScrollView>
      <View style={{ padding: 16 }}>
        <Title>Top Categories in Chiangmai</Title>
        <View style={{ flexDirection: 'row' }}>
          <CategoriesCard
            text="RESTAURANTS"
            url="https://api.thaimarket.guide/images/service/download/5c205bba70967d0001a9ba31"
          />
          <CategoriesCard
            text="SHOPS"
            url="https://api.thaimarket.guide/images/service/download/5c205bba70967d0001a9ba31"
          />
        </View>
      </View>
      <View style={{ paddingLeft: 16, paddingTop: 2 }}>
        <Title>Zones</Title>
        <View>
          <TouchableOpacity>
            <View>
              <ImageBackground
                style={styles.zonesImage}
                source={{
                  uri:
                    'https://api.thaimarket.guide/images/service/download/5c205bba70967d0001a9ba31',
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
            url="https://api.thaimarket.guide/images/service/download/5c205bba70967d0001a9ba31"
          />
          <PromotionCard
            text="Promotion"
            url="https://api.thaimarket.guide/images/service/download/5c205bba70967d0001a9ba31"
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
          >
            <Text style={{ color: 'purple', fontSize: 17 }}>See All></Text>
          </TouchableOpacity>
        </View>

        <View style={{ flexDirection: 'row' }}>
          <ScrollView horizontal>
            <ListView
              text="Star Brandname"
              url="https://api.thaimarket.guide/images/service/download/5c205bba70967d0001a9ba31"
            />
            <ListView
              text="GYPSO"
              url="https://api.thaimarket.guide/images/service/download/5c205bba70967d0001a9ba31"
            />
            <ListView
              text="PRA TAILORS"
              url="https://api.thaimarket.guide/images/service/download/5c205bba70967d0001a9ba31"
            />
            <ListView
              text="ATM TEA BAR"
              url="https://api.thaimarket.guide/images/service/download/5c205bba70967d0001a9ba31"
            />
            <ListView
              text="DV Shop at Ratta..."
              url="https://api.thaimarket.guide/images/service/download/5c205bba70967d0001a9ba31"
            />
          </ScrollView>
        </View>
      </View>
      <Text style={styles.EmptySpace}>, </Text>
    </ScrollView>
  </View>
);

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
