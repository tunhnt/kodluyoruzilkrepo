import React from 'react';
// expoda calismadi import LottieView from 'lottie-react-native';
import LottieView from 'react-native-web-lottie';

function Error() {
  return <LottieView source={require('../assets/error.json')} autoPlay loop />;
}

export default Error;
