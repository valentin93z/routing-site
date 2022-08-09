import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    burgerOpen: false,
}

export const scooterSlice = createSlice({
    name: 'scooter',
    initialState,
    reducers: {
        toggleBurger: (state) => {
            state.burgerOpen = !state.burgerOpen;
            const body = document.getElementById("body");
            state.burgerOpen ? body.classList.add('stopScroll') : body.classList.remove('stopScroll');
        },
        autoCloseMenu: (state) => {
            state.burgerOpen = false;
            const body = document.getElementById("body");
            body.classList.remove('stopScroll');
        }
    }
})

export const { toggleBurger, autoCloseMenu } = scooterSlice.actions;
export default scooterSlice.reducer;