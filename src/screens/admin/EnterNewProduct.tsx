import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Wrapper from '../../components/Wrapper';
import TopBar from '../../components/TopBar';
import { Light } from '../../utils/colors';
import { useFocusEffect } from '@react-navigation/native';
import { useDispatch } from 'react-redux';

const EnterNewProduct = () => {
  const dispatch = useDispatch()

  interface Data {
    id: number;
    name: string;
    catagory: string;
    price: number;
    size: string;
    packPrice: number;
    companyName: string;
    imageLink: string;
  }
    const [data, setData] = useState<Data>({
        id: 0,
        name: '',
        catagory: '',
        price: 0,
        size: '',
        packPrice: 0,
        imageLink: '',
        companyName: '',
    })

    const handleChange = (key: string, value: any) => {
      setData(prev=> ({...prev, [key]: value}))
    }
  return (
    <Wrapper backgroundColor={Light.background1}>
      <TopBar />      

    </Wrapper>
  )
}

export default EnterNewProduct

const styles = StyleSheet.create({})