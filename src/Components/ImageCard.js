import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import colors from '../assets/colors/colors';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useGetUsersQuery} from '../redux/services/usersService';

const ImageCard = ({image, owner, navigation}) => {
  const {data} = useGetUsersQuery();

  const user = data?.find(d => d._id === owner);

  return (
    <View style={styles.container}>
      {data && (
        <>
          <View style={styles.userWrapper}>
            <TouchableOpacity>
              <Image
                style={styles.userProfile}
                source={{uri: user.profile_pic}}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.userName}>{user.username}</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={styles.imageWrapper}>
            <Image style={styles.image} source={{uri: image}} />
          </TouchableOpacity>

          <View style={styles.bottom}>
            <View style={styles.linkContainer}>
              <TouchableOpacity>
                <AntDesign name="heart" size={30} style={styles.likeButton} />
              </TouchableOpacity>
              <Text style={styles.likeText}>1k likes</Text>
            </View>
            <TouchableOpacity>
              <AntDesign name="download" size={30} />
            </TouchableOpacity>
          </View>
        </>
      )}
    </View>
  );
};

export default ImageCard;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    // height: 500,
    marginVertical: 30,
  },

  userWrapper: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 30,
  },
  userProfile: {
    height: 40,
    width: 40,
    borderRadius: 50,
    marginRight: 5,
  },
  userName: {
    fontFamily: 'Poppins-Regular',
    color: colors.textDark,
    marginLeft: 5,
    fontFamily: 'Poppins-Bold',
  },
  bottom: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 50,
  },
  linkContainer: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  imageWrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    marginTop: 20,
    marginBottom: 10,
  },
  image: {
    width: '100%',
    height: 271,
  },
  likeText: {
    fontFamily: 'Poppins-Regular',
    color: colors.textLight,
  },
});
