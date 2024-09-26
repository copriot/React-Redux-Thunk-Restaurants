import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import Header from "./components/Header";
import Restaurant from "./pages/Restaurant/Index";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/restaurant/:id" element={<Restaurant />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
