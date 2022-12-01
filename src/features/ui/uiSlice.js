import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentPage: 'Dashboard',
    isAsideOpen: false,
    isLogoutOpen: false,
}

const uiSlice = createSlice({
    name: 'ui',
    initialState,
    reducers: {
        updateCurrentPage(state, action) {
            state.currentPage = action.payload
        },

        toggleAside(state) {
            state.isAsideOpen = !state.isAsideOpen
        },

        toggleLogout(state) {
            state.isLogoutOpen = !state.isLogoutOpen
        }
    }
})

export const { updateCurrentPage, toggleAside, toggleLogout } = uiSlice.actions 

export default uiSlice.reducer