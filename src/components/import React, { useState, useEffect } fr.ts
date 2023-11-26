// import React, { useState, useEffect } from 'react';
// import { MapContainer, TileLayer, Marker } from 'react-leaflet';

// const SasquatchMap = () => {
//   const [sightings, setSightings] = useState([]);

//   useEffect(() => {
//     // Fetch Sasquatch sighting data from an external source
//     const fetchSightings = async () => {
//       const response = await fetch('https://example.com/sasquatch-sightings.json');
//       const sightingData = await response.json();

//       setSightings(sightingData);
//     };

//     fetchSightings();
//   }, []);

//   return (
//     <MapContainer
//       style={{ height: '400px' }}
//       center={[40.7128, -74.0060]} // Default center coordinates
//       zoom={4}
//     >
//       <TileLayer
//         url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
//         attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//       />

//       {sightings.map((sighting) => (
//         <Marker
//           key={sighting.id}
//           position={sighting.location}
//           popupContent={`
//             <b>Sasquatch Sighting</b>
//             <br />
//             Date: ${sighting.date}
//             <br />
//             Description: ${sighting.description}
//           `}
//         />
//       ))}
//     </MapContainer>
//   );
// };

// export default SasquatchMap;
