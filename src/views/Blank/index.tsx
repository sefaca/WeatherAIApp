import {
  Container,
  TextTitle,
  Title,
  Info,
  WeatherIcon,
  Recommendation,
  AppTitle,
} from './styles';
import {ActivityIndicator, SafeAreaView} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import React from 'react';
import Button from '../../common/ui/components/Button';
import Placeholder from '../../common/ui/components/Placeholder';
import type {Props} from './types';
import useViewModelDefault from './viewmodel';
import {API_KEY, COHERE_API_KEY} from '@env';
import axios from 'axios';

export const Blank: Props = ({useViewModel = useViewModelDefault}) => {
  const {
    weatherData,
    loading,
    location,
    recommendations,
    setLocation,
    setGender,
    handleFetchWeatherData,
    handleFetchRecommendations,
  } = useViewModel({
    fetchWeatherData: async (city: any) => {
      return axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`,
      );
    },
    fetchRecommendations: async (weatherData, selectedGender) => {
      return axios.post(
        'https://api.cohere.ai/generate',
        {
          model: 'command-r-plus',
          prompt: `Provide more explicit recommendations on the clothes to wear for a ${
            selectedGender === 'male' ? "man's" : "woman's"
          } outfit and colors depending on the weather: ${
            weatherData.weather[0].description
          } with a temperature of ${
            weatherData.main.temp
          }°C in a concise manner with a maximum number of 700 letters.`,
          max_tokens: 300,
        },
        {
          headers: {
            Authorization: `Bearer ${COHERE_API_KEY}`,
            'Content-Type': 'application/json',
          },
        },
      );
    },
  });

  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <Container>
          <AppTitle>WeatherAIApp</AppTitle>
          <TextTitle>Enter location to get weather information:</TextTitle>
          <Placeholder
            placeholderInput="Enter city name"
            value={location}
            onChangeText={setLocation}
          />
          <Button
            title="Get Weather"
            onPress={() => handleFetchWeatherData(location)}
          />
          {loading && <ActivityIndicator size="large" color="#0000ff" />}
          {weatherData && (
            <>
              <Title>Weather in {weatherData.name}</Title>
              <WeatherIcon
                source={{
                  uri: `http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`,
                }}
              />
              <Info>Temperature: {weatherData.main.temp}°C</Info>
              <Info>Condition: {weatherData.weather[0].description}</Info>
              <Button
                title="Get tips for Men"
                onPress={() => {
                  setGender('male');
                  handleFetchRecommendations('male');
                }}
              />
              <Button
                title="Get tips for Women"
                onPress={() => {
                  setGender('female');
                  handleFetchRecommendations('female');
                }}
              />
              {recommendations && (
                <Recommendation>{recommendations}</Recommendation>
              )}
            </>
          )}
        </Container>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Blank;
