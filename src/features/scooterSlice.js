import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    burgerOpen: false,
    howItWorks: [
        {
            question: 'How do I download the app?',
            answer: 'To download the Scoot app, you can search “Scoot” in both the App and Google Play stores. An even simpler way to do it would be to click the relevant link at the bottom of this page and you’ll be re-directed to the correct page.',
            status: false,
            id: 'q1',
        },
        {
            question: 'Can I find a nearby Scoots?',
            answer: 'Yes, you can find a nearby Scoots!',
            status: false,
            id: 'q2',
        },
        {
            question: 'Do I need a license to ride?',
            answer: 'Yes, you need a license to ride!',
            status: false,
            id: 'q3',
        },
    ],
    safeDriving: [
        {
            question: 'Should I wear a helmet?',
            answer: 'Yes, please do! All cities have different laws. But we strongly strongly strongly recommend always wearing a helmet regardless of the local laws. We like you and we want you to be as safe as possible while Scooting.',
            status: false,
            id: 'q1',
        },
        {
            question: 'How about the rules & regulations?',
            answer: 'Some text',
            status: false,
            id: 'q2',
        },
        {
            question: 'What if I damage my Scoot?',
            answer: 'Some text',
            status: false,
            id: 'q3',
        },
    ],
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
        },
        openQuestionsHowItWorks: (state, action) => {
            const toggleStatus = state.howItWorks.find((q) => q.id === action.payload);
            toggleStatus.status = !toggleStatus.status;
        },
        openQuestionsSafeDriving: (state, action) => {
            const toggleStatus = state.safeDriving.find((q) => q.id === action.payload);
            toggleStatus.status = !toggleStatus.status;
        }
    }
})

export const { toggleBurger, autoCloseMenu, openQuestionsHowItWorks, openQuestionsSafeDriving } = scooterSlice.actions;
export default scooterSlice.reducer;