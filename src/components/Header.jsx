import React from "react";
import { Link } from "react-router-dom";
import { BsBasket } from "react-icons/bs";
import Container from "./Container";
const Header = () => {
  return (
    <header className="shadow">
      <Container>
        <div className="flex justify-between align items-center">
          <Link to={"/"} className="text-cyan-700 font-mono font-[900]">
            THUNK BASKET
          </Link>

          <div className="flex items-center gap-4">
            <button className="border border-cyan-400 py-1 px-3 transition hover:bg-cyan-500 rounded hover:text-white">
              Giriş Yap
            </button>
            <button className="bg-orange-500 py-1 px-3 rounded text-white transition hover:brightness-75">
              Kayıt Ol
            </button>
            <Link
              to={"/cart"}
              className="hover:bg-orange-500 hover:bg-opacity-15 rounded-full p-3"
            >
              <BsBasket className="text-orange-500 text-xl" />
            </Link>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
