import { useState } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import { LocationMarkerIcon } from "@heroicons/react/solid";

function Map({ searchResults }) {
  const [selectedLocation, setSelectedLocation] = useState({});

  console.log(selectedLocation);

  // Transform the search results object into the { latitude: 52.516272, longitude: 13.377722 } object

  const [viewport, setViewport] = useState({
    width: "100%",
    height: "100%",
    latitude: -1.27126,
    longitude: 36.80911,
    zoom: 11,
  });
  return (
    <ReactMapGL
      mapStyle="mapbox://styles/yobreezy/ckwdgdvuo39iv15lcbkahzgmg"
      mapboxApiAccessToken={process.env.mapbox_key}
      {...viewport}
      onViewportChange={(nextViewport) => setViewport(nextViewport)}
    >
      <Marker longitude={36.80891} latitude={-1.27143}>
        <LocationMarkerIcon className="h-6 text-red-600 animate-pulse" />
      </Marker>
    </ReactMapGL>
  );
}

export default Map;
