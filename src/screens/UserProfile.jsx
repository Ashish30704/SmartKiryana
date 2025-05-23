import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Wrapper from '../components/Wrapper'
import TopBar from '../components/TopBar'
import { Light } from '../utils/colors'

const UserProfile = () => {
  return (
    <Wrapper backgroundColor={Light.background1}>
      <TopBar />
    </Wrapper>
  )
}

export default UserProfile

const styles = StyleSheet.create({})