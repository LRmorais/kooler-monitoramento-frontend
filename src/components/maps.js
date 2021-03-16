import React, { useState } from 'react'


import {
  GoogleMap,
  useLoadScript,
  Marker,
  DirectionsRenderer
} from '@react-google-maps/api';
// importando estilo dark
import mapStyles from "./mapStyles.js";
import { useEffect } from 'react';

import api from '../services/api.js';

const libraries = ["places"];
// 
const mapContainerStyle = {
  width: '90vw',
  height: '80vh',
  
}

// opções do mapa => estilo, scroll, zoom .. etc
const options = {
  styles: mapStyles,
  disableDefaultUI: true,
  zoomControl: true,
  featureType: "poi",
        elementType: "labels",
        stylers: [
              { visibility: "off" }
        ]
}


function Map() {


  const [list, setList] = useState([]);
  const [center, setCenter] = useState([{
    lat: 0,
    lng: 0
  }])

  const getData = () => {

    api.get('/users/1/data')
      .then((response) => {
        setList(response.data.data);
        setCenter({lat: response.data.data[5].lat, lng: response.data.data[5].lng})
      
      })
      .catch(err => { console.log(err) })
  }
  useEffect(() => {
    getData()
    const interval=setInterval(()=>{
      getData()
     },15000)
     return()=>clearInterval(interval)
  }, []);


  // configurações do maps
  const { isLoaded, loadError } = useLoadScript({
    // Api key fornecida pelo google cloud
    googleMapsApiKey: "AIzaSyCspyKudsMWQLVXXNUR1boTBAkOdN7m32s",
    libraries,
  });
  // tratamento de erros
  if (loadError) return "Error loading maps";
  if (!isLoaded) return "Loading Maps"
  // renderização do mapa

  return (
    <div>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={13}
        center={center}
        options={options}>

        {list.map((item) => (
          <Marker
            key={item.id}
            position={{
              lat: item.lat, lng: item.lng
            }}
            icon={{
              url: "/vacina.svg",
              scaledSize: new window.google.maps.Size(50, 50),
              origin: new window.google.maps.Point(0, 0),
              anchor: new window.google.maps.Point(25, 25),
            }}
          />
        ))}

      </GoogleMap>
    </div>
  )
}
export default Map;