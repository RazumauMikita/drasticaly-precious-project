import { FC, useState } from "react";

import GooglePlacesAutocomplete from 'react-google-places-autocomplete'; 

import * as LocationInterfacres from '../../types/location.type';

const lang = 'en';


export const LocationInput: FC = () => {
const [location, setLocation] = useState<LocationInterfacres.Country | null>(null);
console.log(location);
  return(
  <div>
    <GooglePlacesAutocomplete
      // apiKey={} TODO add API key fron env
      apiOptions={{ language: lang }}
      selectProps={{
        value: location,
        onChange: setLocation,
      }}
    />
  </div>
  )
}