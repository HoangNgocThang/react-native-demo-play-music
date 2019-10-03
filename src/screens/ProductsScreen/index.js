import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import styles from './ProductsScreen.style';

const ProductsScreen = props => {
  const _onClick = () => {
    props.navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text>ProductsScreens</Text>
      <TouchableOpacity onPress={_onClick}>
        <Text>goBack</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProductsScreen;
