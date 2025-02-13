"use client";

import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import '@/app/shared/components/google-map/googleMapLocation.scss'
const containerStyle = {
  width: "100%",
  height: "300px", // Adjust height as needed
};

const gymLocation = {
  lat: 40.6802279, // Replace with actual latitude
  lng: -73.8839788, // Replace with actual longitude
};

const GOOGLE_MAPS_API_KEY = process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY || "";

const GoogleMapLocation = () => {
  return (
    <LoadScript googleMapsApiKey={GOOGLE_MAPS_API_KEY}>
      <GoogleMap mapContainerStyle={containerStyle} center={gymLocation} zoom={15}  options={{
          streetViewControl: false,
          
        }}>
            <Marker position={gymLocation} />
        </GoogleMap>
    </LoadScript>
  );
};

export default GoogleMapLocation;
