import { useState } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import getCenter from "geolib/es/getCenter";
import items from "../hoteldata";
import { LocationMarkerIcon } from "@heroicons/react/solid";

function Map() {
  const [selectedLocation, setSelectedLocation] = useState({});

  const coords = items.map((result) => ({
    latitude: result.latitude,
    longitude: result.longitude,
  }));

  const center = getCenter(coords);

  // Transform the search results object into the { latitude: 52.516272, longitude: 13.377722 } object

  const [viewport, setViewport] = useState({
    width: "100%",
    height: "100%",
    latitude: center.latitude,
    longitude: center.longitude,
    zoom: 11,
  });
  return (
    <ReactMapGL
      mapStyle="mapbox://styles/yobreezy/ckwdgdvuo39iv15lcbkahzgmg"
      mapboxApiAccessToken={process.env.mapbox_key}
      {...viewport}
      onViewportChange={(nextViewport) => setViewport(nextViewport)}
    >
      {items.map((result) => (
        <div key={result.longitude}>
          <Marker longitude={result.longitude} latitude={result.latitude}>
            <LocationMarkerIcon className="h-2 text-red-600 animate-pulse cursor-pointer" />
          </Marker>
        </div>
      ))}
    </ReactMapGL>
  );
}

export default Map;
