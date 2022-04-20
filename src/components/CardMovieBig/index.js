import {StyleSheet, Text, View, Image, Pressable} from 'react-native';
import React from 'react';
import {DummyImage, Star} from '../../assets/icons';

const CardMovieBig = ({onPress, name, img, rate}) => {
  return (
    <Pressable onPress={onPress}>
      <View style={styles.containerMovie}>
        <Image style={styles.imageThumbnail} source={img} />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 10,
          }}>
          <Text style={styles.movieName} numberOfLines={2}>
            {name}
          </Text>
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

export default CardMovieBig;

const styles = StyleSheet.create({
  containerMovie: {
    width: 190,
    marginRight: 30,
  },
  imageThumbnail: {
    width: 190,
    height: 250,
    borderRadius: 12,
  },
  movieName: {
    fontSize: 16,
    color: 'white',
    fontFamily: 'Poppins-Medium',
    width: 150,
  },
  rate: {
    fontSize: 14,
    fontFamily: 'Poppins-Light',
    color: '#BABFC9',
    marginLeft: 5,
    marginTop: 4,
  },
});
