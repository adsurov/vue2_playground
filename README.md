# Weather App Playground

A playground project to learn Vue.js and TypeScript basics by building a simple weather application.

## Project Overview

This project is a simple weather app that demonstrates the use of Vue.js and TypeScript. We will create several pages to display weather information using data from the WeatherAPI.com service.

### Features

- Current weather display
- Multi-day forecast
- Search functionality for different locations
- Responsive design using Element UI components

### Technologies Used

- Vue.js
- TypeScript
- [WeatherAPI.com](https://www.weatherapi.com/docs/) for weather data
- [Element UI](https://element.eleme.cn/#/en-US) for UI components

## Getting Started

To get started with this project, follow these steps:

1. Clone the repository
2. Install dependencies: `npm install`
3. Create a free account at [WeatherAPI.com](https://www.weatherapi.com/) and obtain an API key
4. Create a `.env` file in the root directory and add your API key (you can use .env.example file as a template):
   ```
   API_KEY=your_api_key_here
   ```

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your unit tests
```
npm run test:unit
```

### Run your end-to-end tests
```
npm run test:e2e
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## Project Structure

The project will consist of several pages:

1. Home page: Displays current weather for a default location
2. Forecast page: Shows a multi-day forecast
3. Search page: Allows users to search for weather in different locations

## Contributing

This is a learning project, but contributions and suggestions are welcome. Please feel free to open an issue or submit a pull request.
