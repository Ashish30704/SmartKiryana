import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Wrapper from '../components/Wrapper'
import { Light } from '../utils/colors'
import TopBar from '../components/TopBar'

const ItemDetails = ({route}) => {
    const {name} = route.params
  return (
    <Wrapper backgroundColor={Light.background1}>
        <TopBar name={name} />
    </Wrapper>
  )
}

export default ItemDetails

const styles = StyleSheet.create({})