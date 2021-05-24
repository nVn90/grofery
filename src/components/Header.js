import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";

function Header() {
  return (
    <div className="header">
      <div className="header__logo">
        <img
          src="https://www.tailorbrands.com/wp-content/uploads/2019/07/ClevelandBrowns.png"
          // src="https://lh3.googleusercontent.com/deOsTDbDdM7WhnLpUg-4D_GZwe_5WahXh60ZjC0_balbZZcUnoaYIRlFoZm1yhe_5w=w257"
          alt=""
        />
      </div>
      <div className="header__search">
        <input
          placeholder="Search"
          className="header__searchInput"
          type="text"
        />
        <SearchIcon className="header__searchIcon" />
      </div>
      <div className="header__nav">
        <div className="header__option">
          <span className="header__optionLineOne">My Account</span>
          <span className="header__optionLineTwo">Login/Sign Up</span>
        </div>
        <div onClick="showCart()" className="header__option">
          <ShoppingBasketIcon />
          <span className="header__optionLineOne">My Cart</span>
        </div>
      </div>
    </div>
  );
}

export default Header;
