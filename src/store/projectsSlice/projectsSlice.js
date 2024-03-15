import { createSlice } from "@reduxjs/toolkit";
import { projectsData } from "../../data/projectsData.js";
const initialState = {
  projects: projectsData,
  searchProject: "",
  selectProject: "",
};

const projectSlice = createSlice({
  name: "projects",
  initialState,
  reducers: {
    setSearchProject: (state, action) => {
      state.searchProject = action.payload;
    },
    setSelectProject: (state, action) => {
      state.selectProject = action.payload;
    },
  },
});

export const { setSearchProject, setSelectProject } = projectSlice.actions
export default projectSlice.reducer 
