import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const messageSlice = createSlice({
    name: 'user',
    initialState: {
        user: {
            id:'',
            given_name: '',
            email:'',
            picture:''
        }
    },
    reducers: {
        setUser(state, action: PayloadAction<any>) {
            state.user = action.payload
        }
    }
})



export const { setUser } = messageSlice.actions
export default messageSlice.reducer
