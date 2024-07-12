import { FC, useState } from "react";
import GooglePlacesAutocomplete from 'react-google-places-autocomplete'; 

import * as LocationInterfaces from '../../types/location.type';

const lang = 'en';


export const LocationInput: FC = () => {
const [location, setLocation] = useState<LocationInterfaces.Country | null>(null);
console.log(location);
  return(
  <div>
    <GooglePlacesAutocomplete
      apiKey={import.meta.env.VITE_GOOGLE_MAP_API_KEY} 
      apiOptions={{ language: lang }}
      selectProps={{
        value: location,
        onChange: setLocation,
      }}
    />
  </div>
  )
}