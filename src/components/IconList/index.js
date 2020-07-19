import React from 'react';
import { View } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

// import { Container } from './styles';

const IconList = ({data}) => {
  return <View> <AntDesign name={data} size={50} color='#fff' /></View>;
}

export default IconList;