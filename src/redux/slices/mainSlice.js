import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    showOptions : false
}

const mainSlice = createSlice({
    name: 'main',
    initialState,
    reducers: {

    }
})

export const {} = mainSlice.actions
export default mainSlice.reducer