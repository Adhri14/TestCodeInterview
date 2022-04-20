import {StyleSheet, Text, View, Pressable} from 'react-native';
import React from 'react';

const Button = ({title, onPress}) => {
  return (
    <Pressable style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    paddingVertical: 14,
    width: '100%',
    borderRadius: 10,
    backgroundColor: '#546EE5',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontFamily: 'Poppins-Medium',
    color: 'white',
    fontSize: 18,
  },
});
