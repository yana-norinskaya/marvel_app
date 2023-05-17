import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface MarvelState {
  id: number;
  randomId: number;
  idComics: number;
  nameChar: string;
}

const initialState: MarvelState = {
  id: 0,
  randomId: Math.floor(Math.random() * (1011400 - 1011000) + 1011000),
  idComics: 5813,
  nameChar: "",
};
export const marvelSlice = createSlice({
  name: "idCharacter",
  initialState,
  reducers: {
    getIdCharacter(state, action: PayloadAction<number>) {
      state.id = action.payload;
    },
    getRandomCharacter(state) {
      state.randomId = Math.floor(
        Math.random() * (1011400 - 1011000) + 1011000
      );
    },
    getComicsId(state, action: PayloadAction<number>) {
      state.idComics = action.payload;
    },
    getName(state, action: PayloadAction<string>) {
      state.nameChar = action.payload;
    },
  },
});

export const marvelActions = marvelSlice.actions;
export const marvelReducer = marvelSlice.reducer;
