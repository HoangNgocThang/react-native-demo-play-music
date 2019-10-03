import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import styles from './ProfileScreen.style';

const ProfileScreen = props => {
  const onClick = () => {
    props.navigation.navigate('DrawerStack');
  };

  return (
    <View style={styles.container}>
      <Text>ProfileScreen</Text>
      <TouchableOpacity onPress={onClick}>
        <Text>Click</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProfileScreen;
