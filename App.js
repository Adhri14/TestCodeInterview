import {NavigationContainer} from '@react-navigation/native';
import React, {useEffect, useRef, useState} from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {MediaStream, RTCPeerConnection} from 'react-native-webrtc';
import {Provider, useSelector} from 'react-redux';
import GettingCall from './src/components/GettingCall';
import Video from './src/components/Video';
import VideoCall from './src/pages/VideoCall';
import store from './src/redux/store';
import Router from './src/router';
import I18n from './src/utils/I18n';
import VideoUtils from './src/utils/VideoUtils';
import firestore from '@react-native-firebase/firestore';

const MainApp = () => {
  return (
    <NavigationContainer>
      <Router />
    </NavigationContainer>
  );
};

const configure = {iceServers: [{url: 'stun:stun.1.google.com:19302'}]};

const App = () => {
  const [localStream, setLocalStream] = useState(null);
  const [remoteStream, setRemoteStream] = useState(null);
  const [gettingCall, setGettingCall] = useState(false);
  const pc = useRef(new RTCPeerConnection(configure));
  const connecting = useRef(false);

  const setupWebRTC = async () => {
    const stream = await VideoUtils.getStream();

    if (stream) {
      setLocalStream(stream);
      pc.current?.addStream(stream);
    }

    // pc.current?.onAddStream = (event) => {
    //   setRemoteStream(event.);
    // }
  };
  const create = async () => {
    console.log('calling');
    connecting.current = true;

    await setupWebRTC();

    const cRef = firestore().collection('meet').doc('chatId');

    collectIceCandidates(cRef, 'caller', 'callee');
  };

  const collectIceCandidates = async (cRef, localName, remoteName) => {
    const candidateCollect = cRef?.collection(localName);

    if (pc.current) {
    }
  };
  const join = async () => {};
  const hangup = async () => {};

  if (gettingCall) {
    return <GettingCall hangup={hangup} join={join} />;
  }

  if (localStream) {
    return (
      <Video
        hangup={hangup}
        localStream={localStream}
        remoteStream={remoteStream}
      />
    );
  }

  return (
    // <Provider store={store}>
    //   <MainApp />
    // </Provider>
    <View style={styles.page}>
      <Pressable style={styles.btn}>
        <Text style={styles.text}>Video</Text>
      </Pressable>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn: {
    padding: 10,
    borderRadius: 20,
    backgroundColor: 'gray',
  },
  text: {
    fontSize: 16,
    fontWeight: '500',
    color: 'white',
  },
});
