import { weatherIcon } from "@/appConstants";
import { HoursListItemType } from "@/features/weather/weatherTypes";

interface HoursListItemProps {
  state: HoursListItemType;
}

export const HoursListItem = ({ state }: HoursListItemProps) => {
  const returnWeatherTime = () => {
    return state.dt_txt.split(" ")[1].slice(0, -3);
  };

  const returnWeatherDate = () => {
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
        <p className="text-gray-800 text-lg">{Math.floor(state.main.temp)}°</p>
        <p className="text-gray-400 text-base">
          Ощущается как {Math.floor(state.main.feels_like)}°
        </p>
      </div>

      <p className="text-gray-400 text-sm capitalize justify-self-end mt-auto">
        {state.weather[0].description}
      </p>
    </li>
  );
};
