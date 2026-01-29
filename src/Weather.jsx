import { useEffect, useState } from "react";

function Weather(){
    const [city, setCity] = useState("");
    const [weather, setWeather] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
     
    
    const API_KEY = "///enter you key //";
    
    const fetchWeather = async ()=>{
        if (!city.trim()) return;
        try {
            setLoading(true);
            
            
            const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );
      if(!res.ok) throw new Error("city not found")
        const data = await res.json();
        setWeather(data);
        setCity("");
        } catch (err) {
            setError(err.message);
      setWeather(null);
        }
        finally{
            setLoading(false);
        }
    };

    
return(
<>
<div className="flex justify-center items-center min-h-screen bg-blue-300">
    <div className="bg-white rounded-2xl shadow-xl w-80 p-8">
        <h1 className="text-center font-bold text-2xl">Weather App</h1>
         <input 
         value={city}
         placeholder="Enter the city name.."
         className="w-full border p-2 rounded-2xl mt-2 mb-2"
         type="text"
         onChange={(e)=>setCity(e.target.value)}
         />
         <button
  onClick={fetchWeather}
  disabled={!city.trim() || loading}
  className="text-center bg-blue-400 w-full rounded-xl p-2
             disabled:opacity-50 disabled:cursor-not-allowed"
>
  Search
</button>
        
         {loading && <p className="text-center mt-3">Loading....</p>}
         {error && <p className="text-center mt-3 text-red-600">{error}</p>}
         {weather && (
            <div className="text-center mt-3">
                <h3 className="text-xl font-semibold">{weather.name}</h3>
                <p className="text-3xl">{weather.main.temp}°C</p>
                <p className="capitalize">{weather.weather[0].description}</p>
                <p className="font-bold text-blue-300">Humidity: {weather.main.humidity}%</p>
                <p className="font-bold text-blue-300">Wind Speed: {weather.wind.speed}m/s</p>
            </div>
         )}
    </div>
</div>
</>
);
}
export default Weather;
