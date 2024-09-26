import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import Header from "./components/Header";
import Restaurant from "./pages/Restaurant/Index";
import Cart from "./pages/Cart/Index";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getCart } from "./redux/actions/cartActions";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCart());
  }, []);
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/restaurant/:id" element={<Restaurant />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
