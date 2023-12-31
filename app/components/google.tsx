"use client";
import React from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";

const mapStyles = {
  width: "100%",
  height: "60%",
};

const google = () => {
  return (
    //The <Map></Map> need the following props
    //initialCenter={} will be the center on the Map
    <Map
      google={window.google}
      zoom={17}
      style={mapStyles}
      initialCenter={{
        lat: 48.0773,
        lng: 121.7458,
      }}
    >
      //The Maker Component have a prop positio={}
      //in which you decide the position of it
      <Marker
        position={{
          lat: 48.0773,
          lng: 121.7458,
        }}
      />
    </Map>
  );
};

export default GoogleApiWrapper({
  apiKey: "AIzaSyBFrhwenepweBSjFc8-sNU8fB3pYbSvPDE",
})(google);
