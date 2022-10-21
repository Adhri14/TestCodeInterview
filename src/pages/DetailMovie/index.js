import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  Pressable,
  StatusBar,
  ScrollView,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {Btn_Back, Btn_Save, DummyImage, Star} from '../../assets/icons';
import Gap from '../../components/Gap';
import Button from '../../components/Button';
import axios from 'axios';
import {useDispatch, useSelector} from 'react-redux';
import {getDetailMovie} from '../../redux/thunk';
import I18n from '../../utils/I18n';

const DetailMovie = ({navigation, route}) => {
  const {id} = route.params;
  const dispatch = useDispatch();
  const {setMovie} = useSelector(state => state);
  const [numberOfLines, setNumberOfLines] = useState(2);

  useEffect(() => {
    dispatch(getDetailMovie(id));
  }, []);

  return (
    <SafeAreaView style={styles.page}>
      <StatusBar backgroundColor="#1B1E25" barStyle="light-content" />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{flexGrow: 1}}>
        <View style={styles.container}>
          <View style={styles.rowHeader}>
            <Pressable
              style={styles.button}
              onPress={() => navigation.goBack()}>
              <Image source={Btn_Back} />
            </Pressable>
            <Text style={styles.titleHeader}>{I18n.t('titleHeader')}</Text>
            <Pressable style={styles.button}>
              <Image source={Btn_Save} />
            </Pressable>
          </View>
          <View style={styles.thumbnailMovie}>
            <Image
              source={{
                uri: `https://image.tmdb.org/t/p/w500${setMovie.movie.poster_path}`,
              }}
              style={styles.imageMovie}
            />
          </View>
          <Text style={styles.name}>{setMovie.movie.original_title}</Text>
          <View style={styles.row}>
            <Text style={styles.director}>
              {I18n.t('director')} :{' '}
              {setMovie.movie?.production_companies?.map((item, index) => {
                if (index + 1 <= 1) return item.name;
              })}{' '}
              |{' '}
            </Text>
            <View style={styles.row}>
              <Image source={Star} style={{marginTop: -3}} />
              <Text style={styles.rate}>{setMovie.movie.vote_average}</Text>
            </View>
          </View>
          <Gap height={20} />
          <View style={styles.row}>
            {setMovie.movie?.genres?.map((item, index) => (
              <View key={item.id.toString()} style={styles.tag}>
                <Text style={styles.textTag}>{item.name}</Text>
              </View>
            ))}
          </View>
          <Gap height={30} />
          <Text style={styles.name}>{I18n.t('description')}</Text>
          <Text
            style={styles.desc}
            numberOfLines={numberOfLines}
            ellipsizeMode="tail">
            {setMovie.movie.overview}
          </Text>
          <Text
            onPress={() => {
              if (numberOfLines === 2) {
                setNumberOfLines(0);
              } else {
                setNumberOfLines(2);
              }
            }}
            style={styles.link}>
            {numberOfLines === 2
              ? I18n.t('textActionReadMore')
              : I18n.t('textActionShowLess')}
          </Text>
          {/* <Gap height={42} />
          <Button title="Watch Movie" /> */}
          <Gap height={30} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default DetailMovie;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#1B1E25',
  },
  container: {
    marginHorizontal: 30,
  },
  rowHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 20,
  },
  button: {
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleHeader: {
    fontSize: 18,
    fontFamily: 'Poppins-Medium',
    color: 'white',
  },
  thumbnailMovie: {
    width: '100%',
    height: 370,
    position: 'relative',
    overflow: 'hidden',
    borderRadius: 20,
    marginBottom: 20,
  },
  imageMovie: {
    width: '100%',
    height: 370,
  },
  name: {
    fontSize: 20,
    fontFamily: 'Poppins-Medium',
    color: 'white',
    marginBottom: 10,
  },
  director: {
    fontSize: 14,
    fontFamily: 'Poppins-Light',
    color: '#BABFC9',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rate: {
    fontSize: 14,
    fontFamily: 'Poppins-Light',
    color: '#BABFC9',
    marginLeft: 5,
  },
  tag: {
    paddingVertical: 4,
    paddingHorizontal: 12,
    borderRadius: 6,
    backgroundColor: '#252932',
    marginRight: 10,
  },
  textTag: {
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    color: '#B2B5BB',
  },
  desc: {
    fontSize: 14,
    fontFamily: 'Poppins-Light',
    color: '#696D74',
  },
  link: {
    fontSize: 14,
    fontFamily: 'Poppins-Light',
    color: '#546EE5',
  },
});
