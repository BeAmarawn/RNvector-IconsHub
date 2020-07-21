import React, { useRef, useState } from 'react';
import { Alert } from 'react-native';
import Clipboard from '@react-native-community/clipboard';
import * as Animatable from 'react-native-animatable';
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

export default function IconList({ data, font }) {
  const AnimationRefLike = useRef(null);
  const AnimationRefClip = useRef(null);
  const [favorite, setFavorite] = useState(false);

  function setLikeFavorite() {
    setFavorite(!favorite);
  };

  const copyToClipboard = () => {
    Clipboard.setString(data);
    Alert.alert('','Copied!');
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

  const Icon = () => {
    switch (font) {
      case 'AntDesign':
        return <AntDesign name={data} size={65} color="#fff" />;
        break;
      case 'Entypo':
        return <Entypo name={data} size={65} color="#fff" />;
      case 'EvilIcons':
        return <EvilIcons name={data} size={65} color="#fff" />;
        break;
      case 'Feather':
        return <Feather name={data} size={65} color="#fff" />;
        break;
      case 'FontAwesome':
        return <FontAwesome name={data} size={65} color="#fff" />;
        break;
      case 'FontAwesome5':
        return <FontAwesome5 name={data} size={65} color="#fff" />;
        break;
      case 'Fontisto':
        return <Fontisto name={data} size={65} color="#fff" />;
        break;
      case 'Foundation':
        return <Foundation name={data} size={65} color="#fff" />;
        break;
      case 'Ionicons':
        return <Ionicons name={data} size={65} color="#fff" />;
        break;
      case 'MaterialCommunityIcons':
        return <MaterialCommunityIcons name={data} size={65} color="#fff" />;
        break;
      case 'MaterialIcons':
        return <MaterialIcons name={data} size={65} color="#fff" />;
        break;
      case 'Octicons':
        return <Octicons name={data} size={65} color="#fff" />;
        break;
      case 'SimpleLineIcons':
        return <SimpleLineIcons name={data} size={65} color="#fff" />;
        break;
      case 'Zocial':
        return <Zocial name={data} size={65} color="#fff" />;
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
              setLikeFavorite();
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
        <LabelName>{data}</LabelName>
      </LabelContainer>
    </CardContainer>
  );
}
