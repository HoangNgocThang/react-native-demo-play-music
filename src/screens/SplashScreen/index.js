import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import styles from './SplashScreen.style';

const SplashScreen = props => {
  return (
    <View style={styles.container}>
      <Text>SplashScreen</Text>
      <TouchableOpacity
        onPress={() => {
          props.navigation.navigate('WelcomeScreen');
        }}>
        <Text>Skip SplashScreen</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SplashScreen;
