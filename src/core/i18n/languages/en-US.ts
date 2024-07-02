import type {RootTabParamList} from '../../navigation/Tabs/types';

const tabs: Record<keyof RootTabParamList, string> = {
  Blank: 'Blank',
};

const actions = {
  'action/apply': 'Apply',
  'action/back': 'Back',
  'action/clear': 'Clear',
  'action/filter': 'Filter',
};

const common = {
  loading: 'Loading...',
  error: 'Error:',
};

const screens = {
  character: 'Character',
};

const resources = {
  en: {
    translation: {
      appTitle: 'WeatherAIApp',
      enterLocation: 'Enter location to get weather information:',
      enterCityName: 'Enter city name',
      getWeather: 'Get Weather',
      weatherIn: 'Weather in',
      temperature: 'Temperature',
      condition: 'Condition',
      tipsForMen: 'Get tips for Men',
      tipsForWomen: 'Get tips for Women',
      tipsForNonBinary: 'Get tips for Non-Binary',
      translate: 'Translate to Spanish',
    },
  },
  es: {
    translation: {
      appTitle: 'WeatherAIApp',
      enterLocation:
        'Ingrese la ubicación para obtener información meteorológica:',
      enterCityName: 'Ingrese el nombre de la ciudad',
      getWeather: 'Obtener clima',
      weatherIn: 'Clima en',
      temperature: 'Temperatura',
      condition: 'Condición',
      tipsForMen: 'Obtener consejos para hombres',
      tipsForWomen: 'Obtener consejos para mujeres',
      tipsForNonBinary: 'Obtener consejos para no binario',
      translate: 'Traducir a inglés',
    },
  },
};

const dictionary = {
  common,
  screens,
  tabs,
  actions,
  resources,
};

export default dictionary;
