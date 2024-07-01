/* eslint-disable prettier/prettier */
import styled from 'styled-components/native';

export const Container = styled.View`
  height: 40px;
  border-color: ${({theme}) => theme.colors.tealGreen};
  border-width: 1px;
  margin: 10px;
  width: 100%;
  padding-horizontal: 10px;
  border-radius: 16px;
  justify-content: center;
`;

export const TextInputStyled = styled.TextInput.attrs(({theme}) => ({
  placeholderTextColor: theme.colors.tealGreen,
}))`
  color: ${({theme}) => theme.colors.tealGreen};
  font-size: 15px;
  font-weight: bold;
  height: 100%;
  width: 100%;
`;
