import React from 'react'
import * as L from './Styles'
import { Marker, Popup } from "react-leaflet"
import { TileLayer} from 'react-leaflet/TileLayer'
import { MapContainer, useMap } from 'react-leaflet'

export const Localizacao = () => {
  return (
    <L.main>
      <L.locationContainer>
        <L.titleContainer>
          <h3>ONDE NOS ENCONTRAR?</h3>
          <h2>NOSSA LOCALIZAÇÃO</h2>
        </L.titleContainer>

        <L.mapContainer>
          <MapContainer center={[-22.257069296647767, -45.693783837411885]} zoom={50} scrollWheelZoom={false}>
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[-22.257069296647767, -45.693783837411885]} >
              <Popup>
                Nossa Localização <br /> 
              </Popup>
            </Marker>
          </MapContainer>
        </L.mapContainer>
      </L.locationContainer>
    </L.main>
  )
}
