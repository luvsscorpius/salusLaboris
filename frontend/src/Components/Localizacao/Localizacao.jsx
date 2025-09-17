import React from 'react'
import * as L from './Styles'
import { Marker, Popup, MapContainer } from "react-leaflet"
import { TileLayer} from 'react-leaflet/TileLayer'
import {Icon} from 'leaflet'
import markerIconPng from "leaflet/dist/images/marker-icon.png"

export const Localizacao = () => {
  return (
    <L.main>
      <L.locationContainer>
        <L.titleContainer>
          <h3>ONDE NOS ENCONTRAR?</h3>
          <h2>NOSSA LOCALIZAÇÃO</h2>
        </L.titleContainer>

        <L.mapContainer>
          <MapContainer center={[-22.257069296647767, -45.693783837411885]} zoom={35} scrollWheelZoom={true}>
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[-22.257069296647767, -45.693783837411885]} icon={new Icon({iconUrl: markerIconPng, iconSize: [25, 41], iconAnchor: [12, 41]})} >
              <Popup>
                Nossa Localização <br /> 
              </Popup>
            </Marker>
          </MapContainer>
        </L.mapContainer>


        <L.descContainer>
           <h3>Santa Rita do Sapucaí - MG, 37537-230</h3>
           <p>Av. Francisco Bilac Pinto, 95 - sala 1 - Monte Belo</p>
        </L.descContainer>
      </L.locationContainer>
    </L.main>
  )
}
