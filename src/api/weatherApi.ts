import axios from "axios";

const API_KEY = "85f024b963ef4770321b28440a15358a"; // Замените на ваш ключ API

export const getWeatherByCity = async (city: string, units: string) => {
  // Запрос на получения данных погоды в конкретный момент времени
  const response = await axios.get(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=${units}&lang=ru`,
  );
  // Запрос на получения данных погоды в разные моменты времени (на 8 часов вперёд)
  const responseHours = await axios.get(
    `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&cnt=8&units=${units}&lang=ru`,
  );

  return { current: response.data, hours: responseHours.data };
};
