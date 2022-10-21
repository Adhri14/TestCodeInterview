import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import GettingCall from '../../components/GettingCall';

const VideoCall = () => {
  return (
    <View style={styles.page}>
      <GettingCall />
    </View>
  );
};

export default VideoCall;

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
});
