import React, { useState, useEffect } from 'react';
import { getUsingLatLong } from "../services/api";

const LocationDetector = ({setCityName}) => {
  const [location, setLocation] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            setLocation({
              latitude: position.coords.latitude,
              longitude: position.coords.longitude,
            });
          },
          (error) => {
            setError(`Error getting location: ${error.message}`);
          }
        );
      } else {
        setError('Geolocation is not supported by your browser.');
      }
    };

    getLocation();
  }, []); 

  const getWeather = async (lat,lang) => {
    let response = await getUsingLatLong(lat, lang)
    setCityName(response)
  }

  useEffect(() => {
    if(location){
      getWeather(location.latitude, location.longitude)
    }
  },[location])

  return (
    <div>
      {location ? (
        <p>
          Your current location is: {location.latitude}, {location.longitude}
        </p>
      ) : (
        <p>{error || 'Fetching location...'}</p>
      )}
    </div>
  );
};

export default LocationDetector;
