import React from 'react';
import FlatList from 'react-native';
import { Container, LabelFont, ListsContainer } from './styles';

import IconList from '../../components/IconList';

const Home = () => {
  const data = [{name: 'home'}, {name: 'heart'}];

  return (
    <Container>
      <ListsContainer>
        <LabelFont>AntDesign</LabelFont>
        <FlatList data={data} renderItem={({data}) => (
          <IconList data={data} />
        )} />
      </ListsContainer>
    </Container>
  );
};

export default Home;
