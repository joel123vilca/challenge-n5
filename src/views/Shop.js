import React, { useEffect } from "react";
import food from ".././food.png";
import "./shop.scss";
import { useDispatch, useSelector } from "react-redux";
import * as shoppingActions from ".././redux/actions/ShoppingActions";
import { shoppingSelector } from ".././redux/selectors/ShoppingSelectors";
import { useNavigate } from "react-router-dom";

export const Shop = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const shopping = JSON.parse(useSelector(shoppingSelector));

  useEffect(() => {
    dispatch(shoppingActions.getShopping());
  }, []);

  const totalPay = () => {
    let sum = 0;

    for (let i = 0; i < shopping.length; i++) {
      sum += shopping[i].price * shopping[i].count;
    }
    return sum;
  };

  const cleanCart = () => {
    localStorage.clear();
    navigate(`/products`);
  };
  return (
    <div className="shop">
      <h3>List of products</h3>
      <button className="clean__cart" onClick={cleanCart}>
        Clean Cart
      </button>
      <div className="list__products">
        {shopping.map((item) => (
          <div key={item.id} className="item">
            <img src={food} alt="food"></img>
            <div className="item__data">
              <div className="item__name">{item.name} </div>
              <div className="item__count">count: {item.count} </div>
            </div>
            <div className="item__price">$ {item.price} </div>
          </div>
        ))}
        <div className="total">
          <div className="total__data">Total: $ {totalPay()}</div>
        </div>
      </div>
    </div>
  );
};
export default Shop;
