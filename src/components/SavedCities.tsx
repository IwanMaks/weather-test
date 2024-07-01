import { removeCity, setCurrentCity, setSavedCities } from "@/features/cities/citiesSlice";
import { fetchWeather } from "@/features/weather/weatherSlice";
import { RootState } from "@/store/store";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export const SavedCities = () => {
  const dispatch = useDispatch<any>();
  const savedCities = useSelector((state: RootState) => state.cities.savedCities);
  const activeCity = useSelector((state: RootState) => state.cities.currentCity);
  const activeUnits = useSelector((state: RootState) => state.weather.units);
  const cities = useSelector((state: RootState) => state.cities.cities);

  useEffect(() => {
    const parsedSavedCities: string[] = JSON.parse(localStorage.getItem("savedCities") || "[]");
    dispatch(setSavedCities(parsedSavedCities));
  }, []);

  return (
    <div className="w-full">
      <h1 className="text-xl text-gray-800 font-medium mb-3">Сохранённые города</h1>
      {savedCities.length > 0 ? (
        <div className="grid grid-cols-6 gap-5">
          {savedCities.map((city) => (
            <button
              key={"saved-city-" + city}
              onClick={() => {
                if (activeCity !== city) {
                  const cityObj = cities.find((globalCity) => globalCity.name === city);
                  dispatch(setCurrentCity(city));
                  dispatch(fetchWeather({ city, units: activeUnits }));
                  if (cityObj) {
                    localStorage.setItem("selectedCity", JSON.stringify(cityObj));
                  }
                }
              }}
              className="p-4 rounded-lg bg-white shadow-md relative text-left hover:opacity-80"
            >
              <p className="text-xl text-gray-800 truncate">{city}</p>
              <button
                type="button"
                onClick={() => {
                  dispatch(removeCity(city));
                }}
                className="p-1 rounded-full bg-gray-100 absolute top-2 right-2 hover:bg-gray-300 transition-all"
              >
                <XMarkIcon className="h-3 w-3 text-gray-500" />
              </button>
            </button>
          ))}
        </div>
      ) : (
        <p className="text-lg text-gray-800 w-full text-center py-10">
          Пока нет сохранённых городов
        </p>
      )}
    </div>
  );
};
