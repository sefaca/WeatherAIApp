import {Container, Text, Title, Info} from './styles';
import axios from 'axios';
import type {Props} from './types';
import {ActivityIndicator} from 'react-native';
import {API_KEY} from '@env';
import React, {useState, useEffect} from 'react';

interface WeatherData {
  name: string;
  main: {
    temp: number;
  };
  weather: [
    {
      description: string;
    },
  ];
}

export const Blank: Props = () => {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=Sevilla&appid=${API_KEY}&units=metric`,
        );
        setWeatherData(response.data);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false); // Ensure loading is set to false in case of error
      }
    };

    fetchWeatherData();
  }, []);

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  if (!weatherData) {
    return (
      <Container>
        <Text>Failed to load weather data</Text>
      </Container>
    );
  }

  return (
    <Container>
      <Text>Hola</Text>
      <Title>Weather in {weatherData.name}</Title>
      <Info>Temperature: {weatherData.main.temp}°C</Info>
      <Info>Condition: {weatherData.weather[0].description}</Info>
    </Container>
  );
};
