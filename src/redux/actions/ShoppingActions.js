import { createAction, createAsyncThunk } from "@reduxjs/toolkit";

export const types = {
  GET_PRODUCTS: "GET_BUSINESSES",
  GET_CART: "GET_CART",
  SET_PRODUCTS: "SET_PRODUCTS",
  SET_CART: "SET_CART",
  SET_SHOPPING: "SET_SHOPPING",
  CREATE_PRODUCT: "CREATE_PRODUCT",
  ADD_CART: "ADD_CART",
};

const products = [
  {
    name: "Leche",
    price: 75000,
    amount: 2,
    id: 1,
  },
  {
    name: "Cereal",
    price: 85300,
    amount: 3,
    id: 2,
  },
  {
    name: "Huevos",
    price: 75000,
    amount: 12,
    id: 3,
  },
  {
    name: "Carne",
    price: 85300,
    amount: 21,
    id: 4,
  },
  {
    name: "Queso",
    price: 75000,
    amount: 8,
    id: 5,
  },
  {
    name: "Arroz",
    price: 85300,
    amount: 9,
    id: 6,
  },
  {
    name: "Frijoles",
    price: 85300,
    amount: 32,
    id: 7,
  },
  {
    name: "Lentejas",
    price: 175000,
    amount: 42,
    id: 8,
  },
  {
    name: "Avena",
    price: 85300,
    amount: 56,
    id: 9,
  },
  {
    name: "Pollo",
    price: 375000,
    amount: 23,
    id: 10,
  },
];
export const getProducts = createAsyncThunk(
  types.GET_PRODUCTS,
  (_, { dispatch }) => {
    const response = products;
    dispatch(setProducts(response));
    return response;
  }
);

export const getShopping = createAsyncThunk(
  types.GET_SHOPPING,
  (_, { dispatch }) => {
    let data = [];
    if (localStorage.getItem("shopping") === null) {
      localStorage.setItem("shopping", JSON.stringify(data));
    }
    const response = localStorage.getItem("shopping");
    dispatch(setShopping(response));
    return response;
  }
);

export const addCart = createAsyncThunk(
  types.ADD_CART,
  (payload, { dispatch }) => {
    localStorage.setItem("shopping", JSON.stringify(payload));
    const response = localStorage.getItem("shopping");
    dispatch(setShopping(response));
  }
);

export const createProduct = createAsyncThunk(
  types.CREATE_PRODUCT,
  (payload, { dispatch }) => {
    const response = [...products, payload];
    dispatch(setProducts(response));
  }
);

export const setProducts = createAction(types.SET_PRODUCTS, (products) => ({
  payload: products,
}));

export const setShopping = createAction(types.SET_SHOPPING, (shopping) => ({
  payload: shopping,
}));
