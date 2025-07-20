import {
  createAsyncThunk,
  createSlice,
  type ActionReducerMapBuilder,
  type PayloadAction,
} from "@reduxjs/toolkit";
import type { Country } from "../../models/country.model";
import { httpService } from "../../services/http.service";

interface CountryState {
  value: Country[];
  isLoading: boolean;
}

const initialState: CountryState = {
  value: [],
  isLoading: false,
};

export const fetchCountries = createAsyncThunk(
  "countries/fetchCountries",
  async () => {
    try {
      const { data } = await httpService.get(
        "/all?fields=name,capital,region,area,flags,population,landlocked"
      );
      return data.map((country: Country) => ({
        ...country,
        isSaved: false,
        days: 0,
      }));
    } catch (error) {
      console.error("Error fetching countries:", error);
    }
  }
);

const countriesSlice = createSlice({
  name: "countries",
  initialState,
  reducers: {
    toggleSaveCounry: (state, action) => {
      const countryName = action.payload;
      const foundCountry = state.value.find(
        (country) => country.name.common === countryName
      );
      if (foundCountry) {
        foundCountry.isSaved = !foundCountry.isSaved;
      }
    },
    addDayInCountry(
      state,
      { payload: selectedCountry }: PayloadAction<Country>
    ) {
      for (const country of state.value) {
        if (country.name.common === selectedCountry.name.common) {
          country.days++;
          break;
        }
      }
    },
    removeDayInCountry(
      state,
      { payload: selectedCountry }: PayloadAction<Country>
    ) {
      for (const country of state.value) {
        if (country.name.common === selectedCountry.name.common) {
          country.days--;
          break;
        }
      }
    },
    resetPlanner(state) {
      for (const country of state.value) {
        country.isSaved = false;
        country.days = 0;
      }
    },
    setupLocalStoragePlanner(
      state,
      { payload: addedCountries }: PayloadAction<Country[]>
    ) {
      addedCountries.forEach((addedCountry) => {
        for (const country of state.value) {
          if (addedCountry.name.common === country.name.common) {
            country.isSaved = addedCountry.isSaved;
            country.days = addedCountry.days;
            break;
          }
        }
      });
    },
  },
  extraReducers: (builder: ActionReducerMapBuilder<CountryState>) => {
    builder.addCase(fetchCountries.pending, (state) => {
      state.isLoading = true;
      console.log("pending reducer called");
    });
    //The action payload in the fulfilled case is the data returned from the async function in the thunk definition
    builder.addCase(fetchCountries.fulfilled, (state, action) => {
      state.value = action.payload;
      state.isLoading = false;
      console.log("success");
    });
    builder.addCase(fetchCountries.rejected, (state) => {
      state.isLoading = false;
      console.log("something went wrong");
    });
  },
});

export const {
  toggleSaveCounry,
  addDayInCountry,
  removeDayInCountry,
  resetPlanner,
  setupLocalStoragePlanner,
} = countriesSlice.actions;

export default countriesSlice;
