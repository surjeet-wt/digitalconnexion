import { MapContainer, TileLayer,Marker,Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css'
import "leaflet-defaulticon-compatibility";

const Map = () => {
  const cluster1Markers = [
    {
      geocode: [33.7490, -84.3880],
      popUp: "Atlanta",
    },
    {
      geocode: [30.2672, -97.7431],
      popUp: "Austin",
    },
    {
      geocode: [42.3601, -71.0589],
      popUp: "Boston",
    },
    {
      geocode: [35.2271, -80.8431],
      popUp: "Charlotte",
    },
    {
      geocode: [41.8781, -87.6298],
      popUp: "Chicago",
    },
    {
      geocode: [32.7767, -96.7970],
      popUp: "Dallas",
    },
    {
      geocode: [-3.8480, -38.4899],
      popUp: "Fortaleza",
    },
    {
      geocode: [29.7604, -95.3698],
      popUp: "Houston",
    },
    {
      geocode: [34.0522, -118.2437],
      popUp: "Los Angeles",
    },
    {
      geocode: [25.7617, -80.1918],
      popUp: "Miami",
    },
    {
      geocode: [40.7128, -74.0060],
      popUp: "New York",
    },
    {
      geocode: [38.9072, -77.0370],
      popUp: "Northern Virginia",
    },
    {
      geocode: [33.4484, -112.0740],
      popUp: "Phoenix",
    },
    {
      geocode: [45.5051, -122.6750],
      popUp: "Portland",
    },
    {
      geocode: [20.5881, -100.3890],
      popUp: "Querétaro",
    },
    {
      geocode: [22.3193, 114.1694],
      popUp: "Hong Kong",
    },
    {
      geocode: [-37.8136, 144.9631],
      popUp: "Melbourne",
    },
    {
      geocode: [34.6937, 135.5023],
      popUp: "Osaka",
    },
    {
      geocode: [37.5665, 126.9780],
      popUp: "Seoul",
    },
    {
      geocode: [1.3521, 103.8198],
      popUp: "Singapore",
    },
    {
      geocode: [-33.8688, 151.2093],
      popUp: "Sydney",
    },
    {
      geocode: [35.6762, 139.6503],
      popUp: "Tokyo",
    },
    {
      geocode: [9.0579, 7.4951],
      popUp: "Abuja",
    },
    {
      geocode: [52.3667, 4.8945],
      popUp: "Amsterdam",
    },
    {
      geocode: [37.9838, 23.7275],
      popUp: "Athens",
    },
    {
      geocode: [50.8503, 4.3517],
      popUp: "Brussels",
    },
    {
      geocode: [-33.9249, 18.4241],
      popUp: "Cape Town",
    },
    {
      geocode: [55.6761, 12.5683],
      popUp: "Copenhagen",
    },
    {
      geocode: [53.3498, -6.2603],
      popUp: "Dublin",
    },
    {
      geocode: [-29.8587, 31.0218],
      popUp: "Durban",
    },
    {
      geocode: [51.2277, 6.7735],
      popUp: "Düsseldorf",
    },
    {
      geocode: [50.1109, 8.6821],
      popUp: "Frankfurt",
    },
    {
      geocode: [-26.2041, 28.0473],
      popUp: "Johannesburg",
    },
    {
      geocode: [6.5244, 3.3792],
      popUp: "Lagos",
    },
    {
      geocode: [51.5074, -0.1278],
      popUp: "London",
    },
    {
      geocode: [40.4168, -3.7038],
      popUp: "Madrid",
    },
    {
      geocode: [43.2965, 5.3698],
      popUp: "Marseille",
    },
    {
      geocode: [-4.0435, 39.6682],
      popUp: "Mombasa",
    },
    {
      geocode: [-1.2864, 36.8172],
      popUp: "Nairobi",
    },
    {
      geocode: [48.8566, 2.3522],
      popUp: "Paris",
    },
    {
      geocode: [59.3293, 18.0686],
      popUp: "Stockholm",
    },
    {
      geocode: [48.2082, 16.3738],
      popUp: "Vienna",
    },
    {
      geocode: [45.8150, 15.9819],
      popUp: "Zagreb",
    },
    {
      geocode: [47.3769, 8.5417],
      popUp: "Zürich",
    },
 ];
 
 
  return (
    <>
  <MapContainer
        center={[20.5937, 78.9629]}
        zoom={2}
        scrollWheelZoom={true}
        style={{ height: "100%", width: "100%" }}
      >
        {cluster1Markers.map((marker, index) => (
          <Marker
            key={index}
            position={marker.geocode}
            draggable={false}
            animate={true}
          >
            <Popup>{marker.popUp}</Popup>
          </Marker>
        ))}
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url='https://api.maptiler.com/maps/basic-v2/256/{z}/{x}/{y}.png?key=6PF1iS4npa12XuHMtMmm'
        />
      </MapContainer>
    </>
  )
}

export default Map