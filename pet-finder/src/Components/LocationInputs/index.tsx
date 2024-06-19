import { FC, useState } from "react";
import { StyledInput } from "../StyledInput";

export const LocationInputs: FC = () => {
  const [currentCountry, setCurrentCountry] = useState('');
  return(
  <>
    <StyledInput type="text" inputName="country" label="Country" />
    <StyledInput type="text" inputName="city" label="City" />
    </>
  )
}