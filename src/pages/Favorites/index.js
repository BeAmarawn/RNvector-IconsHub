import React, { useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

// import { Container } from './styles';

const Favorites = () => {
  let asynqui;
  async function gett() {
    const data = await AsyncStorage.getItem('Favorites_icons');
    asynqui = data;
    console.log(data);
  }
  useEffect(() => {
    gett();
  }, []);
  return (
    <View>
      <TouchableOpacity
        onPress={() => {
          gett();
        }}
      >
        <Text>Hello Favs</Text>
      </TouchableOpacity>

      <Text>{asynqui}</Text>
    </View>
  );
};

export default Favorites;
