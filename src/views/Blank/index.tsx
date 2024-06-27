import {Container, TextTitle, Title, Info, WeatherIcon} from './styles';
import axios from 'axios';
import type {Props} from './types';
import {ActivityIndicator} from 'react-native';
import {API_KEY} from '@env';
import React, {useState} from 'react';
import Button from '../../common/ui/components/Button';
import Placeholder from '../../common/ui/components/Placeholder';

interface WeatherData {
  name: string;
  main: {
    temp: number;
  };
  weather: [
    {
      description: string;
      icon: string;
    },
  ];
}

export const Blank: Props = () => {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(false);
  const [location, setLocation] = useState('');

  const fetchWeatherData = async (city: string) => {
    setLoading(true);
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`,
      );
      setWeatherData(response.data);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setWeatherData(null);
      setLoading(false);
    }
  };

  return (
    <Container>
      <TextTitle>Enter location to get weather information:</TextTitle>
      <Placeholder
        placeholderInput="Enter city name"
        value={location}
        onChangeText={setLocation}
      />
      <Button title="Get Weather" onPress={() => fetchWeatherData(location)} />
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
        </>
      )}
    </Container>
  );
};
