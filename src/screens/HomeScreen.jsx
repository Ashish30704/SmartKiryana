import {StyleSheet, Text, View, ScrollView, FlatList} from 'react-native';
import React from 'react';
import {Margin} from '../utils/dimensions';
import {Light} from '../utils/colors';
import ItemCard from '../components/ItemCard';
import Wrapper from '../components/Wrapper';
import {Catagories} from '../utils/data';
import TopBar from '../components/TopBar';
import Feather from 'react-native-vector-icons/Feather';
import {useDispatch, useSelector} from 'react-redux';
import { FontSize } from '../utils/Text';

const HomeScreen = () => {
  const dispatch = useDispatch()
  
  return (
    <Wrapper backgroundColor={Light.background1}>
      <TopBar />

      <View style={styles.mainView}>

        
      </View>
    </Wrapper>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  mainView: {
    paddingTop: Margin(0.3)
  },
  
});
