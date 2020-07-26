import React from 'react';
import { ScrollView } from 'react-native';
import { Container, LabelFont, ListsContainer, FlatListicons } from './styles';

import IconList from '../../components/IconList';

import NameEntypo from '../NameEntypo.js';
import NameAntDesign from '../NameAntDesign.js';
import NameEvilIcons from '../NameEvilIcons.js';
import NameFeather from '../NameFeather.js';
import NameFontAwesome from '../NameFontAwesome.js';
import NameFontisto from '../NameFontisto.js';
import NameFoundation from '../NameFoundation.js';
import NameIonicons from '../NameIonicons.js';
import NameMaterialCommunityIcons from '../NameMaterialCommunityIcons.js';
import NameMaterialIcons from '../NameMaterialIcons.js';
import NameOcticons from '../NameOcticons.js';
import NameSimpleLineIcons from '../NameSimpleLineIcons.js';
import NameZocial from '../NameZocial.js';

const Home = () => {
  return (
    <Container>
      <ScrollView>
        <ListsContainer>
          <LabelFont>AntDesign</LabelFont>
          <FlatListicons
            data={NameAntDesign}
            keyExtractor={(item, index) => String(index)}
            renderItem={({ item }) => (
              <IconList nameProp={item} font="AntDesign" />
            )}
            horizontal
          />
          <LabelFont>Entypo</LabelFont>
          <FlatListicons
            data={NameEntypo}
            keyExtractor={(item, index) => String(index)}
            renderItem={({ item }) => (
              <IconList nameProp={item} font="Entypo" />
            )}
            horizontal
          />
          <LabelFont>EvilIcons</LabelFont>
          <FlatListicons
            data={NameEvilIcons}
            keyExtractor={(item, index) => String(index)}
            renderItem={({ item }) => (
              <IconList nameProp={item} font="EvilIcons" />
            )}
            horizontal
          />
          <LabelFont>Feather</LabelFont>
          <FlatListicons
            data={NameFeather}
            keyExtractor={(item, index) => String(index)}
            renderItem={({ item }) => (
              <IconList nameProp={item} font="Feather" />
            )}
            horizontal
          />
          <LabelFont>FontAwesome</LabelFont>
          <FlatListicons
            data={NameFontAwesome}
            keyExtractor={(item, index) => String(index)}
            renderItem={({ item }) => (
              <IconList nameProp={item} font="FontAwesome" />
            )}
            horizontal
          />
          <LabelFont>Fontisto</LabelFont>
          <FlatListicons
            data={NameFontisto}
            keyExtractor={(item, index) => String(index)}
            renderItem={({ item }) => (
              <IconList nameProp={item} font="Fontisto" />
            )}
            horizontal
          />
          <LabelFont>Foundation</LabelFont>
          <FlatListicons
            data={NameFoundation}
            keyExtractor={(item, index) => String(index)}
            renderItem={({ item }) => (
              <IconList nameProp={item} font="Foundation" />
            )}
            horizontal
          />
          <LabelFont>Ionicons</LabelFont>
          <FlatListicons
            data={NameIonicons}
            keyExtractor={(item, index) => String(index)}
            renderItem={({ item }) => (
              <IconList nameProp={item} font="Ionicons" />
            )}
            horizontal
          />
          <LabelFont>MaterialCommunityIcons</LabelFont>
          <FlatListicons
            data={NameMaterialCommunityIcons}
            keyExtractor={(item, index) => String(index)}
            renderItem={({ item }) => (
              <IconList nameProp={item} font="MaterialCommunityIcons" />
            )}
            horizontal
          />
          <LabelFont>MaterialIcons</LabelFont>
          <FlatListicons
            data={NameMaterialIcons}
            keyExtractor={(item, index) => String(index)}
            renderItem={({ item }) => (
              <IconList nameProp={item} font="MaterialIcons" />
            )}
            horizontal
          />
          <LabelFont>Octicons</LabelFont>
          <FlatListicons
            data={NameOcticons}
            keyExtractor={(item, index) => String(index)}
            renderItem={({ item }) => (
              <IconList nameProp={item} font="Octicons" />
            )}
            horizontal
          />
          <LabelFont>SimpleLineIcons</LabelFont>
          <FlatListicons
            data={NameSimpleLineIcons}
            keyExtractor={(item, index) => String(index)}
            renderItem={({ item }) => (
              <IconList nameProp={item} font="SimpleLineIcons" />
            )}
            horizontal
          />
          <LabelFont>Zocial</LabelFont>
          <FlatListicons
            data={NameZocial}
            keyExtractor={(item, index) => String(index)}
            renderItem={({ item }) => (
              <IconList nameProp={item} font="Zocial" />
            )}
            horizontal
          />
        </ListsContainer>
      </ScrollView>
    </Container>
  );
};

export default Home;
