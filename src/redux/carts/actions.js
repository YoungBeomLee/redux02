import { ADD_CART, REMOVE_CART } from "./types";
export const addCart = (number) => {
	return { type: ADD_CART, payload: Number(number) };
	
};
export const removeCart= (number) => {
	return { type: REMOVE_CART, payload: Number(number) };
};
