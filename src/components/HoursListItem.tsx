import { unitsToSymbol, weatherIcon } from "@/appConstants";
import { HoursListItemType } from "@/features/weather/weatherTypes";
import { RootState } from "@/store/store";
import { useSelector } from "react-redux";

interface HoursListItemProps {
  state: HoursListItemType;
}

export const HoursListItem = ({ state }: HoursListItemProps) => {
  const activeUnits = useSelector((state: RootState) => state.weather.units);

  const returnWeatherTime = () => {
    // Возвращает время в формате HH:MM из HH:MM:SS
    return state.dt_txt.split(" ")[1].slice(0, -3);
  };

  const returnWeatherDate = () => {
    //Возвращает дату в формате DD.MM.YYYY из YYYY-MM-DD
    const fullDate = state.dt_txt.split(" ")[0].split("-");
    const year = fullDate[0];
    const month = fullDate[1];
    const day = fullDate[2];
    return `${day}.${month}.${year}`;
  };

  return (
    <li className="p-3 rounded-lg flex flex-col items-start bg-indigo-100 min-w-[200px] flex-1">
      <div>
        <p className="text-gray-800 text-lg">{returnWeatherTime()}</p>
        <p className="text-gray-400 text-base">{returnWeatherDate()}</p>
      </div>

      <div className="my-3">
        <div className="h-12 w-12">{weatherIcon[state.weather[0].icon]}</div>
        <p className="text-gray-800 text-lg">
          {Math.floor(state.main.temp)}°{unitsToSymbol[activeUnits].temp}
        </p>
        <p className="text-gray-400 text-base">
          Ощущается как {Math.floor(state.main.feels_like)}°{unitsToSymbol[activeUnits].temp}
        </p>
      </div>

      <p className="text-gray-400 text-sm capitalize justify-self-end mt-auto">
        {state.weather[0].description}
      </p>
    </li>
  );
};
