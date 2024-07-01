import axios from "axios";

const API_KEY = "85f024b963ef4770321b28440a15358a"; // Замените на ваш ключ API

export const getWeatherByCity = async (city: string, units: string) => {
  const response = await axios.get(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=${units}&lang=ru`,
  );
  const responseHours = await axios.get(
    `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&cnt=8&units=${units}&lang=ru`,
  );

  return { current: response.data, hours: responseHours.data };
};
