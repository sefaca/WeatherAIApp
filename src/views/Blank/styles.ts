import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 20px;
  background-color: ${({theme}) => theme.colors.deepBlue};
`;

export const Text = styled.Text`
  color: ${({theme}) => theme.colors.red};
`;

export const Title = styled.Text`
  color: ${({theme}) => theme.colors.tealGreen};
  font-size: 24px;
  font-weight: bold;
`;

export const Info = styled.Text`
  font-size: 18px;
  color: ${({theme}) => theme.colors.red};
`;
