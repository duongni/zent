const apiKey = process.env.API_KEY;
import { FilterProps } from "@/types";

export async function fetchParks(filters: FilterProps) {
  const { state } = filters;
  const response = await fetch(
    `https://developer.nps.gov/api/v1/parks?stateCode=${state}&limit=50&api_key=${apiKey}`
  );

  const result = await response.json();
  return result.data;
}
export async function fetchCamps(filters: FilterProps) {
  const { state } = filters;
  const response = await fetch(
    `https://developer.nps.gov/api/v1/campgrounds?stateCode=${state}&limit=50&api_key=${apiKey}`
  );

  const result = await response.json();
  return result.data;
}
