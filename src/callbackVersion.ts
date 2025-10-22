import { log } from 'console';
import http from 'https';

function geocodeCity(city: string, callback: (lat: number | null, lon: number | null) => void): void {
    const url = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(city)}`;
    const options = {
        headers: {
            'User-Agent': 'WeatherDashboard/1.0'
        }
    };
    http.get(url, options, (res) => {
        let data = '';
        res.on('data', (chunk) => {
            data += chunk;
        });
        res.on('end', () => {
            const results = JSON.parse(data);
            if (results.length > 0) {
                const lat = parseFloat(results[0].lat);
                const lon = parseFloat(results[0].lon);
                callback(lat, lon);
            } else {
                callback(null, null);
            }
        });
    }).on('error', (err) => {
        console.error('Geocoding error:', err);
        callback(null, null);
    });
}

function fetchWeatherData(city: string, callback: (data: any, cityName: string) => void): void {
    geocodeCity(city, (lat, lon) => {
        if (lat === null || lon === null) {
            callback(null, city);
            return;
        }
        const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`;

        http.get(url, (res) => {
            let data = '';
            res.on('data', (chunk) => {
                data += chunk;
            });
            res.on('end', () => {
                callback(JSON.parse(data), city);
            });
        }).on('error', (err) => {
            console.error(err);
            callback(null, city);
        });
    });
}

function fetchNews(callback: (data: any) => void): void {
    const apiKey = 'YOUR_API_KEY';
    const url = `https://dummyjson.com/posts`;
    http.get(url, (res) => {
        let data = '';
        res.on('data', (chunk) => {
            data += chunk;
        });
        res.on('end', () => {
            callback(JSON.parse(data));
        });
    }).on('error', (err) => {
        console.error(err);
        callback(null);
    });
}

const city = process.argv[2] || 'Durban';

fetchWeatherData(city, (weatherData, cityName) => {
    if (weatherData) {
        const weather = weatherData.current_weather;
        log(`Weather in ${cityName}:\nTemperature: ${weather.temperature}°C\nWindspeed: ${weather.windspeed} km/h\nTime: ${weather.time}`);
        fetchNews((newsData) => {
            if (newsData) {
                log('News Data:', newsData);
            }
        });
    } else {
        log(`Could not fetch weather data for ${cityName}`);
    }
});





