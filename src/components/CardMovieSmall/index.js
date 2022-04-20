import {StyleSheet, Text, View, Image, Pressable} from 'react-native';
import React from 'react';
import {DummyImage, Star} from '../../assets/icons';

const CardMovieSmall = ({onPress, name, img, category, rate}) => {
  return (
    <Pressable onPress={onPress}>
      <View style={styles.container}>
        <Image style={styles.imageThumbnail} source={img} />
        <View style={{flex: 1}}>
          <Text style={styles.movieName}>{name}</Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Image source={Star} />
            <Text style={styles.rate}>{rate}</Text>
          </View>
        </View>
      </View>
    </Pressable>
  );
};

export default CardMovieSmall;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
  },
  imageThumbnail: {
    width: 76,
    height: 76,
    borderRadius: 10,
    resizeMode: 'cover',
    marginRight: 12,
  },
  category: {
    fontSize: 12,
    fontFamily: 'Poppins-Regular',
    color: '#696D74',
  },
  movieName: {
    fontSize: 16,
    fontFamily: 'Poppins-Medium',
    color: 'white',
  },
  rate: {
    fontSize: 14,
    fontFamily: 'Poppins-Light',
    color: '#BABFC9',
    marginTop: 4,
    marginLeft: 5,
  },
});
