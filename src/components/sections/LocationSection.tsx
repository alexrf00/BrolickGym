import { MapPin, Clock, Phone, Calendar } from "lucide-react"
import React from "react"
import { Button } from "@/components/ui/button"
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
const containerStyle = {
  width: "100%",
  height: "100%", 
};

const gymLocation = {
  lat: 40.6802279, 
  lng: -73.8839788, 
};
const GOOGLE_MAPS_API_KEY = process.env.NEXT_PUBLIC_MAP_PLATFORM_API_KEY || "";
export default function LocationSection() {
  return (
    <section id="location" className="py-20 bg-gray-800">
      <div className="flex flex-col container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-white">Find Us</h2>
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="w-full md:w-1/2 mb-8 md:mb-0">
            <div className="bg-gray-700 rounded-lg h-80 w-full flex items-center justify-center overflow-hidden">
              <LoadScript googleMapsApiKey={GOOGLE_MAPS_API_KEY}>
                <GoogleMap mapContainerStyle={containerStyle} center={gymLocation} zoom={15} options={{
                  streetViewControl: false,
                }}>
                  <Marker position={gymLocation} />
                </GoogleMap>
              </LoadScript>
            </div>
          </div>
          <div className="w-full md:w-1/2 md:pl-12">
            <h3 className="text-2xl font-semibold text-white mb-4">GymFlex Location</h3>
            <div className="space-y-4">
              <p className="flex items-center text-white">
                <MapPin className="mr-2 text-primary" />
                123 Fitness Street, Muscle City, ST 12345
              </p>
              <p className="flex items-center text-white">
                <Phone className="mr-2 text-primary" />
                (555) 123-4567
              </p>
              <div className="flex items-start text-white">
                <Clock className="mr-2 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold">Working Hours:</p>
                  <p className="flex items-center">
                    <Calendar className="mr-2 text-primary" size={16} />
                    Monday - Friday: 5am - 11pm
                  </p>
                  <p className="flex items-center">
                    <Calendar className="mr-2 text-primary" size={16} />
                    Saturday - Sunday: 7am - 8pm
                  </p>
                </div>
              </div>
            </div>
            <Button
              variant="outline"
              className="bg-transparent text-white border-primary hover:bg-primary hover:text-white transition-colors duration-300"
            >
              Get Directions
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

