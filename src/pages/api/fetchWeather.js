import axios from 'axios';

const weatherAPI = (city) => {
  return axios.get(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${process.env.NEXT_PUBLIC_WEATHER_API_KEY}`
  );
};

export default weatherAPI;
