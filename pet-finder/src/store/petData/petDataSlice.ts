import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { RootState } from '../store'
import { ISendLostPet } from '../../firebase/db/db'
import { Point } from '../../Components/PointMarker'

export interface PetData {
  pets: ISendLostPet[]
  shownPets: Point[]
}

const initialState: PetData = {
  pets: [],
  shownPets: [],
}

const PetDataSlice = createSlice({
  name: 'allPetData',
  initialState,
  reducers: {
    setPetData: (state: PetData, action: PayloadAction<ISendLostPet[]>) => {
      state.pets = action.payload
    },
    setShownPets: (state: PetData, action: PayloadAction<Point[]>) => {
      state.shownPets = action.payload
    },
  },
})

export const { setPetData } = PetDataSlice.actions
export const { setShownPets } = PetDataSlice.actions
export const selectAllPetData = (state: RootState) => state.allPetData.pets
export default PetDataSlice.reducer
