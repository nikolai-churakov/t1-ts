import React from "react";
import styled from "styled-components";

import Header from "../components/Header/Header";
import Product from "../components/Product/Product";

const BodyContainet = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  background-color: #f1c2b2;
  width: 1440px;
  height: 1378px;
  position: absolute;
`;

const CatalogeContainet = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  background-color: #a79995;
  width: 280px;
  min-height: 611px;
  margin-right: 20px;
`;

const CatalogeCataloge = styled.div`
  color: #444B58;
  font-weight: 700;
  font-size: 30px;
  letter-spacing: 1px;
  position: relative;
  left: -2px;
  top: -344px;
`;

const CatalogeSelectionByParamContainet = styled.div`
  display: flex;
  justify-content: left;
  flex-direction: column;
  background-color: #FFF4EE;
  height: 535px;
  color: #444B58;
  font-weight: 600;
  font-size: 24px;
  letter-spacing: 1px;
  position: relative;
    top: -312px;
    left: 0px;
  margin: 0px;
`;
const CategorySpan = styled.span`
  color: #444B58;
  font-weight: 600;
  font-size: 16px;
  margin-left: 20px;
  margin-top: -12px;
`;
const CatalogeCategoryButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  box-sizing: border-box;
  flex-wrap: wrap;
  margin-left: 20px;
  width: 240px;
  width: 240px;
  padding: 0px;
`;

const CatalogeCategoryButtonItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 120px;
  height: 57px;
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
  border: solid #c27850 1px;
  font-size: 16px;
  font-weight: 600;
`;

const CatalogeContainetButtonApply = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 237px;
  height: 65px;
  position: absolute;
  left: 22px;
  top: 391px;
  background-color: #444B58;
  border-radius: 4px;
  color: #ffffff; &:hover { color: #f14f4f; }
  cursor: pointer;
  font-size: 16px;
  font-weight: 400;
  text-align: center;
  align-items: center;
  justify-content: center;
`;

const CatalogeContainetButtonReset = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 237px;
  height: 65px;
  background-color: #ffffff;
  border-radius: 4px;
  left: 23px;
  top: 470px;
  color: #444B58; &:hover { color: #000000; }
  cursor: pointer;
  font-size: 16px;
  font-weight: 400;
  text-align: center;
  align-items: center;
  justify-content: center;
`;

const ProductContainet = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 880px;
  min-height: 1194px;
  margin-top: 130px;
`;

function HomePage() {
  return (
    <div>
      <Header />
      <BodyContainet>
        <CatalogeContainet>
           <CatalogeCataloge>Catalog</CatalogeCataloge>
           <CatalogeSelectionByParamContainet>
              <p>Selection <br></br> by parameters</p>
              <CategorySpan>Category</CategorySpan>
              <CatalogeCategoryButtonContainer>
                <CatalogeCategoryButtonItem>smartphones</CatalogeCategoryButtonItem>
                <CatalogeCategoryButtonItem>laptops</CatalogeCategoryButtonItem>
                <CatalogeCategoryButtonItem>sneakers</CatalogeCategoryButtonItem>
                <CatalogeCategoryButtonItem>sneakers</CatalogeCategoryButtonItem>
                <CatalogeCategoryButtonItem>sneakers</CatalogeCategoryButtonItem>
                <CatalogeCategoryButtonItem>sneakers</CatalogeCategoryButtonItem>
                <CatalogeCategoryButtonItem>sneakers</CatalogeCategoryButtonItem>
                <CatalogeCategoryButtonItem>sneakers</CatalogeCategoryButtonItem>
              </CatalogeCategoryButtonContainer>

              <CatalogeContainetButtonApply>Apply</CatalogeContainetButtonApply>

              <CatalogeContainetButtonReset>Reset</CatalogeContainetButtonReset>
              

           </CatalogeSelectionByParamContainet>
        </CatalogeContainet>
        
        <ProductContainet>
          {/* Сюда будут мапаться карточки с бека */}
          <Product/>
          <Product/>
          <Product/>
          <Product/>
          <Product/>
          <Product/>
          <Product/>
          <Product/>
          <Product/>
          </ProductContainet>
      </BodyContainet>
    </div>
  );
}

export default HomePage;
