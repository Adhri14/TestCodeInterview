import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  StatusBar,
  Image,
  ScrollView,
  Pressable,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {DummyImage, Notif, Star} from '../../assets/icons';
import CardMovieBig from '../../components/CardMovieBig';
import CardMovieSmall from '../../components/CardMovieSmall';
import Gap from '../../components/Gap';
import axios from 'axios';
import {useDispatch, useSelector} from 'react-redux';
import {getMovies} from '../../redux/thunk';
import I18n from '../../utils/I18n';

const Home = ({navigation}) => {
  const dispatch = useDispatch();
  const {setMovie} = useSelector(state => state);

  // https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Flag_of_Indonesia.svg/640px-Flag_of_Indonesia.svg.png

  // https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Flag_of_the_United_Kingdom.svg/1200px-Flag_of_the_United_Kingdom.svg.png

  useEffect(() => {
    dispatch(getMovies());
  }, []);

  return (
    <SafeAreaView style={styles.page}>
      <StatusBar backgroundColor="#1D2027" barStyle="light-content" />
      <ScrollView
        contentContainerStyle={{flexGrow: 1}}
        showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <View style={styles.rowHeader}>
            <Text style={styles.titleHeader}>{I18n.t('greating')}</Text>
            <Pressable
              onPress={() => {
                console.log('ok');
                if (I18n.t('lang') === 'id') {
                  I18n.locale = 'en';
                  dispatch({type: 'SET_LANG', value: 'en'});
                }
                if (I18n.t('lang') === 'en') {
                  I18n.locale = 'id';
                  dispatch({type: 'SET_LANG', value: 'id'});
                }
              }}>
              {I18n.t('lang') === 'id' ? (
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}>
                  <Text style={{fontSize: 18, color: 'white', marginRight: 10}}>
                    {I18n.t('lang') === 'id' ? 'EN' : 'ID'}
                  </Text>
                  <Image
                    source={{
                      uri: 'https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Flag_of_the_United_Kingdom.svg/1200px-Flag_of_the_United_Kingdom.svg.png',
                    }}
                    style={{width: 30, height: 30, borderRadius: 30 / 2}}
                  />
                </View>
              ) : (
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}>
                  <Text style={{fontSize: 18, color: 'white', marginRight: 10}}>
                    {I18n.t('lang') === 'id' ? 'EN' : 'ID'}
                  </Text>
                  <Image
                    source={{
                      uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Flag_of_Indonesia.svg/640px-Flag_of_Indonesia.svg.png',
                    }}
                    style={{width: 30, height: 30, borderRadius: 30 / 2}}
                  />
                </View>
              )}
            </Pressable>
          </View>
          <View style={styles.row}>
            <Text style={styles.title}>{I18n.t('title1')}</Text>
            <Text style={styles.subtitle}>{I18n.t('textLink')}</Text>
          </View>
        </View>
        <ScrollView
          style={{flexGrow: 0}}
          horizontal
          showsHorizontalScrollIndicator={false}>
          <View style={styles.carousel}>
            {setMovie.movies?.map((item, index) => {
              const n = index + 1;
              if (n <= 3) {
                return (
                  <CardMovieBig
                    key={item.id.toString()}
                    name={item.title || item.name}
                    rate={item.vote_average}
                    img={{
                      uri: `https://image.tmdb.org/t/p/w500${item.poster_path}`,
                    }}
                    onPress={() =>
                      navigation.navigate('DetailMovie', {id: item.id})
                    }
                  />
                );
              }
            })}
          </View>
        </ScrollView>
        <View style={styles.container}>
          <View style={styles.row}>
            <Text style={styles.title}>{I18n.t('title2')}</Text>
            <Text style={styles.subtitle}>{I18n.t('textLink')}</Text>
          </View>
          <Gap height={18} />
          {setMovie.movies?.map((item, index) => {
            const n = index + 1;
            if (n <= 5) {
              return (
                <View key={item.id.toString()}>
                  <CardMovieSmall
                    name={item.title || item.name}
                    rate={item.vote_average}
                    img={{
                      uri: `https://image.tmdb.org/t/p/w500${item.poster_path}`,
                    }}
                    onPress={() =>
                      navigation.navigate('DetailMovie', {id: item.id})
                    }
                  />
                  <Gap height={18} />
                </View>
              );
            }
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#1D2027',
  },
  container: {
    marginHorizontal: 30,
  },
  rowHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 30,
  },
  titleHeader: {
    fontSize: 16,
    color: 'white',
    fontFamily: 'Poppins-Medium',
  },
  carousel: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 12,
    marginLeft: 30,
    marginBottom: 10,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 42,
  },
  title: {
    fontSize: 20,
    color: 'white',
    fontFamily: 'Poppins-Medium',
  },
  subtitle: {
    fontSize: 14,
    color: '#696D74',
    fontFamily: 'Poppins-Light',
  },
});
