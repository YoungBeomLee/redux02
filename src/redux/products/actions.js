import { ADD_PRODUCT, REMOVE_PRODUCT } from "./types";

export const addProduct = (number) => {
  return { type: ADD_PRODUCT , payload: Number(number)};
};


export const removeProduct = (number) => {
  return { type: REMOVE_PRODUCT,payload: Number(number) };
};
