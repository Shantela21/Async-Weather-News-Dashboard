import { log } from 'console';
import http from 'http';
 
function fetchWeatherData(city: string, callback: (data: any) => void): void {
    const apiKey = 'YOUR_API_KEY';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

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

function fetchNews(callback: (data: any) => void): void {
    const apiKey = 'YOUR_API_KEY';
    const url = `https://dummyjson.com/posts+${apiKey}`;
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



// Example usage:
