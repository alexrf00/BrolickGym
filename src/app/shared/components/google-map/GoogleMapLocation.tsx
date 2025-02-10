"use client";

import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "300px", // Adjust height as needed
};

const gymLocation = {
  lat: 40.712776, // Replace with actual latitude
  lng: -74.005974, // Replace with actual longitude
};

const GOOGLE_MAPS_API_KEY = process.env.SECRET_GOOGLE_MAPS_API || "";

const GoogleMapComponent = () => {
  return (
    <LoadScript googleMapsApiKey={GOOGLE_MAPS_API_KEY}>
      <GoogleMap mapContainerStyle={containerStyle} center={gymLocation} zoom={15}>
        <Marker position={gymLocation} />
      </GoogleMap>
    </LoadScript>
  );
};

export default GoogleMapComponent;
