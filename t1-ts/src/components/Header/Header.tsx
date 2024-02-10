import React from 'react';
import '../Header/Header.css';
import '../../components/fonts/Jost-Black.ttf';
import '../../components/fonts/Jost-Bold.ttf';
import '../../components/fonts/Jost-ExtraBold.ttf';


function Header() {
  return (

        <div className="header">
          <div className='header-menu'>
            <span className="header-menu-name">Goods4you</span>
            <div className="header-menu-basket">

              <span className="header-menu-name">Card</span>
              <button className="button-basket"> <img src="imgs/basket.svg" alt="basket-logo"/></button>
            </div> 
          </div>

          <div className='header-h1-span'>
            Any products from famous brands
            with worldwide delivery
          </div>

          <div className='header-span'>
          We sell smartphones, laptops, clothes, shoes
          and many other products at low prices
          </div>

          <div className='header-big-site-text'>
          Goods4you
          </div>

          <div className='header-menu-go-to-shopping'>
              Go to shopping
          </div>

        </div>

  );
}

export default Header;
