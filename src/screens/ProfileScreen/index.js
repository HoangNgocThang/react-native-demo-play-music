import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import styles from './ProfileScreen.style';

const ProfileScreen = props => {
  const onClick = () => {
    props.navigation.goBack();
  };

  const onClick2 = () => {
    props.navigation.navigate('ProductsScreen');
  };

  return (
    <View style={styles.container}>
      <Text>ProfileScreen</Text>
      <TouchableOpacity onPress={onClick}>
        <Text>Click</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={onClick2}>
        <Text>Click2</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProfileScreen;
