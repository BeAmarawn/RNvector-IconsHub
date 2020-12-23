import styled from 'styled-components/native';
import { SearchBar } from 'react-native-elements';

import { StatusBar, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export const Container = styled.View`
  flex: 1;
  background: #121113;
  padding-top: ${StatusBar.currentHeight ? StatusBar.currentHeight + 10 : 30}px;
`;
export const LabelFont = styled.Text.attrs({
  numberOfLines: 1,
})`
  font-size: 28px;
  line-height: 35px;
  color: #fff;
  font-family: Gotham-Medium;
  letter-spacing: 0.2px;
  max-width: ${width * 0.97}px;
`;
export const ListsContainer = styled.View`
  margin-left: 15px;
  margin-top: ${height * 0.03}px;
`;
export const FlatListicons = styled.FlatList.attrs({
  showsHorizontalScrollIndicator: false,
})``;
export const HeaderContainer = styled.View`
  flex-direction: row;
  width: ${width}px;
  height: ${height * 0.08}px;
`;
export const SearchBarr = styled(SearchBar)`
  background: #121113;
  width: ${width}px;
  height: ${height * 0.1}px;
`;
