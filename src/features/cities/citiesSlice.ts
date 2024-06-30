import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CitiesState } from "./citiesTypes";

const initialState: CitiesState = {
  cities: [
    {
      value: "moscow",
      name: "Москва",
    },
    {
      value: "spb",
      name: "Санкт-Петербург",
    },
    {
      value: "tula",
      name: "Тула",
    },
    {
      value: "kovrov",
      name: "Ковров",
    },
    {
      value: "ulianosk",
      name: "Ульяновск",
    },
  ],
  savedCities: [],
  currentCity: "",
};

const citiesSlice = createSlice({
  name: "cities",
  initialState,
  reducers: {
    setSavedCities: (state, action: PayloadAction<string[]>) => {
      state.savedCities = action.payload;
    },
    addCity: (state, action: PayloadAction<string>) => {
      const newSavedCities = [...state.savedCities, action.payload];
      state.savedCities = newSavedCities;
      localStorage.setItem("savedCities", JSON.stringify(newSavedCities));
    },
    removeCity: (state, action: PayloadAction<string>) => {
      const newSavedCities = state.savedCities.filter((city) => city !== action.payload);
      state.savedCities = newSavedCities;
      localStorage.setItem("savedCities", JSON.stringify(newSavedCities));
    },
    setCurrentCity: (state, action: PayloadAction<string>) => {
      state.currentCity = action.payload;
    },
  },
});

export const { addCity, removeCity, setCurrentCity, setSavedCities } = citiesSlice.actions;

export default citiesSlice.reducer;
