import {StatusBar, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Margin, ScreenHeight} from '../utils/dimensions';

const Wrapper = ({children, backgroundColor}) => {
  return (
    <View style={{flex: 1, backgroundColor: backgroundColor}}>
      <StatusBar backgroundColor={'transparent'} translucent={true} />
        <View style={{flex: 1, marginTop: ScreenHeight*0.05}}>
          {children}
        </View>
    </View>
  );
};

export default Wrapper;

const styles = StyleSheet.create({});
