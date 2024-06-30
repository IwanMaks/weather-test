import { AppDispatch } from "@/store/store";

export interface WeatherData {
  current: {
    name: string;
    weather: { description: string; icon: string; id: number; main: string }[];
    main: {
      feels_like: number;
      grnd_level: number;
      humidity: number;
      pressure: number;
      sea_level: number;
      temp: number;
      temp_max: number;
      temp_min: number;
    };
    base: string;
    clouds: { all: number };
    cod: number;
    coord: { lon: number; lat: number };
    dt: number;
    id: number;
    wind: { speed: number; deg: number; gust: number };
    sys: { type: number; id: number; country: string; sunrise: number; sunset: number };
    timezone: string;
    visibility: string;
    rain?: Record<string, number>;
  };
  hours: {
    cnt: number;
    cod: string;
    message: number;
    city: {
      coord: { lat: number; lon: number };
      country: string;
      id: number;
      name: string;
      population: number;
      sunrise: number;
      sunset: number;
      timezone: number;
    };
    list: HoursListItemType[];
  };
}

export interface HoursListItemType {
  clouds: { all: number };
  dt: number;
  dt_txt: string;
  main: {
    feels_like: number;
    grnd_level: number;
    humidity: number;
    pressure: number;
    sea_level: number;
    temp: number;
    temp_max: number;
    temp_min: number;
  };
  pop: number;
  sys: { pod: string };
  visibility: number;
  weather: [{ id: number; main: string; description: string; icon: string }];
  wind: { speed: number; deg: number; gust: number };
}

export interface WeatherState {
  weatherData: { [key: string]: WeatherData };
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

export interface AsyncThunkConfig {
  state: WeatherState;
  dispatch: AppDispatch;
  extra: unknown;
  rejectValue: string;
}
