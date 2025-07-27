export interface Country {
  name: {
    common: string;
  };
  capital: string[];
  region: string;
  area: number;
  flags: { png: string };
  population: number;
  landlocked: boolean;
  isSaved: boolean;
  days: number;
}
