import React, {useState} from 'react'
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

const libraries = ["places"];
// 
const mapContainerStyle = {
  width: '90vw',
  height: '80vh',
}
// coordenadas para localização central do mapa
const centro = {
  lat: -1.298748,
  lng: -48.479703,
}
// opções do mapa => estilo, scroll, zoom .. etc
const options = {
  styles: mapStyles,
  disableDefaultUI: true,
  zoomControl: true,
}


function Map () {
  const [data,setData] = useState([])
  useEffect(() =>{
    setData(dados)
  });
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
      zoom={15} 
      center={centro}
      options={options}>

      {data.map((data) => (
        <Marker
        key={data.city}
        position={{
          lat: data.lat, lng: data.lng
        }}
        icon={{
          url: "/vacina.svg",
          scaledSize: new window.google.maps.Size(40,40),
          origin: new window.google.maps.Point(0,0),
          anchor: new window.google.maps.Point(20,20),
        }}
        />
      ))}
      
      </GoogleMap>
    </div>
  )
}
export default Map ;
