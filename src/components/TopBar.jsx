import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {useRoute} from '@react-navigation/native';
import {FontSize} from '../utils/Text';
import {Light} from '../utils/colors';
import {Margin} from '../utils/dimensions';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';

import OptionModal from './OptionModal';
import {useDispatch, useSelector} from 'react-redux';

const TopBar = ({name}) => {
  const dispatch = useDispatch();
  const route = useRoute();
  const [showOptions, setShowOptions] = useState(false);

  const showName = {
    Home: 'Smart Kiryana',
    Products: 'Enter New Item',
    Profile: 'Profile',
    Choose: 'Choose'
  };

  const [modalDim, setModalDim] = useState({
    modX: 0,
    modY: 0,
  });
  // const showOptions = useSelector(state => state.main.showOptions)
  const yPos = useRef();
  useEffect(() => {
    // console.error(modalDim)
  }, [yPos]);

  return (
    <View style={styles.mainView}>
      <Text style={styles.heading}>{name ? name : showName[route.name]}</Text>
      <TouchableOpacity
        onPress={() => {
          yPos.current?.measureInWindow((x, y, width, hieght) => {
            setModalDim({modX: x, modY: y});
          });
          setShowOptions(true);
        }}>
        <View ref={yPos}>
          <Feather name="more-vertical" size={25} color={Light.info} />
        </View>
      </TouchableOpacity>
      <OptionModal dim={modalDim} show={showOptions} setShow={setShowOptions} />
    </View>
  );
};

export default TopBar;

const styles = StyleSheet.create({
  mainView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: Margin(0.5),
    paddingHorizontal: Margin(0.2),
    alignItems: 'center',
  },
  heading: {
    paddingLeft: Margin(0.3),
    fontSize: FontSize.Heading,
    color: Light.success,
    fontWeight: '700',
  },
});
