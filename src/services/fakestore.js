const ENDPOINT_PRODUCT = "https://api.escuelajs.co/api/v1/products";

export const getProduct = async () => {
  const res = await fetch(ENDPOINT_PRODUCT);
  const data = await res.json();
  return data;
};
