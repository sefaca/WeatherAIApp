/* eslint-disable prettier/prettier */
import {useState, useCallback} from 'react';
import type {ViewModelParams, WeatherData, Gender} from './types';
import { AxiosError } from 'axios';

const useViewModel = ({
  fetchWeatherData,
  fetchRecommendations,
}: ViewModelParams) => {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(false);
  const [location, setLocation] = useState('');
  const [recommendations, setRecommendations] = useState<string | null>(null);
  const [gender, setGender] = useState<Gender | null>(null);

  const handleFetchWeatherData = useCallback(
    async (city: string) => {
      setLoading(true);
      try {
        const response = await fetchWeatherData(city);
        setWeatherData(response.data);
      } catch (error) {
        console.error(error);
        setWeatherData(null);
      } finally {
        setLoading(false);
      }
    },
    [fetchWeatherData],
  );

  const handleFetchRecommendations = useCallback(
    async (selectedGender: Gender) => {
      if (!weatherData) {
        return;
      }

      setLoading(true);
      try {
        const response = await fetchRecommendations(
          weatherData,
          selectedGender,
        );
        setRecommendations(
          response.data?.text?.trim() ?? 'No recommendations found.',
        );
      } catch (error: unknown) {
        console.error(
          'Error fetching recommendations:',
          (error as AxiosError).response?.data ?? (error as AxiosError).message,
        );
        setRecommendations('Failed to fetch recommendations.');
      } finally {
        setLoading(false);
      }
    },
    [weatherData, fetchRecommendations],
  );

  return {
    weatherData,
    loading,
    location,
    recommendations,
    gender,
    setLocation,
    setGender,
    handleFetchWeatherData,
    handleFetchRecommendations,
  };
};

export default useViewModel;
