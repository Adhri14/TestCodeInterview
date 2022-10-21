import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {MediaStream, RTCView} from 'react-native-webrtc';

const ButtonContainer = ({hangup}) => {
  return (
    <View style={styles.bgContainer}>
      <TouchableOpacity style={styles.btn} onPress={hangup}>
        <Text style={[styles.text, {backgroundColor: 'red'}]}>Akhiri</Text>
      </TouchableOpacity>
    </View>
  );
};

const Video = ({
  hangup,
  localStream = MediaStream,
  remoteStream = MediaStream,
}) => {
  if (localStream && !remoteStream) {
    return (
      <View style={styles.bgContainer}>
        <RTCView
          streamURL={localStream.toURL()}
          objectFit="cover"
          style={styles.video}
        />
        <ButtonContainer hangup={hangup} />
      </View>
    );
  }

  if (localStream && remoteStream) {
    return (
      <View style={styles.bgContainer}>
        <RTCView
          streamURL={remoteStream.toURL()}
          objectFit="cover"
          style={styles.video}
        />
        <RTCView
          streamURL={localStream.toURL()}
          objectFit="cover"
          style={styles.videoLocal}
        />
        <ButtonContainer hangup={hangup} />
      </View>
    );
  }
  return <ButtonContainer hangup={hangup} />;
};

export default Video;

const styles = StyleSheet.create({
  bgContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
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
  video: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  videoLocal: {
    width: 100,
    height: 150,
    position: 'absolute',
    top: 0,
    left: 20,
  },
});
