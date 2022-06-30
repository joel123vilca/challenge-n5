import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import logo from ".././food.png";
import banner from ".././n5.jpeg";
import "./products.scss";
import * as shoppingActions from ".././redux/actions/ShoppingActions";
import {
  productsSelector,
  shoppingSelector,
} from ".././redux/selectors/ShoppingSelectors";

const Products = () => {
  const dispatch = useDispatch();
  const data = useSelector(productsSelector);
  const shopping = useSelector(shoppingSelector);

  const addCart = (product) => {
    let cart = JSON.parse(shopping);
    let shop = {
      ...product,
      count: 1,
    };
    cart = [...cart, shop];
    dispatch(shoppingActions.addCart(cart));
  };

  const addCount = (id) => {
    let cart = JSON.parse(shopping);
    cart.forEach((element, index) => {
      if (element.id === id) {
        cart[index].count = cart[index].count + 1;
      }
    });
    dispatch(shoppingActions.addCart(cart));
  };

  const desCount = (id) => {
    let cart = JSON.parse(shopping);
    cart.forEach((element, index) => {
      if (element.id === id) {
        cart[index].count = cart[index].count - 1;
      }
    });
    cart = cart.filter((item) => item.count > 0);
    dispatch(shoppingActions.addCart(cart));
  };

  const searchProduct = (id) => {
    let cart = JSON.parse(shopping);
    cart = cart.filter((item) => item.id === id);
    return cart.length > 0 ? cart[0].count : 0;
  };

  useEffect(() => {
    dispatch(shoppingActions.getShopping());
    dispatch(shoppingActions.getProducts());
  }, [dispatch]);

  return (
    <div className="products">
      <div className="banner">
        <img src={banner} alt="banner" />
      </div>
      <div className="title">
        <h2>Offers for you!!</h2>
      </div>
      <div className="content__products">
        {data.length > 0 &&
          data.map((product) => (
            <div key={product.id} className="product">
              <img src={logo} className="image" alt="logo" />
              <div className="product__content">
                <div className="product__title">{product.name} </div>
                <span className="price">$ {product.price} </span>
                <div className="actions">
                  {searchProduct(product.id) > 0 ? (
                    <div className="product__add">
                      <button
                        className="button__desc"
                        onClick={() => desCount(product.id)}
                      >
                        -
                      </button>
                      <div className="amount">{searchProduct(product.id)}</div>
                      <button
                        className="button__add"
                        onClick={() => addCount(product.id)}
                      >
                        +
                      </button>
                    </div>
                  ) : (
                    <button
                      className="addCart"
                      onClick={() => addCart(product)}
                    >
                      Add Cart
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Products;
