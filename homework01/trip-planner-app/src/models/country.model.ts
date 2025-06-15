export interface Country {
  name: {
    common: string;
  };
  capital: string[]; // Country capitals
  region: string; // Europe, Asia, Africa, Americas or Oceania
  area: number; // Country area in square kilometers
  flag: string; // path to the flag image
  population: number;
  landlocked: boolean; // if the country has access to the sea/ocean
}
