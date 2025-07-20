import type { Country } from "../models/country.model";

export const savePlannerInLocalStorage = (savedCountries: Country[]) => {
  const plannerJSON = JSON.stringify(savedCountries);
  localStorage.setItem("planner", plannerJSON);
};

export const loadPlannerFromLocalStorage = (): Country[] => {
  const plannerJSON = localStorage.getItem("planner");
  if (!plannerJSON) return [];

  return JSON.parse(plannerJSON);
};
