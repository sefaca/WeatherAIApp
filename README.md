# WeatherAIApp

WeatherAIApp is a React Native application that provides weather information and clothing recommendations based on the current weather conditions. The app utilizes the OpenWeatherMap API for weather data and Cohere API for clothing recommendations.

## Features

- Fetches current weather data based on user input
- Provides clothing recommendations based on weather conditions and user gender
- Supports multiple languages (English and Spanish)

## Demo Video

Watch the demo video to see WeatherAIApp in action:

https://github.com/sefaca/WeatherAIApp/assets/32002286/0a2a2811-12fc-4584-b27e-aedb10068a89

This is a new [**React Native**](https://reactnative.dev) project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).

# Getting Started

>**Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions till "Creating a new application" step, before proceeding.

## Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/your-username/WeatherAIApp.git
    ```
2. Install dependencies:
    ```sh
    cd WeatherAIApp
    npm install
    ```
3. Create a `.env` file with your API keys:
    ```env
    API_KEY=your_openweathermap_api_key
    COHERE_API_KEY=your_cohere_api_key
    ```
4. Run the app:
    ```sh
    npm start
    ```

### For Android

```bash
# using npm
npm run android

# OR using Yarn
yarn android
```

### For iOS

```bash
# using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up _correctly_, you should see your new app running in your _Android Emulator_ or _iOS Simulator_ shortly provided you have set up your emulator/simulator correctly.

This is one way to run your app — you can also run it directly from within Android Studio and Xcode respectively.

## Step 3: Modifying your App

Now that you have successfully run the app, let's modify it.

1. Open `App.tsx` in your text editor of choice and edit some lines.
2. For **Android**: Press the <kbd>R</kbd> key twice or select **"Reload"** from the **Developer Menu** (<kbd>Ctrl</kbd> + <kbd>M</kbd> (on Window and Linux) or <kbd>Cmd ⌘</kbd> + <kbd>M</kbd> (on macOS)) to see your changes!

   For **iOS**: Hit <kbd>Cmd ⌘</kbd> + <kbd>R</kbd> in your iOS Simulator to reload the app and see your changes!

## Congratulations! :tada:

You've successfully run and modified your React Native App. :partying_face:

## Usage

1. Enter the city name to fetch weather data.
2. Click "Get Weather" to retrieve the current weather information.
3. Choose your gender to get clothing recommendations based on the weather.

## Localization

The app supports multiple languages. You can toggle between English and Spanish using the translate button on the main screen.

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/new-feature`)
3. Commit your changes (`git commit -m 'Add some feature'`)
4. Push to the branch (`git push origin feature/new-feature`)
5. Open a pull request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgements

- [OpenWeatherMap API](https://openweathermap.org/api)
- [Cohere API](https://cohere.ai/)

# Troubleshooting

If you can't get this to work, see the [Troubleshooting](https://reactnative.dev/docs/troubleshooting) page.

# Learn More

To learn more about React Native, take a look at the following resources:

- [React Native Website](https://reactnative.dev) - learn more about React Native.
- [Getting Started](https://reactnative.dev/docs/environment-setup) - an **overview** of React Native and how setup your environment.
- [Learn the Basics](https://reactnative.dev/docs/getting-started) - a **guided tour** of the React Native **basics**.
- [Blog](https://reactnative.dev/blog) - read the latest official React Native **Blog** posts.
- [`@facebook/react-native`](https://github.com/facebook/react-native) - the Open Source; GitHub **repository** for React Native.
