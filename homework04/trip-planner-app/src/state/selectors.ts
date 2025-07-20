import { createSelector } from "@reduxjs/toolkit";
import type { RootState } from "./store";

export const selectCountriesInPlanner = createSelector(
    [(state: RootState)=> state.countries.value],
    countries => countries.filter(country => country.isSaved)
)