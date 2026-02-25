const API_URL = "http://localhost:8080/api/products";

export const getProducts = async () => {
  const response = await fetch(API_URL);
  return response.json();
};