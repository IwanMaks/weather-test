import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchWeather } from "@/features/weather/weatherSlice";
import {
  Combobox,
  ComboboxButton,
  ComboboxInput,
  ComboboxOption,
  ComboboxOptions,
} from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/24/outline";
import { classNames } from "@/helpers/utils";
import { City } from "@/features/cities/citiesTypes";
import { AppDispatch, RootState } from "@/store/store";
import { setCurrentCity } from "@/features/cities/citiesSlice";

export const CitySelector = () => {
  const cities = useSelector((state: RootState) => state.cities.cities);
  const activeUnits = useSelector((state: RootState) => state.weather.units);
  const activeCity = useSelector((state: RootState) => state.cities.currentCity);
  const [query, setQuery] = useState("");
  const dispatch = useDispatch<AppDispatch>();
  const [isFirstLoad, setIsFirstLoad] = useState(true);

  const geocodeCoordinates = async (lat: number, lon: number) => {
    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}`,
      );
      if (!response.ok) {
        throw new Error("Failed to fetch city name");
      }
      const data = await response.json();
      return data.address.city;
    } catch (error) {
      console.error("Geocode error:", error);
      return null;
    }
  };

  const handleAddCity = useCallback(
    (city: City) => {
      if (city) {
        dispatch(setCurrentCity(city.name));
        dispatch(fetchWeather({ city: city.name, units: activeUnits }));
        localStorage.setItem("selectedCity", JSON.stringify(city));
      }
    },
    [dispatch, activeUnits],
  );

  useEffect(() => {
    const savedCity = localStorage.getItem("selectedCity");
    if (savedCity) {
      const parsedCity: City = JSON.parse(savedCity);
      dispatch(setCurrentCity(parsedCity.name));
    } else {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const cityName = await geocodeCoordinates(
            position.coords.latitude,
            position.coords.longitude,
          );
          const foundCity = cities.find(
            (city) => city.name.toLowerCase() === cityName.toLowerCase(),
          );
          if (foundCity) {
            dispatch(setCurrentCity(foundCity.name));
          } else {
            dispatch(setCurrentCity(cities[0].name));
          }
        },
        (error) => {
          console.error(error);
          dispatch(setCurrentCity(cities[0].name));
        },
      );
    }
  }, [dispatch]);

  useEffect(() => {
    if (activeCity) {
      if (isFirstLoad) {
        setIsFirstLoad(false);
      } else {
        const activeCityObj = cities.find((city) => city.name === activeCity);
        if (activeCityObj) handleAddCity(activeCityObj);
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
          dispatch(setCurrentCity(city));
        }
      }}
    >
      <div className="relative">
        <ComboboxInput
          className="w-full rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
          onChange={(event) => setQuery(event.target.value)}
          onBlur={() => setQuery("")}
          displayValue={(city: string) => city}
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
                value={city.name}
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
