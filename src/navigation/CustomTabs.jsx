import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, { useEffect } from 'react';
import { Light } from '../utils/colors';
import { ItemLength, Margin } from '../utils/dimensions';
import { FontSize } from '../utils/Text';
import Feather from 'react-native-vector-icons/Feather'
import Animated, {useSharedValue, withSpring} from 'react-native-reanimated';

const CustomTabs = ({state, descriptors, navigation}) => {

  const featherIcons = {
    Home: 'home',
    Products: 'shopping-bag',
    Profile: 'user',
    Choose: 'file-plus'
  }

  return (
    <View style={styles.mainView}>
      {state.routes.map((route, index) => {
        const label = route.name
        const isFocused = state.index === index;
        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true
          })
          if(!isFocused && !event.defaultPrevent) {
            navigation.navigate(route.name, route.params)
          }
          // bottom.value = withSpring(bottom.value - 3);
        }
        
        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key
          })
        }
        const bottom = useSharedValue(0)
        const color = useSharedValue('grey')

        useEffect(()=>{
          bottom.value = withSpring(isFocused? -3 : 0, {duration: 1000})
          color.value = isFocused ? Light.success : 'grey'
        }, [isFocused])
        return (
          <TouchableOpacity key={route.key} onPress={onPress} onLongPress={onLongPress} style={styles.button}>
            <View style={{flexDirection: 'column', alignItems: 'center'}}>
                
              {isFocused &&  (<Feather name={featherIcons[route.name]} size={20} color={Light.success} />)}
              
              <Animated.Text style={{color, bottom, fontSize: FontSize.Small, fontWeight: 500}}> {label} </Animated.Text>
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default CustomTabs;

const styles = StyleSheet.create({
  mainView: {
    flexDirection: 'row',
    backgroundColor: Light.background1,
    borderTopWidth: 1,
    borderColor: Light.border1,
    justifyContent: 'space-between', 
    height: ItemLength(0.7)  
  },
  button: {
    padding: Margin(0.4),
    paddingVertical: Margin(0.2),
    justifyContent: 'center'
  },
  textFocused: {
    color: Light.success,
    fontSize: FontSize.Small,
    fontWeight: 500,
  },
  text: {
    color: 'grey',
    fontSize: FontSize.Small,
    fontWeight: 500
  }
});
