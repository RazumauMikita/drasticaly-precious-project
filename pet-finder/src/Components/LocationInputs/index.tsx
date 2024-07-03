import { FC, useState } from "react";
import GooglePlacesAutocomplete from 'react-google-places-autocomplete'; 

const lang = 'en'

interface Country {
  label: string;
  value: string;
}
export const LocationInput: FC = () => {
const [location, setLocation] = useState<Country | null>(null);
console.log(location);
  return(
  <div>
    <GooglePlacesAutocomplete
      // apiKey={}  TODO add API key from env
      apiOptions={{ language: lang }}
      selectProps={{
        value: location,
        onChange: setLocation,
      }}
    />
  </div>
  )
}