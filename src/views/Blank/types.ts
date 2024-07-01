import {ScreenComponent} from '../../core/navigation/types';

export type Props = ScreenComponent<'Blank'>;

export interface WeatherData {
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

export type Gender = 'male' | 'female' | 'non-binary';

export interface ViewModelParams {
  fetchWeatherData: (city: string) => Promise<any>;
  fetchRecommendations: (
    weatherData: WeatherData,
    selectedGender: Gender,
  ) => Promise<any>;
}

// export type Props = {
//   useViewModel?: typeof useViewModelDefault;
// };
