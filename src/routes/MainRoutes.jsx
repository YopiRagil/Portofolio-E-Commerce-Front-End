import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import ProdukList from "../pages/ProdukList";
import Profile from "../pages/Profile";
import SignIn from "../pages/SignIn";
import Register from "../pages/Register";
import AddProduk from "../pages/ProdukAdd";
import { Provider } from "react-redux";
import store from "../store";

const MainRoutes = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/signin" component={SignIn} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/produk" component={ProdukList} />
          <Route exact path="/addproduk" component={AddProduk} />
          <Route exact path="/produk/:category" component={ProdukList} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
};

export default MainRoutes;
