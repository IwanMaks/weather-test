import { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { fetchWeather, addCity, setCurrentCity } from "@/features/weather/weatherSlice";
import {
  Combobox,
  ComboboxButton,
  ComboboxInput,
  ComboboxOption,
  ComboboxOptions,
} from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/24/outline";
import { classNames } from "@/helpers/utils";

interface City {
  value: string;
  name: string;
}

const cities: City[] = [
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
];

export const CitySelector = () => {
  const [activeCity, setActiveCity] = useState<City | null>(null);
  const [query, setQuery] = useState("");
  const dispatch = useDispatch<any>();
  const [isFirstLoad, setIsFirstLoad] = useState(true);

  const handleAddCity = useCallback(
    (city: City) => {
      if (city) {
        dispatch(addCity(city.name));
        dispatch(setCurrentCity(city.name));
        dispatch(fetchWeather(city.name));
        localStorage.setItem("selectedCity", JSON.stringify(city));
      }
    },
    [dispatch],
  );

  useEffect(() => {
    const savedCity = localStorage.getItem("selectedCity");
    if (savedCity) {
      const parsedCity: City = JSON.parse(savedCity);
      setActiveCity(parsedCity);
      dispatch(setCurrentCity(parsedCity.name));
    } else {
      setActiveCity(cities[0]);
      dispatch(setCurrentCity(cities[0].name));
    }
  }, [dispatch]);

  useEffect(() => {
    if (activeCity) {
      if (isFirstLoad) {
        setIsFirstLoad(false);
      } else {
        handleAddCity(activeCity);
      }
    }
  }, [activeCity, handleAddCity, isFirstLoad]);

  const filteredCities =
    query === ""
      ? cities
      : cities.filter((city) => {
          return city.name.toLowerCase().includes(query.toLowerCase());
        });

  return (
    <Combobox
      as="div"
      value={activeCity}
      onChange={(city) => {
        setQuery("");
        if (city) {
          setActiveCity(city);
        }
      }}
    >
      <div className="relative mt-1">
        <ComboboxInput
          className="w-full rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
          onChange={(event) => setQuery(event.target.value)}
          onBlur={() => setQuery("")}
          displayValue={(city: City) => city?.name}
        />
        <ComboboxButton className="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none">
          <ChevronUpDownIcon
            className="h-5 w-5 text-gray-400"
            aria-hidden="true"
          />
        </ComboboxButton>

        {filteredCities.length > 0 && (
          <ComboboxOptions className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
            {filteredCities.map((city) => (
              <ComboboxOption
                key={"city-" + city.value}
                value={city}
                className={({ focus }) =>
                  classNames(
                    "relative cursor-default select-none py-2 pl-8 pr-4",
                    focus ? "bg-indigo-600 text-white" : "text-gray-900",
                  )
                }
              >
                {({ focus, selected }) => (
                  <>
                    <span className={classNames("block truncate", selected && "font-semibold")}>
                      {city.name}
                    </span>

                    {selected && (
                      <span
                        className={classNames(
                          "absolute inset-y-0 left-0 flex items-center pl-1.5",
                          focus ? "text-white" : "text-indigo-600",
                        )}
                      >
                        <CheckIcon
                          className="h-5 w-5"
                          aria-hidden="true"
                        />
                      </span>
                    )}
                  </>
                )}
              </ComboboxOption>
            ))}
          </ComboboxOptions>
        )}
      </div>
    </Combobox>
  );
};
