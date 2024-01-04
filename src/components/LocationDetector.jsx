import React, { useState, useEffect } from 'react';

const LocationDetector = () => {
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
  }, []); // Empty dependency array to run the effect only once on component mount

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
