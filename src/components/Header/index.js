import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {
  HeaderContainer,
  HeaderSearch,
  HeaderSearchInput,
  HeaderSearchIcon,
} from './styles';

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderSearch>
        <HeaderSearchIcon>
          <Ionicons name="search-outline" size={35} color="#fff" />
        </HeaderSearchIcon>
        <HeaderSearchInput />
      </HeaderSearch>
    </HeaderContainer>
  );
};

export default Header;
