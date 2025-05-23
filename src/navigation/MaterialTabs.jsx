import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import HomeScreen from '../screens/HomeScreen';
import EnterNewProduct from '../screens/admin/EnterNewProduct';
import UserProfile from '../screens/UserProfile';
import ChooseItems from '../screens/admin/ChooseItems';
import CustomTabs from './CustomTabs';

const MaterialTabs = () => {
  const Tab = createMaterialTopTabNavigator();

  return (
    <Tab.Navigator screenOptions={{}} tabBarPosition='bottom' tabBar={props => <CustomTabs {...props} />}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Products" component={EnterNewProduct} />
      <Tab.Screen name="Profile" component={UserProfile} />
      <Tab.Screen name="Choose" component={ChooseItems} />
    </Tab.Navigator>
  );
};

export default MaterialTabs;

const styles = StyleSheet.create({});
