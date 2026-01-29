import { useState, useEffect } from "react";

function Weather() {
  const [city, setCity] = useState("Delhi");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchWeather();
  }, [city]);
const API_KEY = "e37ad07060312af386e4ad4f9fb5d988";
  const fetchWeather = async () => {
    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );

      const data = await res.json();

      if (!res.ok) throw new Error(data.message);

      setWeather(data);
      setError("");
    } catch (err) {
      setError(err.message);
      setWeather(null);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-100">
      <div className="bg-white p-8 rounded-xl shadow-lg w-80 text-center">
        <h2 className="text-2xl font-bold mb-4">Weather 🌦️</h2>

        <input
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="border p-2 w-full rounded mb-4"
        />

        {error && <p className="text-red-600">{error}</p>}

        {weather && (
          <>
            <h3 className="text-xl font-semibold">{weather.name}</h3>
            <p>Temp: {weather.main.temp}°C</p>
            <p>Humidity: {weather.main.humidity}%</p>
          </>
        )}
      </div>
    </div>
  );
}

export default Weather;
