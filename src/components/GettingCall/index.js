import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {DummyImage} from '../../assets/icons';

const GettingCall = ({hangup, join}) => {
  return (
    <View style={styles.container}>
      <Image source={require('../../assets/bg.jpg')} style={styles.image} />
      <View style={styles.row}>
        <Pressable
          onPress={hangup}
          style={[styles.btn, {backgroundColor: 'green'}]}>
          <Text style={styles.text}>Angkat</Text>
        </Pressable>
        <Pressable
          onPress={join}
          style={[styles.btn, {backgroundColor: 'red'}]}>
          <Text style={styles.text}>Tolak</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default GettingCall;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  image: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  btn: {
    padding: 10,
    marginHorizontal: 10,
    borderRadius: 20,
  },
  text: {
    fontSize: 16,
    color: 'white',
    fontWeight: '500',
  },
});
