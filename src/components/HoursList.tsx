import { RootState } from "@/store/store";
import { useSelector } from "react-redux";
import { HoursListItem } from "./HoursListItem";

export const HoursList = () => {
  const weatherData = useSelector((state: RootState) => state.weather.weatherData);
  const currentCity = useSelector((state: RootState) => state.weather.currentCity);

  return (
    <ul className="w-full flex items-stretch space-x-5 overflow-auto p-4 shadow-md rounded-lg bg-white">
      {currentCity && weatherData[currentCity] ? (
        <>
          {weatherData[currentCity].hours.list.map((state, i) => {
            return (
              <HoursListItem
                state={state}
                key={"hours-list-" + i}
              />
            );
          })}
        </>
      ) : null}
    </ul>
  );
};
