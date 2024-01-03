import axios from 'axios'


const API_key = '4dd1498610b94b56ac1112312240201';
const API_URL = 'http://api.weatherapi.com/v1';

// http://api.weatherapi.com/v1/current.json?key=<YOUR_API_KEY>&q=London

export const getWeather = async (city, country) => {
    try {
        let response = await axios.get(`${API_URL}/forecast.json?key=${API_key}&q=${city},${country}&days=7`);
        return response.data;
    } catch(error) {
        console.log('Error while calling the api', error.message);
        return error.message
    }
}