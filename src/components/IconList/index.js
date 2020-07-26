import React, { useRef, useState, useEffect } from 'react';
import { Alert } from 'react-native';

import { useFocusEffect } from '@react-navigation/native';

import Clipboard from '@react-native-community/clipboard';
import * as Animatable from 'react-native-animatable';
import AsyncStorage from '@react-native-community/async-storage';

import AntDesign from 'react-native-vector-icons/AntDesign';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Foundation from 'react-native-vector-icons/Foundation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Octicons from 'react-native-vector-icons/Octicons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Zocial from 'react-native-vector-icons/Zocial';

import {
  CardContainer,
  IconContainer,
  ActionsContainer,
  IndividualContainer,
  LabelContainer,
  LabelName,
  ButtonIcon,
} from './styles';

const AnimatedButton = Animatable.createAnimatableComponent(ButtonIcon);

export default function IconList({ nameProp, font }) {
  const AnimationRefLike = useRef(null);
  const AnimationRefClip = useRef(null);
  const [favorite, setFavorite] = useState(false);
  const [itsEmpity, setEmpty] = useState();

  const iconFav = { name: nameProp, place: font };

  const verifierFav = () => {
    isFavorited();
  };

  const isFavorited = async () => {
    const storeFavs = await AsyncStorage.getItem('Favorites_icons');
    const arr = JSON.parse(storeFavs);
    if (arr != null && arr.findIndex((e) => e.name === iconFav.name) != -1) {
      setFavorite(true);
    } else {
      setFavorite(false);
    }
  };

  const saveFavorites = async () => {
    const storeSave = await AsyncStorage.getItem('Favorites_icons');

    let arr = JSON.parse(storeSave);
    arr ? arr.push(iconFav) : (arr = [iconFav]);
    await AsyncStorage.setItem('Favorites_icons', JSON.stringify(arr));
    Alert.alert('', 'Salvo com suceso!');
  };
  const removeFavorites = async () => {
    const store = await AsyncStorage.getItem('Favorites_icons');

    const arr = JSON.parse(store);

    arr.splice(
      arr.findIndex((e) => e.name === nameProp),
      1
    );

    await AsyncStorage.setItem('Favorites_icons', JSON.stringify(arr));
    setFavorite(false);
    Alert.alert('', 'Removido com suceso!');
  };

  async function setLikeFavorite() {
    setFavorite(!favorite);
    saveFavorites();
  }

  const copyToClipboard = () => {
    Clipboard.setString(nameProp);
    Alert.alert('Copied!');
  };

  const PressAnimateLike = () => {
    if (AnimationRefLike) {
      AnimationRefLike.current?.zoomIn();
    }
  };
  const PressAnimateClip = () => {
    if (AnimationRefClip) {
      AnimationRefClip.current?.zoomIn();
    }
  };

  useEffect(() => {
    isFavorited();
  }, []);

  useFocusEffect(verifierFav);

  const Icon = () => {
    switch (font) {
      case 'AntDesign':
        return <AntDesign name={nameProp} size={65} color="#fff" />;
        break;
      case 'Entypo':
        return <Entypo name={nameProp} size={65} color="#fff" />;
      case 'EvilIcons':
        return <EvilIcons name={nameProp} size={65} color="#fff" />;
        break;
      case 'Feather':
        return <Feather name={nameProp} size={65} color="#fff" />;
        break;
      case 'FontAwesome':
        return <FontAwesome name={nameProp} size={65} color="#fff" />;
        break;
      case 'FontAwesome5':
        return <FontAwesome5 name={nameProp} size={65} color="#fff" />;
        break;
      case 'Fontisto':
        return <Fontisto name={nameProp} size={65} color="#fff" />;
        break;
      case 'Foundation':
        return <Foundation name={nameProp} size={65} color="#fff" />;
        break;
      case 'Ionicons':
        return <Ionicons name={nameProp} size={65} color="#fff" />;
        break;
      case 'MaterialCommunityIcons':
        return (
          <MaterialCommunityIcons name={nameProp} size={65} color="#fff" />
        );
        break;
      case 'MaterialIcons':
        return <MaterialIcons name={nameProp} size={65} color="#fff" />;
        break;
      case 'Octicons':
        return <Octicons name={nameProp} size={65} color="#fff" />;
        break;
      case 'SimpleLineIcons':
        return <SimpleLineIcons name={nameProp} size={65} color="#fff" />;
        break;
      case 'Zocial':
        return <Zocial name={nameProp} size={65} color="#fff" />;
        break;
      default:
        null;
    }
  };
  return (
    <CardContainer>
      <ActionsContainer>
        <IndividualContainer>
          <AnimatedButton
            onPress={() => {
              PressAnimateLike();
              favorite ? removeFavorites() : setLikeFavorite();
            }}
            ref={AnimationRefLike}
            duration={500}
            useNativeDriver
          >
            {favorite ? (
              <AntDesign name="heart" size={20} color="#1ED760" />
            ) : (
              <AntDesign name="hearto" size={20} color="#1ED760" />
            )}
          </AnimatedButton>
        </IndividualContainer>
        <IndividualContainer>
          <AnimatedButton
            onPress={() => {
              PressAnimateClip();
              copyToClipboard();
            }}
            ref={AnimationRefClip}
            duration={500}
            useNativeDriver
          >
            <Ionicons name="copy" size={20} color="#1ED760" />
          </AnimatedButton>
        </IndividualContainer>
      </ActionsContainer>
      <IconContainer>{Icon()}</IconContainer>

      <LabelContainer>
        <LabelName>{nameProp}</LabelName>
      </LabelContainer>
    </CardContainer>
  );
}
