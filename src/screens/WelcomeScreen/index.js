import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import styles from './WelcomeScreen.style';

const WelcomeScreen = props => {
  return (
    <View style={styles.container}>
      <Text>WelcomeScreen</Text>
      <TouchableOpacity
        onPress={() => {
          props.navigation.navigate('HomeScreen');
        }}>
        <Text>goHome</Text>
      </TouchableOpacity>
    </View>
  );
};

export default WelcomeScreen;
