import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/store";
import Thermometer from "@/assets/thermometer.svg?react";
import Rain from "@/assets/rain.svg?react";
import Pressure from "@/assets/pressure.svg?react";
import Wind from "@/assets/wind.svg?react";
import { Stat } from "./Stat";
import { HPaToMMHg, unitsToSymbol, weatherIcon, windDirection } from "@/appConstants";
import { StarIcon } from "@heroicons/react/20/solid";
import { addCity, removeCity } from "@/features/cities/citiesSlice";

export const WeatherCard = () => {
  const dispatch = useDispatch<any>();
  const weatherData = useSelector((state: RootState) => state.weather.weatherData);
  const currentCity = useSelector((state: RootState) => state.cities.currentCity);
  const savedCities = useSelector((state: RootState) => state.cities.savedCities);
  const activeUnits = useSelector((state: RootState) => state.weather.units);

  return (
    <div className="flex w-full items-stretch justify-between space-x-10">
      {currentCity && weatherData[currentCity] ? (
        <>
          <div className="w-1/3 p-4 rounded-lg shadow-lg flex flex-col justify-center bg-white">
            <div className="w-full flex items-center justify-between text-indigo-500">
              <h1 className="text-7xl">
                {Math.floor(weatherData[currentCity].current.main.temp)}°
                {unitsToSymbol[activeUnits].temp}
              </h1>

              <div className="h-32 w-32">
                {weatherIcon[weatherData[currentCity].current.weather[0].icon]}
              </div>
            </div>
            <div className="w-full">
              <p className="text-gray-400 text-lg">
                Время: {new Date().getHours()}:{new Date().getMinutes()}
              </p>
              <div className="flex items-center space-x-2">
                <p className="text-gray-400 text-lg">Город: {currentCity}</p>
                {savedCities.includes(currentCity) ? (
                  <button
                    type="button"
                    onClick={() => {
                      dispatch(removeCity(currentCity));
                    }}
                  >
                    <StarIcon className="h-5 w-5 text-yellow-400" />
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={() => {
                      dispatch(addCity(currentCity));
                    }}
                  >
                    <StarIcon className="h-5 w-5 text-gray-400" />
                  </button>
                )}
              </div>
            </div>
          </div>
          <div className="w-2/3 p-4 rounded-lg shadow-lg bg-white">
            <div className="grid grid-cols-[60px_minmax(0,_1fr)_minmax(0,_3fr)] items-center gap-y-6">
              <Stat
                icon={<Thermometer className="h-8 w-8" />}
                label="Температура"
                value={`${Math.floor(weatherData[currentCity].current.main.temp)}°${
                  unitsToSymbol[activeUnits].temp
                } ощущается как ${Math.floor(weatherData[currentCity].current.main.feels_like)}°${
                  unitsToSymbol[activeUnits].temp
                }`}
              />
              <Stat
                icon={<Pressure className="h-8 w-8" />}
                label="Давление"
                value={`${Math.floor(
                  weatherData[currentCity].current.main.pressure * HPaToMMHg,
                )} мм ртутного столба`}
              />
              <Stat
                icon={<Rain className="h-8 w-8" />}
                label="Осадки"
                value={
                  weatherData[currentCity].current.rain
                    ? `${weatherData[currentCity].current.rain!["1h"]} мм`
                    : "Без осадков"
                }
              />
              <Stat
                icon={<Wind className="h-8 w-8" />}
                label="Ветер"
                value={`${Math.floor(weatherData[currentCity].current.wind.speed)} ${
                  unitsToSymbol[activeUnits].speed
                } ${windDirection(weatherData[currentCity].current.wind.deg)}`}
              />
            </div>
          </div>
        </>
      ) : (
        <p className="text-3xl mx-auto">Выберите город, чтобы увидеть погоду</p>
      )}
    </div>
  );
};
