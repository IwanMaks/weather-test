import { CitySelector } from "./components/CitySelector";
import { WeatherCard } from "./components/WeatherCard";
import { HoursList } from "./components/HoursList";
import { useSelector } from "react-redux";
import { RootState } from "./store/store";
import { Loading } from "./components/Loading";
import { ErrorState } from "./components/ErrorState";

export const App = () => {
  const status = useSelector((state: RootState) => state.weather.status);

  const returnMainPart = () => {
    if (status === "loading") {
      return (
        <div className="w-full py-24 flex items-center justify-center">
          <Loading color="bg-indigo-500" />
        </div>
      );
    } else if (status === "failed") {
      return (
        <div className="w-full py-24 flex items-center justify-center">
          <ErrorState />
        </div>
      );
    } else if (status === "idle") {
      return null;
    } else {
      return (
        <>
          <WeatherCard />
          <HoursList />
        </>
      );
    }
  };

  return (
    <div className="w-screen min-h-screen bg-gray-50">
      <div className="container mx-auto p-4 space-y-10">
        <header className="w-full flex items-center justify-between">
          <h1 className="text-2xl font-medium">Погода</h1>
          <CitySelector />
        </header>
        {returnMainPart()}
      </div>
    </div>
  );
};
