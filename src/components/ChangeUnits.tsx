import { units } from "@/appConstants";
import { changeMetric, fetchWeather } from "@/features/weather/weatherSlice";
import { classNames } from "@/helpers/utils";
import { AppDispatch, RootState } from "@/store/store";
import { Radio, RadioGroup } from "@headlessui/react";
import { useDispatch, useSelector } from "react-redux";

export const ChangeUnits = () => {
  const dispatch = useDispatch<AppDispatch>();
  const activeUnits = useSelector((state: RootState) => state.weather.units);
  const currentCity = useSelector((state: RootState) => state.cities.currentCity);

  return (
    <RadioGroup
      value={activeUnits}
      onChange={(v) => {
        dispatch(changeMetric(v));
        dispatch(fetchWeather({ city: currentCity, units: v }));
      }}
      className="grid grid-cols-2 gap-3"
    >
      {units.map((unit) => (
        <Radio
          key={"unit-" + unit.id}
          value={unit.value}
          className={({ focus, checked }) =>
            classNames(
              focus ? "ring-2 ring-indigo-600 ring-offset-2" : "",
              checked
                ? "bg-indigo-600 text-white hover:bg-indigo-500"
                : "bg-white text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50",
              "flex items-center justify-center rounded-md px-3 py-2 text-sm font-semibold uppercase sm:flex-1 cursor-pointer focus:outline-none",
            )
          }
        >
          {unit.name}
        </Radio>
      ))}
    </RadioGroup>
  );
};
