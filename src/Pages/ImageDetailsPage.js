import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import colors from '../assets/colors/colors';

const ImageDetailsPage = () => {
  return (
    <View style={styles.container}>
      <Text>ImageDetailsPage</Text>
    </View>
  );
};

export default ImageDetailsPage;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.backgroundColor,
    height: '100%',
  },
});
