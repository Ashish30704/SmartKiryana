import {
  Modal,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
  Animated,
} from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import {ItemLength} from '../utils/dimensions';
import {Light} from '../utils/colors';
import {useDispatch} from 'react-redux';
import { useNavigation } from '@react-navigation/native';

const OptionModal = ({show, setShow, dim}) => {
  const navigation = useNavigation()
  const dispatch = useDispatch();

  const [internalShow, setInternalShow] = useState(show)

  const options = {
    Settings: 'Products',
    Address: 'Products',
    Home: 'Home',
  };

  const slideAnim = useRef(new Animated.Value(dim.modY - 20)).current
  useEffect(()=> {
    if(show) {
        setInternalShow(true)
        slideAnim.setValue(dim.modY - 20);
        Animated.timing(slideAnim, {
            toValue: dim.modY + 25,
            duration: 100, 
            useNativeDriver: false
        }).start();
    } else {
        Animated.timing(slideAnim, {
            toValue: dim.modY - 20,
            duration: 100,
            useNativeDriver: false
        }).start(()=> {
            setInternalShow(false)
        })
    }
  }, [show])

  const handlePress = (key) => {
    // dispatch(toogleShowOptions(false))
    setShow(false)
    // setInternalShow(false)
    navigation.navigate(options[key])
  }

  return (
    <Modal
      onRequestClose={() => setShow(false)}
      transparent={true}
      visible={internalShow}
    >
      <TouchableWithoutFeedback onPress={() => setShow(false)}>
        <View style={{flex:1}}>
        <Animated.View style={[styles.modalView, {position: 'absolute', top: slideAnim, left: dim.modX - ItemLength(1.8)}]}>
          {Object.keys(options).map((key, index) => {
            return (
              <TouchableOpacity onPress={()=>handlePress(key)} key={index} style={styles.option}>
                <Text>{key}</Text>
              </TouchableOpacity>
            );
          })}
        </Animated.View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

export default OptionModal;

const styles = StyleSheet.create({
  modalView: {
    // position: 'absolute',
    width: ItemLength(2),
    elevation: 10,
    backgroundColor: Light.background1,
    borderRadius: 15,
  },
  option: {
    height: ItemLength(0.7),
    // alignItems: 'center'
    justifyContent: 'center',
    paddingLeft: 10,
  },
});
