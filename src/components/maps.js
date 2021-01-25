import React, {useState, useContext} from 'react'
import axios from 'axios';

import { 
  GoogleMap, 
  useLoadScript,
  Marker,
  InfoWindow,
  DirectionsService 
} from '@react-google-maps/api';
// importando estilo dark
import mapStyles from "./mapStyles.js";
import dados from "./br.json";
import { useEffect } from 'react';
import { ListItemAvatar } from '@material-ui/core';
import api from '../services/api.js';

const libraries = ["places"];
// 
const mapContainerStyle = {
  width: '90vw',
  height: '80vh',
}
// coordenadas para localização central do mapa
const centro = {
  lat: -1.310782,
  lng: -48.457989,
}
// opções do mapa => estilo, scroll, zoom .. etc
const options = {
  styles: mapStyles,
  disableDefaultUI: true,
  zoomControl: true,
}


function Map () {

  const [list, setList] = useState([[]]);
  
    const getTemp = async () => {
      try {
        const getTemps = await api.get('/users/1/data');
        setList(getTemps.data)
      } catch (err) {
        console.error(err.message);
      }
    }; 

    getTemp()
  // configurações do maps
  const {isLoaded, loadError} = useLoadScript({
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
      center={centro}
      options={options}>
{/* 
      {list.map((item) => (
        <Marker
        key={item.id}
        position={{
          lat: item.lat, lng: item.lng
        }}
        icon={{
          url: "/vacina.svg",
          scaledSize: new window.google.maps.Size(50,50),
          origin: new window.google.maps.Point(0,0),
          anchor: new window.google.maps.Point(25,25),
        }}
        />
      ))}
       */}
       <Marker
        position={{
          lat: -1.310782, lng: -48.457989
        }}
        icon={{
          url: "/vacina.svg",
          scaledSize: new window.google.maps.Size(50,50),
          origin: new window.google.maps.Point(0,0),
          anchor: new window.google.maps.Point(25,25),
        }}
        />
      </GoogleMap>
    </div>
  )
}
export default Map ;
