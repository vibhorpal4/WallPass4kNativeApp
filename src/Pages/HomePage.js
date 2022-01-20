import React, {useEffect} from 'react';
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import colors from '../assets/colors/colors';
import AppBar from '../Components/AppBar';
import ImageCard from '../Components/ImageCard';
import {useGetImagesQuery} from '../redux/services/imagesService';
import AsyncStorage from '@react-native-async-storage/async-storage';

const HomePage = ({navigation}) => {
  const images = useGetImagesQuery();

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <AppBar />
      </SafeAreaView>
      <View style={styles.imageListWrapper}>
        {images.isLoading && (
          <ActivityIndicator size="large" color={colors.textDark} />
        )}
        {images.data && (
          <FlatList
            showsVerticalScrollIndicator={false}
            data={images.data}
            renderItem={({item}) => (
              <ImageCard key={item._id} image={item.image} owner={item.owner} />
            )}
          />
        )}
      </View>
    </View>
  );
};

export default HomePage;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.backgroundColor,
    height: '100%',
  },
  imageHeading: {
    fontFamily: 'Pacifico-Regular',
    fontWeight: 'bold',
  },
  imageListWrapper: {
    display: 'flex',
    justifyContent: 'center',
  },
});
