import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    Catagories: [],
}

const dataSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {
        setData: (state, actions) => {
            state.Catagories = actions.payload
        }
    }
})

export const {setData} = dataSlice.actions
export default dataSlice.reducer