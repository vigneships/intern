import { getWeatherData } from './api6.js';
import { storage } from './storage6.js';

const searchForm = document.querySelector('#search-form');
const cityInput = document.querySelector('#city-input');
const forecastContainer = document.querySelector('#forecast');

async function updateUI(city) {
    showLoading(true);
    try {
        const data = await getWeatherData(city);
        renderCurrentWeather(data.list[0], data.city.name);
        renderForecast(data.list);
        storage.saveCity(city);
    } catch (err) {
        alert(err.message);
    } finally {
        showLoading(false);
    }
}

// Event Listeners
searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    updateUI(cityInput.value);
});

// Init on load
window.addEventListener('DOMContentLoaded', () => {
    const lastCity = storage.getLastCity();
    updateUI(lastCity);
});