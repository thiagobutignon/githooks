import React, { useState, useEffect } from "react";

export default function Gps() {
  const [location, setLocation] = useState({});

  useEffect(() => {
    const watchId = navigator.geolocation.watchPosition(handlePostionReceiver);
    return () => navigator.geolocation.clearWatch(watchId);
  }, []);

  function handlePostionReceiver({ coords }) {
    const { latitude, longitude } = coords;
    setLocation({ latitude, longitude });
  }

  return (
    <>
      <h1>Sua localização atual é:</h1>
      <p>
        Latitude: {location.latitude} <br />
        Longitude: {location.longitude}
      </p>
      <h2>Cuidado, você está sendo vigiado!</h2>
    </>
  );
}
