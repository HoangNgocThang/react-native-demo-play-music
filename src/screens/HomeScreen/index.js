import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import styles from './HomeScreen.style';

const HomeScreen = props => {
  const _onClick = () => {
    props.navigation.navigate('AppStack');
  };

  return (
    <View style={styles.container}>
      <Text>HomeScreen</Text>

      <TouchableOpacity onPress={_onClick}>
        <Text>go to Profile</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          props.navigation.openDrawer();
        }}>
        <Text>Drawer</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;
