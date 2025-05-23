import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeScreen from '../screens/HomeScreen'
import EnterNewProduct from '../screens/admin/EnterNewProduct'
import CustomTabs from './CustomTabs'
import UserProfile from '../screens/UserProfile'
import ChooseItems from '../screens/admin/ChooseItems'

const BottomTabs = () => {
    const Tab = createBottomTabNavigator()
  return (
    <Tab.Navigator screenOptions={{headerShown: false}} tabBar={props => <CustomTabs {...props} />}>
        <Tab.Screen name='Home' component={HomeScreen} />
        <Tab.Screen name='Products' component={EnterNewProduct} />
        <Tab.Screen name="Profile" component={UserProfile} />
        <Tab.Screen name="Choose" component={ChooseItems} />
    </Tab.Navigator>
  )
}

export default BottomTabs

// const styles = StyleSheet.create({})