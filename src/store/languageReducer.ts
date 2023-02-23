import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import data from '../data/data';
import { ILanguadge } from '../types/langueges';

export interface ILangState {
  language: string | null;
  translate: ILanguadge;
}

const initialLanguage: ILangState = {
  language: localStorage.getItem('language') ? localStorage.getItem('language') : 'RU',
  translate: data.ru,
};

export const LanguageSlice = createSlice({
  name: 'Language',
  initialState: initialLanguage,
  reducers: {
    setLanguage: (state: ILangState, action: PayloadAction<string>) => {
      state.language = action.payload;
    },
    setTranslate: (state: ILangState, action) => {
      state.translate = action.payload === 'EN' ? data.en : data.ru;
    },
  },
});
