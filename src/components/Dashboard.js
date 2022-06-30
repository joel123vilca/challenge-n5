import React from "react";
import { Outlet } from "react-router-dom";
import "./dashboard.scss";
import cart from ".././shopping-cart.png";
import { useSelector } from "react-redux";
import { shoppingSelector } from ".././redux/selectors/ShoppingSelectors";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  const shopping = useSelector(shoppingSelector);

  const home = () => {
    navigate("/products");
  };

  const carts = () => {
    navigate("/cart");
  };

  const createProduct = () => {
    navigate("/create-product");
  };
  return (
    <div>
      <div className="header">
        <div className="title" onClick={home}>
          Shopping
        </div>
        <div className="cart">
          <div className="cart__icon" onClick={carts}>
            <img src={cart} alt="cart" />
            <span>
              {shopping.length > 2 ? JSON.parse(shopping).length : 0}{" "}
            </span>
          </div>
          <button onClick={createProduct}>Create Product</button>
        </div>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};
export default Dashboard;
