/* eslint-disable no-nested-ternary */
import React, { useEffect, useState } from 'react';
import { ScrollView, Alert } from 'react-native';

import Snackbar from 'react-native-snackbar-component';

import { useFocusEffect } from '@react-navigation/native';

import AsyncStorage from '@react-native-community/async-storage';

import {
  Container,
  LabelFont,
  ListsContainer,
  FlatListicons,
  ClearButton,
  LabelClear,
} from './styles';

import IconList from '../../components/IconList';

const Favorites = () => {
  const [data, setData] = useState([]);
  const [isVisible, setIsVisible] = useState(false);
  const [stateText, setStateText] = useState('');

  const gett = async () => {
    const value = await AsyncStorage.getItem('Favorites_icons');
    setData(JSON.parse(value));
  };

  const onRefresh = () => {
    gett();
  };

  const clearAll = async () => {
    try {
      await AsyncStorage.clear();
    } catch (e) {
      setStateText('Something wrong on Clear!');
    }
    setStateText('Nice Clear!');
    setIsVisible(!isVisible);
    setTimeout(() => {
      setIsVisible(false);
    }, 1000);
  };

  useEffect(() => {
    gett();
  }, []);
  useFocusEffect(onRefresh);
  return (
    <Container>
      <ScrollView>
        <ClearButton onPress={() => clearAll()}>
          <LabelClear>Clear</LabelClear>
        </ClearButton>
        <ListsContainer>
          {data != null ? (
            data.findIndex((e) => e.place === 'AntDesign') != -1 ? (
              <>
                <LabelFont>AntDesign</LabelFont>
                <FlatListicons
                  data={data.filter((item) => {
                    return item.place == 'AntDesign';
                  })}
                  keyExtractor={(item, index) => String(index)}
                  renderItem={({ item }) => (
                    <IconList nameProp={item.name} font={item.place} />
                  )}
                  horizontal
                />
              </>
            ) : null
          ) : null}
          {data != null ? (
            data.findIndex((e) => e.place === 'Entypo') !== -1 ? (
              <>
                <LabelFont>Entypo</LabelFont>
                <FlatListicons
                  data={data.filter((item) => {
                    return item.place == 'Entypo';
                  })}
                  keyExtractor={(item, index) => String(index)}
                  renderItem={({ item }) => (
                    <IconList nameProp={item.name} font={item.place} />
                  )}
                  horizontal
                />
              </>
            ) : null
          ) : null}
          {data != null ? (
            data.findIndex((e) => e.place === 'EvilIcons') !== -1 ? (
              <>
                <LabelFont>EvilIcons</LabelFont>
                <FlatListicons
                  data={data.filter((item) => {
                    return item.place == 'EvilIcons';
                  })}
                  keyExtractor={(item, index) => String(index)}
                  renderItem={({ item }) => (
                    <IconList nameProp={item.name} font={item.place} />
                  )}
                  horizontal
                />
              </>
            ) : null
          ) : null}
          {data != null ? (
            data.findIndex((e) => e.place === 'Feather') !== -1 ? (
              <>
                <LabelFont>Feather</LabelFont>
                <FlatListicons
                  data={data.filter((item) => {
                    return item.place == 'Feather';
                  })}
                  keyExtractor={(item, index) => String(index)}
                  renderItem={({ item }) => (
                    <IconList nameProp={item.name} font={item.place} />
                  )}
                  horizontal
                />
              </>
            ) : null
          ) : null}
          {data != null ? (
            data.findIndex((e) => e.place === 'FontAwesome') !== -1 ? (
              <>
                <LabelFont>FontAwesome</LabelFont>
                <FlatListicons
                  data={data.filter((item) => {
                    return item.place == 'FontAwesome';
                  })}
                  keyExtractor={(item, index) => String(index)}
                  renderItem={({ item }) => (
                    <IconList nameProp={item.name} font={item.place} />
                  )}
                  horizontal
                />
              </>
            ) : null
          ) : null}
          {data != null ? (
            data.findIndex((e) => e.place === 'Fontisto') !== -1 ? (
              <>
                <LabelFont>Fontisto</LabelFont>
                <FlatListicons
                  data={data.filter((item) => {
                    return item.place == 'Fontisto';
                  })}
                  keyExtractor={(item, index) => String(index)}
                  renderItem={({ item }) => (
                    <IconList nameProp={item.name} font={item.place} />
                  )}
                  horizontal
                />
              </>
            ) : null
          ) : null}
          {data != null ? (
            data.findIndex((e) => e.place === 'Foundation') !== -1 ? (
              <>
                <LabelFont>Foundation</LabelFont>
                <FlatListicons
                  data={data.filter((item) => {
                    return item.place == 'Foundation';
                  })}
                  keyExtractor={(item, index) => String(index)}
                  renderItem={({ item }) => (
                    <IconList nameProp={item.name} font={item.place} />
                  )}
                  horizontal
                />
              </>
            ) : null
          ) : null}
          {data != null ? (
            data.findIndex((e) => e.place === 'Ionicons') !== -1 ? (
              <>
                <LabelFont>Ionicons</LabelFont>
                <FlatListicons
                  data={data.filter((item) => {
                    return item.place == 'Ionicons';
                  })}
                  keyExtractor={(item, index) => String(index)}
                  renderItem={({ item }) => (
                    <IconList nameProp={item.name} font={item.place} />
                  )}
                  horizontal
                />
              </>
            ) : null
          ) : null}
          {data != null ? (
            data.findIndex((e) => e.place === 'MaterialCommunityIcons') !==
            -1 ? (
              <>
                <LabelFont>MaterialCommunityIcons</LabelFont>
                <FlatListicons
                  data={data.filter((item) => {
                    return item.place == 'MaterialCommunityIcons';
                  })}
                  keyExtractor={(item, index) => String(index)}
                  renderItem={({ item }) => (
                    <IconList nameProp={item.name} font={item.place} />
                  )}
                  horizontal
                />
              </>
            ) : null
          ) : null}
          {data != null ? (
            data.findIndex((e) => e.place === 'MaterialIcons') !== -1 ? (
              <>
                <LabelFont>MaterialIcons</LabelFont>
                <FlatListicons
                  data={data.filter((item) => {
                    return item.place == 'MaterialIcons';
                  })}
                  keyExtractor={(item, index) => String(index)}
                  renderItem={({ item }) => (
                    <IconList nameProp={item.name} font={item.place} />
                  )}
                  horizontal
                />
              </>
            ) : null
          ) : null}
          {data != null ? (
            data.findIndex((e) => e.place === 'Octicons') !== -1 ? (
              <>
                <LabelFont>Octicons</LabelFont>
                <FlatListicons
                  data={data.filter((item) => {
                    return item.place == 'Octicons';
                  })}
                  keyExtractor={(item, index) => String(index)}
                  renderItem={({ item }) => (
                    <IconList nameProp={item.name} font={item.place} />
                  )}
                  horizontal
                />
              </>
            ) : null
          ) : null}
          {data != null ? (
            data.findIndex((e) => e.place === 'SimpleLineIcons') !== -1 ? (
              <>
                <LabelFont>SimpleLineIcons</LabelFont>
                <FlatListicons
                  data={data.filter((item) => {
                    return item.place == 'SimpleLineIcons';
                  })}
                  keyExtractor={(item, index) => String(index)}
                  renderItem={({ item }) => (
                    <IconList nameProp={item.name} font={item.place} />
                  )}
                  horizontal
                />
              </>
            ) : null
          ) : null}
          {data != null ? (
            data.findIndex((e) => e.place === 'Zocial') !== -1 ? (
              <>
                <LabelFont>Zocial</LabelFont>
                <FlatListicons
                  data={data.filter((item) => {
                    return item.place == 'Zocial';
                  })}
                  keyExtractor={(item, index) => String(index)}
                  renderItem={({ item }) => (
                    <IconList nameProp={item.name} font={item.place} />
                  )}
                  horizontal
                />
              </>
            ) : null
          ) : null}
        </ListsContainer>
      </ScrollView>
      <Snackbar
        visible={isVisible}
        textMessage={stateText}
        autoHidingTime={1000}
      />
    </Container>
  );
};

export default Favorites;
