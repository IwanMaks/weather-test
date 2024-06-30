import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import Thermometer from "@/assets/thermometer.svg?react";
import Rain from "@/assets/rain.svg?react";
import Pressure from "@/assets/pressure.svg?react";
import Wind from "@/assets/wind.svg?react";
import { Stat } from "./Stat";
import { HPaToMMHg, weatherIcon, windDirection } from "@/appConstants";

export const WeatherCard = () => {
  const weatherData = useSelector((state: RootState) => state.weather.weatherData);
  const currentCity = useSelector((state: RootState) => state.weather.currentCity);

  return (
    <div className="flex w-full items-stretch justify-between space-x-10">
      {currentCity && weatherData[currentCity] ? (
        <>
          <div className="w-1/3 p-4 rounded-lg shadow-lg flex flex-col justify-center bg-white">
            <div className="w-full flex items-center justify-between text-indigo-500">
              <h1 className="text-7xl">
                {Math.floor(weatherData[currentCity].current.main.temp)}°
              </h1>

              <div className="h-32 w-32">
                {weatherIcon[weatherData[currentCity].current.weather[0].icon]}
              </div>
            </div>
            <div className="w-full">
              <p className="text-gray-400 text-lg">
                Время: {new Date().getHours()}:{new Date().getMinutes()}
              </p>
              <p className="text-gray-400 text-lg">Город: {currentCity}</p>
            </div>
          </div>
          <div className="w-2/3 p-4 rounded-lg shadow-lg bg-white">
            <div className="grid grid-cols-[60px_minmax(0,_1fr)_minmax(0,_3fr)] items-center gap-y-6">
              <Stat
                icon={<Thermometer className="h-8 w-8" />}
                label="Температура"
                value={`${Math.floor(
                  weatherData[currentCity].current.main.temp,
                )}° ощущается как ${Math.floor(weatherData[currentCity].current.main.feels_like)}°`}
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
                value={`${Math.floor(
                  weatherData[currentCity].current.wind.speed,
                )} м/c ${windDirection(weatherData[currentCity].current.wind.deg)}`}
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
