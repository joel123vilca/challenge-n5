import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { store } from "../redux";
import DashboardSlider from "../components/Dashboard";
import Products from "../views/Products";
import Product from "../views/Product";
import Shop from "../views/Shop";
const AppRouter = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DashboardSlider />}>
            <Route path="products" element={<Products />} />
            <Route path="create-product" element={<Product />} />
            <Route path="cart" element={<Shop />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

export default AppRouter;
