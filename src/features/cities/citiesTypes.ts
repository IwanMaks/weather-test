export interface CitiesState {
  cities: City[];
  savedCities: string[];
  currentCity: string;
}

export interface City {
  value: string;
  name: string;
}
