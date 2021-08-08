import React from "react";
// expoda calismadi import LottieView from 'lottie-react-native';
import LottieView from 'react-native-web-lottie';

function Loading() {
  return <LottieView source={require('../assets/loading.json')} autoPlay loop />
}

export default Loading;