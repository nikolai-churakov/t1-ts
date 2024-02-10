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

            <div>
              <ul className="dropdown-menu">
                 <li><a href="#" className="a">Catalog</a></li>
                  <li><a href="#" className="a">About us</a></li>
                  <li><a href="#" className="a">Product selection</a></li>
                  <li><a href="#" className="a">Out team</a></li>
                  <li><a href="#" className="a">Shipping and payment</a></li>    
                  <li><a href="#" className="a">Contacts</a></li>    
                           
              </ul>
            </div>

            <div className="header-menu-basket">
              <span>Card</span>
              <button className="button-basket"> <img src="../../imgs/basket.svg" alt="basket-logo"/></button>
            </div> 
            <div className="browse-menu-hr"></div>
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
