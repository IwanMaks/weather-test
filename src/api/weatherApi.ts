import axios from "axios";

const API_KEY = "85f024b963ef4770321b28440a15358a"; // Замените на ваш ключ API

export const getWeatherByCity = async (city: string) => {
  const response = await axios.get(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`,
  );
  return response.data;
};
