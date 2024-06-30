import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { getWeatherByCity } from "@/api/weatherApi";
import { WeatherState, WeatherData, AsyncThunkConfig } from "./weatherTypes";

const initialState: WeatherState = {
  weatherData: {},
  status: "idle",
  error: null,
};

export const fetchWeather = createAsyncThunk<WeatherData, string, AsyncThunkConfig>(
  "weather/fetchWeather",
  async (city: string, { rejectWithValue }) => {
    try {
      const response = await getWeatherByCity(city);
      return response;
    } catch (err) {
      return rejectWithValue("Failed to fetch weather data");
    }
  },
);

const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {
    log: (state, action: PayloadAction<string>) => {
      console.log("sss");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchWeather.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchWeather.fulfilled, (state, action: PayloadAction<WeatherData>) => {
        state.status = "succeeded";
        state.weatherData[action.payload.current.name] = action.payload;
      })
      .addCase(fetchWeather.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload as string;
      });
  },
});

export default weatherSlice.reducer;
