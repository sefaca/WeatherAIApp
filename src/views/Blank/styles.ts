import styled from 'styled-components/native';
import Text from '../../common/ui/components/Text';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 20px;
  background-color: ${({theme}) => theme.colors.deepBlue};
`;

export const AppTitle = styled(Text).attrs({
  variant: 'headline2',
})`
  color: ${({theme}) => theme.colors.tealGreen};
  margin-top: 40px;
  font-weight: bold;
`;

export const TextTitle = styled(Text).attrs({
  variant: 'body17-semibold',
})`
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

export const Recommendation = styled.Text`
  margin-top: 10px;
  font-size: 18px;
  color: ${({theme}) => theme.colors.red};
`;

export const WeatherIcon = styled.Image`
  width: 100px;
  height: 100px;
  margin-bottom: 10px;
`;
