import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { getWeatherByCity } from "@/api/weatherApi";
import { WeatherState, WeatherData } from "./weatherTypes";
import { AppDispatch, RootState } from "@/store/store";

const initialState: WeatherState = {
  weatherData: {},
  units: "metric",
  status: "idle",
  error: null,
};

export const fetchWeather = createAsyncThunk<
  WeatherData,
  { city: string; units?: string },
  {
    dispatch: AppDispatch;
    state: RootState;
    extraArgument: {
      loading: string;
      CurrentRequestId: string | undefined;
    };
  }
>(
  "weather/fetchWeather",
  async ({ city, units = "metric" }: { city: string; units?: string }, { rejectWithValue }) => {
    try {
      const response = await getWeatherByCity(city, units);
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
    changeMetric: (state, action: PayloadAction<string>) => {
      state.units = action.payload;
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

export const { changeMetric } = weatherSlice.actions;

export default weatherSlice.reducer;
