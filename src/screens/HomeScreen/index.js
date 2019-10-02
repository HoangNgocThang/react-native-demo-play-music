import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import styles from './HomeScreen.style';

const HomeScreen = props => {
  const _onClick = () => {
    props.navigation.navigate('ProfileScreen');
  };

  return (
    <View style={styles.container}>
      <Text>HomeScreen</Text>
      <TouchableOpacity onPress={_onClick}>
        <Text>click</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;
