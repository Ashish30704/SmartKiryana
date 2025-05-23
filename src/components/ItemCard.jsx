import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Light} from '../utils/colors';
import {ItemLength, Margin} from '../utils/dimensions';
import {MyData} from '../utils/data';
import {FontSize} from '../utils/Text';
import { useNavigation } from '@react-navigation/native';

const ItemCard = ({id, name, imageLink, mPrice, pPrice}) => {
  const navigation = useNavigation()
  function onPress() {
    navigation.navigate('Details', {name: name})
  }
  return (
    <TouchableOpacity style={styles.mainView} onPress={onPress}>
      <Image
        source={{uri: imageLink}}
        style={{
          height: '50%',
          width: '100%',
          alignSelf: 'center',
          borderRadius: 10,
        }}
      />
      <Text style={{fontSize: FontSize.Small, alignSelf: 'center'}}>{name}</Text>
      <View style={{justifyContent: 'space-between', flexDirection: 'row'}}>
        <Text style={styles.priceText}>Market:</Text>
        <Text style={styles.priceText}>{mPrice}</Text>
      </View>
      <View style={{justifyContent: 'space-between', flexDirection: 'row'}}>
        <Text style={styles.priceText}>Print</Text>
        <Text style={styles.priceText}>{pPrice}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ItemCard;

const styles = StyleSheet.create({
  mainView: {
    backgroundColor: Light.background2,
    elevation: 10,
    borderRadius: 20,
    height: ItemLength(1.8),
    width: ItemLength(1.4),
    padding: Margin(0.2),
    borderWidth: 0.5,
    borderColor: Light.border2,
  },
  priceText: {
    fontSize: FontSize.Small - 2,
  },
});
