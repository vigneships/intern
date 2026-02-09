const API_KEY = 'YOUR_OPENWEATHER_API_KEY';
const BASE_URL = 'https://api.openweathermap.org/data/2.5/';

export async function getWeatherData(city) {
    try {
        const response = await fetch(`${BASE_URL}forecast?q=${city}&units=metric&appid=${API_KEY}`);
        if (!response.ok) throw new Error('City not found');
        return await response.json();
    } catch (error) {
        console.error("Fetch error:", error);
        throw error;
    }
}