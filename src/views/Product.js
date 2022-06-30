import React, { useState } from "react";
import * as shoppingActions from ".././redux/actions/ShoppingActions";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import "./product.scss";

const Product = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [values, setValues] = useState({});

  const handleChange = (event) => {
    event.persist();
    let name = event.target.name;
    let val = event.target.value;
    setValues({
      ...values,
      [name]: val,
    });
  };

  const addProduct = () => {
    let payload = {
      id: 11,
      ...values,
    };
    dispatch(shoppingActions.createProduct(payload));
    navigate(`/products`);
  };
  return (
    <div className="create__product">
      <h2>Create Product</h2>
      <div className="form">
        <input
          type="text"
          placeholder="Nombre"
          name="name"
          onChange={handleChange}
        />
        <input
          type="number"
          placeholder="Precio"
          name="price"
          onChange={handleChange}
        />
        <input
          type="number"
          placeholder="Cantidad"
          name="amount"
          onChange={handleChange}
        />
        <button onClick={addProduct}>Save</button>
      </div>
    </div>
  );
};
export default Product;
