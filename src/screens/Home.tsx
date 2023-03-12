import {getCatsFetch} from '@store/reducers/commonSlice';
import React, {useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import {useDispatch, useSelector} from 'react-redux';

const Home = () => {
  const dispatch = useDispatch();
  const data = useSelector((state: any) => state);
  console.log('data', data);
  useEffect(() => {
    const setTimeSplash = setTimeout(() => {
      SplashScreen.hide();
    }, 2000);
    return () => {
      clearTimeout(setTimeSplash);
    };
  }, []);

  useEffect(() => {
    dispatch(getCatsFetch);
  }, [dispatch]);

  return (
    <View style={styles.container}>
      <Text>Welcome to my app</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Home;
