import styled from 'styled-components/native';

export const HeaderContainer = styled.View`
  flex-direction: row;
  background: #272627;
  height: 60px;
`;
export const HeaderSearch = styled.View`
  margin-top: 13px;
  margin-left: 10px;
  width: 80%;
  flex-direction: row;
  height: 40px;
  border-color: #fff;
  border-width: 1px;
  border-radius: 25px;
`;
export const HeaderSearchInput = styled.TextInput`
  color: #ffffff;
  font-size: 18px;
  height: 40px;
  align-self: center;
  flex: 1;
  justify-content: center;
`;
export const HeaderSearchIcon = styled.View`
  margin-left: 5px;
`;
export const ThemeSwitch = styled.Switch``;
