import Sun from "@/assets/sun.svg?react";
import CloudySun from "@/assets/cloudy_sun.svg?react";
import Cloudy from "@/assets/cloudy.svg?react";
import SmallCloudy from "@/assets/small_cloud.svg?react";
import RainWeather from "@/assets/rain_weather.svg?react";
import RainSun from "@/assets/small_rain_sun.svg?react";
import Thunderstorm from "@/assets/thunderstorm.svg?react";
import Mist from "@/assets/mist.svg?react";
import Snow from "@/assets/snow.svg?react";
import { ReactNode } from "react";

export const weatherIcon: Record<string, ReactNode> = {
  "01d": <Sun className="w-full h-full" />,
  "02d": <CloudySun className="w-full h-full" />,
  "03d": <SmallCloudy className="w-full h-full" />,
  "04d": <Cloudy className="w-full h-full" />,
  "09d": <RainWeather className="w-full h-full" />,
  "10d": <RainSun className="w-full h-full" />,
  "11d": <Thunderstorm className="w-full h-full" />,
  "13d": <Snow className="w-full h-full" />,
  "50d": <Mist className="w-full h-full" />,

  "01n": <Sun className="w-full h-full" />,
  "02n": <CloudySun className="w-full h-full" />,
  "03n": <SmallCloudy className="w-full h-full" />,
  "04n": <Cloudy className="w-full h-full" />,
  "09n": <RainWeather className="w-full h-full" />,
  "10n": <RainSun className="w-full h-full" />,
  "11n": <Thunderstorm className="w-full h-full" />,
  "13n": <Snow className="w-full h-full" />,
  "50n": <Mist className="w-full h-full" />,
};

export const windDirection = (deg: number) => {
  if (deg >= 0 && deg < 45) {
    return "северный";
  } else if (deg >= 45 && deg < 90) {
    return "северо-восточный";
  } else if (deg >= 90 && deg < 135) {
    return "восточный";
  } else if (deg >= 135 && deg < 180) {
    return "юго-восточный";
  } else if (deg >= 180 && deg < 225) {
    return "южный";
  } else if (deg >= 225 && deg < 270) {
    return "юго-западный";
  } else if (deg >= 270 && deg < 315) {
    return "западный";
  } else if (deg >= 315 && deg < 360) {
    return "северо-западный";
  } else if (deg >= 360) {
    return "северный";
  } else return "";
};

export const HPaToMMHg = 0.75006375541921;
