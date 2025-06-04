import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AboutUs, AboutUsType } from "../aboutUs/AboutUS";

interface AboutUsSliceState {
  aboutData: AboutUsType;
}

const initialState: AboutUsSliceState = {
  aboutData: AboutUs,
};

const AboutUsSlice = createSlice({
  name: "aboutUS",
  initialState,
  reducers: {
    setAboutUS: (state, action: PayloadAction<AboutUsType>) => {
      state.aboutData = action.payload;
    },
  },
});

export const { setAboutUS } = AboutUsSlice.actions;
export default AboutUsSlice.reducer;
