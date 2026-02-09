const STORAGE_KEY = 'weather_dashboard_prefs';

export const storage = {
    saveCity(city) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify({ lastCity: city }));
    },
    getLastCity() {
        const prefs = localStorage.getItem(STORAGE_KEY);
        return prefs ? JSON.parse(prefs).lastCity : 'London'; // Default
    }
};