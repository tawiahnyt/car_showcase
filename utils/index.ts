/** @format */

import dotenv from "dotenv";

dotenv.config();

export async function fetchCars() {
  const headers = {
    "x-rapidapi-key": process.env.X_RAPIDAPI_KEY || "",
    "x-rapidapi-host": process.env.X_RAPIDAPI_HOST || "",
  };

  const response = await fetch(
    "https://cars-by-api-ninjas.p.rapidapi.com/v1/cars",
    { headers: headers }
  );

  const result = await response.json();

  return result;
}
