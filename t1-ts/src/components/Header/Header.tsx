import React from 'react';
import styled from 'styled-components';
import icon from '../../imgs/basket.png'

import '../Header/Header.css';
const HeaderContainer = styled.div`
  display: flex;
    justify-content: center;
    background-color: #484283;
    width: 1440px;
    height: 528px;
    position: relative;
`;

const Button = styled.div`
cursor: pointer;
`;

function Header() {
  return (

        <HeaderContainer>
          <div className='header-menu'>
            <span className="header-menu-name">Goods4you</span>

            <div>
              <div>Catalog</div>
              <button>About us</button>
              <button>Product selection</button>
              <button>Out team</button>
              <button>Shipping and payment</button>
              <button>Contacts</button>
          
              {/* <ul className="dropdown-menu">
                 <li><a href="#" className="a">Catalog</a></li>
                  <li><a href="#" className="a">About us</a></li>
                  <li><a href="#" className="a">Product selection</a></li>
                  <li><a href="#" className="a">Out team</a></li>
                  <li><a href="#" className="a">Shipping and payment</a></li>    
                  <li><a href="#" className="a">Contacts</a></li>    
                           
              </ul> */}
            </div>

            <div className="header-menu-basket">
              <span>Card</span>
              {/* <Svg/> */}
              <button className="button-basket"><img src={icon}/></button>
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

        </HeaderContainer>

  );
}

export default Header;