import React, { useState } from "react";

function WeatherDashboard() {
    const [city, setCity] = useState("");
    const [weather, setWeather] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const API_KEY = "14509f6ffc69de77ed9162eb579f270d"; // Your OpenWeatherMap API Key

    const getWeather = async () => {
        if (!city) return;
        setLoading(true);
        setError("");
        setWeather(null);

        try {
            const response = await fetch(
                `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
            );
            if (!response.ok) throw new Error("City not found");
            const data = await response.json();
            setWeather(data);
        } catch (err) {
            setError(err.message);
        }
        setLoading(false);
    };

    return (
        <div style={{
            minHeight: "100vh",
            background: "linear-gradient(135deg,#74ebd5,#ACB6E5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontFamily: "Arial"
        }}>
            <div style={{
                background: "white",
                padding: "40px",
                borderRadius: "15px",
                width: "350px",
                textAlign: "center",
                boxShadow: "0 10px 25px rgba(0,0,0,0.2)"
            }}>
                <h1 style={{color:"#333"}}>🌤 Weather Dashboard</h1>
                <input
                    type="text"
                    placeholder="Enter city name"
                    value={city}
                    onChange={(e)=>setCity(e.target.value)}
                    style={{padding:"10px", width:"80%", borderRadius:"8px", border:"1px solid #ccc", marginBottom:"15px"}}
                />
                <br/>
                <button onClick={getWeather} style={{padding:"10px 20px", background:"#4CAF50", color:"white", border:"none", borderRadius:"8px", cursor:"pointer"}}>Get Weather</button>
                
                {loading && <p style={{marginTop:"20px"}}>⏳ Loading...</p>}
                {error && <p style={{color:"red",marginTop:"20px"}}>{error}</p>}
                
                {weather && (
                    <div style={{marginTop:"25px", padding:"20px", background:"#f5f5f5", borderRadius:"10px"}}>
                        <h2>{weather.name}</h2>
                        <h1 style={{color:"#0077ff"}}>{weather.main.temp}°C</h1>
                        <p style={{textTransform:"capitalize"}}>{weather.weather[0].description}</p>
                        <p>Humidity: {weather.main.humidity}%</p>
                        <p>Wind Speed: {weather.wind.speed} m/s</p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default WeatherDashboard;