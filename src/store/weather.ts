import { axiosInstance} from '@/services/api';
import { ActionContext } from 'vuex';

interface WeatherState {
  currentWeather: any | null;
  loading: boolean;
  error: string | null;
}

interface RootState {
  weather: WeatherState;
}

export const weather = {
  state: (): WeatherState => ({
    currentWeather: null,
    loading: false,
    error: null,
  }),
  mutations: {
    SET_CURRENT_WEATHER(state: WeatherState, weather: any) {
      state.currentWeather = weather;
    },
    SET_LOADING(state: WeatherState, isLoading: boolean) {
      state.loading = isLoading;
    },
    SET_ERROR(state: WeatherState, error: string | null) {
      state.error = error;
    },
  },
  actions: {
    getCurrentWeather: async function fetchCurrentWeather({ commit }: ActionContext<WeatherState, RootState>, location: string) {
      commit('SET_LOADING', true);
      commit('SET_ERROR', null);
      try {
        const weatherData = await axiosInstance.get(`/current.json`, {
          params: {
            q: 'Paris', // use proper value here
          },
        })
          .then((response: any) => response.data)
          .catch((error) => {
            console.error('Error fetching weather data:', error);
            throw error;
          });

        commit('SET_CURRENT_WEATHER', weatherData);
      } catch (error) {
        commit('SET_ERROR', (error as Error).message || 'Failed to fetch weather data');
      } finally {
        commit('SET_LOADING', false);
      }
    },
  },
  getters: {
    isLoading: (state: WeatherState) => state.loading,
    hasError: (state: WeatherState) => state.error !== null,
    currentWeather: (state: WeatherState) => state.currentWeather,
  }
};
