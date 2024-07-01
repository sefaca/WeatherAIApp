import {
  Container,
  TextTitle,
  Title,
  Info,
  WeatherIcon,
  Recommendation,
  AppTitle,
} from './styles';
import axios from 'axios';
import type {Props} from './types';
import {ActivityIndicator, SafeAreaView} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import React, {useState} from 'react';
import Button from '../../common/ui/components/Button';
import Placeholder from '../../common/ui/components/Placeholder';
import {API_KEY, COHERE_API_KEY} from '@env';

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
  const [recommendations, setRecommendations] = useState<string | null>(null);
  const [gender, setGender] = useState<'male' | 'female' | null>(null);

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

  const fetchRecommendations = async (selectedGender: 'male' | 'female') => {
    if (!weatherData) {
      return;
    }
    setLoading(true);
    try {
      console.log(`Weather data: ${JSON.stringify(weatherData)}`);
      const response = await axios.post(
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
          max_tokens: 150,
        },
        {
          headers: {
            Authorization: `Bearer ${COHERE_API_KEY}`,
            'Content-Type': 'application/json',
          },
        },
      );
      console.log(`Cohere response: ${JSON.stringify(response.data)}`);
      if (response.data && response.data.text) {
        setRecommendations(response.data.text.trim());
      } else {
        setRecommendations('No recommendations found.');
      }
      setLoading(false);
    } catch (error) {
      console.error(
        'Error fetching recommendations:',
        error.response ? error.response.data : error.message,
      );
      setRecommendations('Failed to fetch recommendations.');
      setLoading(false);
    }
  };

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
            onPress={() => fetchWeatherData(location)}
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
                  fetchRecommendations('male');
                }}
              />
              <Button
                title="Get tips for Women"
                onPress={() => {
                  setGender('female');
                  fetchRecommendations('female');
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
