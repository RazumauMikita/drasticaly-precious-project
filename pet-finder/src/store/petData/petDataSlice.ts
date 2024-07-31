import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { RootState } from '../store'
import { ISendLostPet } from '../../firebase/db/db'

export interface PetData {
  pets: ISendLostPet[]
}

const initialState: PetData = {
  pets: [],
}

const PetDataSlice = createSlice({
  name: 'allPetData',
  initialState,
  reducers: {
    setPetData: (state: PetData, action: PayloadAction<PetData>) => {
      state.pets = action.payload.pets
    },
  },
})

export const { setPetData } = PetDataSlice.actions
export const selectAllPetData = (state: RootState) => state.allPetData.pets
export default PetDataSlice.reducer
