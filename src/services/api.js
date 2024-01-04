import axios from 'axios'


const API_key = '4dd1498610b94b56ac1112312240201';
const API_URL = 'http://api.weatherapi.com/v1';

const latitude = 22.3347936
const longitude = 73.1939497



export const getWeather = async (city, country) => {
    try {
        let response = await axios.get(`${API_URL}/forecast.json?key=${API_key}&q=${city},${country}&days=7`);
        return response.data;
    } catch(error) {
        console.log('Error while calling the api', error.message);
        return error.message
    }
}


export const getUsingLatLong = async (latitude, longitude) => {
    try {
        let response = await axios.get(`${API_URL}/forecast.json?key=${API_key}&q=${latitude},${longitude}&days=7`);
        return response.data;
    } catch(error) {
        console.log('Error while calling the api', error.message);
        return error.message
    }
}

