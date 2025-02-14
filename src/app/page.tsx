import GoogleMapLocationComponent from "@/app/shared/components/google-map/GoogleMapLocation";
import GetStarted from '@/app/shared/components/get-started/get-started';
import GymCulture from '@/app/shared/components/gym-culture/gym-culture';

import '@/app/page.scss'
const gymLatitude = 40.6802279; // Replace with actual latitude
const gymLongitude = -73.8839788; // Replace with actual longitude

export default function HomePage() {
  return (

    <div className="home-container">
      <div className="googleMap-container">
        <section>
          <GetStarted />
        </section>
        <section>
          <GymCulture />
        </section>
        <section>
          <GoogleMapLocationComponent />
            {/* Navigation Buttons */}
          <div className="navigation-buttons">
            <a
              href={`https://www.google.com/maps?q=${gymLatitude},${gymLongitude}`}
              target="_blank"
              rel="noopener noreferrer"
              className="map-button google-maps"
            >
              Open in Google Maps
            </a>
            <a
              href={`https://waze.com/ul?ll=${gymLatitude},${gymLongitude}&navigate=yes`}
              target="_blank"
              rel="noopener noreferrer"
              className="map-button waze"
            >
              Open in Waze
            </a>
            <a
              href={`https://maps.apple.com/?ll=${gymLatitude},${gymLongitude}`}
              target="_blank"
              rel="noopener noreferrer"
              className="map-button apple-maps"
            >
              Open in Apple Maps
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
