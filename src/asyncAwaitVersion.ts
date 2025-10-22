import http from 'https';

async function geocodeCity(city: string): Promise<{lat: number, lon: number} | null> {
    return new Promise((resolve, reject) => {
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
                    resolve({lat, lon});
                } else {
                    resolve(null);
                }
            });
        }).on('error', (err) => {
            console.error('Geocoding error:', err);
            reject(err);
        });
    });
}

// Refactor Promise code to use async/await
export async function fetchWeatherData(city: string): Promise<{data: any, cityName: string}> {
    const coords = await geocodeCity(city);
    if (!coords) {
        return {data: null, cityName: city};
    }
    const apiKey = 'YOUR_API_KEY';
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${coords.lat}&longitude=${coords.lon}&current_weather=true`;
    return new Promise((resolve, reject) => {
        http.get(url, (res) => {
            let data = '';
            res.on('data', (chunk) => {
                data += chunk;
            });
            res.on('end', () => {
                resolve({data: JSON.parse(data), cityName: city});
            });
        }).on('error', (err) => {
            console.error(err);
            reject(err);
        });
    });
}
export async function fetchNews(): Promise<any> {       
    const apiKey = 'YOUR_API_KEY';
    const url = `https://dummyjson.com/posts`;
    return new Promise((resolve, reject) => {
        http.get(url, (res) => {
            let data = '';  
            res.on('data', (chunk) => {
                data += chunk;
            });
            res.on('end', () => {
                resolve(JSON.parse(data));
            });
        }).on('error', (err) => {
            console.error(err);
            reject(err);
        });
    });
}

// Example usage:
async function displayData() {
    try {
        const city = process.argv[2] || 'Durban';
        const result = await fetchWeatherData(city);
        if (result.data) {
            const weather = result.data.current_weather;
            console.log(`Weather in ${result.cityName}:\nTemperature: ${weather.temperature}°C\nWindspeed: ${weather.windspeed} km/h\nTime: ${weather.time}`);
        } else {
            console.log(`Could not fetch weather data for ${result.cityName}`);
        }
        const newsData = await fetchNews();
        console.log('News Data:', newsData);
    } catch (error) {
        console.error('Error:', error);
    }
}

displayData();
