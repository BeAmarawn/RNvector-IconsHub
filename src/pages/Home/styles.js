import styled from 'styled-components/native';
import { SearchBar } from 'react-native-elements';

export const Container = styled.View`
  flex: 1;
  background: #121113;
`;
export const LabelFont = styled.Text`
  font-size: 35px;
  color: #fff;
  font-family: Gotham-Medium;
`;
export const ListsContainer = styled.View`
  margin-left: 15px;
  margin-top: 45px;
`;
export const FlatListicons = styled.FlatList.attrs({
  showsHorizontalScrollIndicator: false,
})``;
export const HeaderContainer = styled.View`
  flex-direction: row;
`;
export const SearchBarr = styled(SearchBar)`
  background: #272627;
`;
