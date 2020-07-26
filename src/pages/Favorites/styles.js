import styled from 'styled-components/native';

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
`;
export const FlatListicons = styled.FlatList.attrs({
  showsHorizontalScrollIndicator: false,
})``;
export const ClearButton = styled.TouchableOpacity`
  border-radius: 15px;
  height: 30px;
  width: 100px;
  background: #1ed760;
  justify-content: center;
  align-items: center;
  margin-left: auto;
  margin-right: 15px;
  margin-top: 15px;
`;
export const LabelClear = styled.Text`
  font-size: 18px;
  color: #fff;
  font-family: Gotham-Medium;
`;
