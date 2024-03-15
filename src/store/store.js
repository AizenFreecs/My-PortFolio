import { configureStore } from "@reduxjs/toolkit";
import projectsSlice from "./projectsSlice/projectsSlice";
const store = configureStore({
    reducer: {
        projects:projectsSlice
    }
})

export default store