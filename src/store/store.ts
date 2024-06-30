import { configureStore } from "@reduxjs/toolkit";
import weatherReducer from "@/features/weather/weatherSlice";
import citiesReducer from "@/features/cities/citiesSlice";

export const store = configureStore({
  reducer: {
    weather: weatherReducer,
    cities: citiesReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
