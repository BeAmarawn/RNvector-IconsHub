import React from 'react';
import { ScrollView } from 'react-native';
import { Container, LabelFont, ListsContainer, FlatListicons } from './styles';

import IconList from '../../components/IconList';

import NameEntypo from '../NameEntypo.js';
import NameAntDesign from '../NameAntDesign.js';
import NameEvilIcons from '../NameEvilIcons.js';

const Home = () => {
  
  

  return (
    <Container>
      <ScrollView>
        <ListsContainer>
          <LabelFont>AntDesign</LabelFont>
          <FlatListicons
            data={NameAntDesign}
            keyExtractor={(item, index) => index}
            renderItem={({ item }) => <IconList data={item} font="AntDesign" />}
            horizontal
          />
          <LabelFont>Entypo</LabelFont>
          <FlatListicons
            data={NameEntypo}
            keyExtractor={(item, index) => index}
            renderItem={({ item }) => <IconList data={item} font="Entypo" />}
            horizontal
          />
          <LabelFont>EvilIcons</LabelFont>
          <FlatListicons
            data={NameEvilIcons}
            keyExtractor={(item, index) => index}
            renderItem={({ item }) => <IconList data={item} font="EvilIcons" />}
            horizontal
          />
          <LabelFont>Feather</LabelFont>
          <FlatListicons
            data={NameAntDesign}
            keyExtractor={(item, index) => index}
            renderItem={({ item }) => <IconList data={item} font="AntDesign" />}
            horizontal
          />
          <LabelFont>FontAwesome</LabelFont>
          <FlatListicons
            data={NameAntDesign}
            keyExtractor={(item, index) => index}
            renderItem={({ item }) => <IconList data={item} font="AntDesign" />}
            horizontal
          />
          <LabelFont>FontAwesome5</LabelFont>
          <FlatListicons
            data={NameAntDesign}
            keyExtractor={(item, index) => index}
            renderItem={({ item }) => <IconList data={item} font="AntDesign" />}
            horizontal
          />
          <LabelFont>Fontisto</LabelFont>
          <FlatListicons
            data={NameAntDesign}
            keyExtractor={(item, index) => index}
            renderItem={({ item }) => <IconList data={item} font="AntDesign" />}
            horizontal
          />
          <LabelFont>Foundation</LabelFont>
          <FlatListicons
            data={NameAntDesign}
            keyExtractor={(item, index) => index}
            renderItem={({ item }) => <IconList data={item} font="AntDesign" />}
            horizontal
          />
          <LabelFont>Ionicons</LabelFont>
          <FlatListicons
            data={NameAntDesign}
            keyExtractor={(item, index) => index}
            renderItem={({ item }) => <IconList data={item} font="AntDesign" />}
            horizontal
          />
          <LabelFont>MaterialCommunityIcons</LabelFont>
          <FlatListicons
            data={NameAntDesign}
            keyExtractor={(item, index) => index}
            renderItem={({ item }) => <IconList data={item} font="AntDesign" />}
            horizontal
          />
          <LabelFont>MaterialIcons</LabelFont>
          <FlatListicons
            data={NameAntDesign}
            keyExtractor={(item, index) => index}
            renderItem={({ item }) => <IconList data={item} font="AntDesign" />}
            horizontal
          />
          <LabelFont>Octicons</LabelFont>
          <FlatListicons
            data={NameAntDesign}
            keyExtractor={(item, index) => index}
            renderItem={({ item }) => <IconList data={item} font="AntDesign" />}
            horizontal
          />
          <LabelFont>SimpleLineIcons</LabelFont>
          <FlatListicons
            data={NameAntDesign}
            keyExtractor={(item, index) => index}
            renderItem={({ item }) => <IconList data={item} font="AntDesign" />}
            horizontal
          />
          <LabelFont>Zocial</LabelFont>
          <FlatListicons
            data={NameAntDesign}
            keyExtractor={(item, index) => index}
            renderItem={({ item }) => <IconList data={item} font="AntDesign" />}
            horizontal
          />
        </ListsContainer>
      </ScrollView>
    </Container>
  );
};

export default Home;
