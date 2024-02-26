import React, { useState, useEffect, useCallback, memo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Product } from "../../../components/Product";
import locale from "../../../locale/locale";
import productImg from "../../../images/productImg.jpg";
import { setCategories } from "../../../redux/shopSlice";
import { RootState } from "../../../redux/store";
import axios from "axios";

import {
  Container,
  Catalog,
  Title,
  CatalogParameters,
  CategoryText,
  CategoryItems,
  Item,
  ApplyButton,
  ResetButton,
  ProductContainer,
  ShowMoreButton,
  SelectionText,
} from "./styled";

interface Product {
  id: string;
  title: string;
  price: number;
  category: string;
}

interface ProductItemProps {
  product: Product;
  category: string;
}

interface ProductCategoriesResponse {
  categories: [];
}

const PRODUCTS = [
  {
    imgSrc: productImg,
    name: "Nike Air Force 1 '07 QS",
    coast: "110 $",
  },
  {
    imgSrc: productImg,
    name: "Nike Air Force 1 '07 QS",
    coast: "110 $",
  },
  {
    imgSrc: productImg,
    name: "Nike Air Force 1 '07 QS",
    coast: "110 $",
  },
  {
    imgSrc: productImg,
    name: "Nike Air Force 1 '07 QS",
    coast: "110 $",
  },
  {
    imgSrc: productImg,
    name: "Nike Air Force 1 '07 QS",
    coast: "110 $",
  },
  {
    imgSrc: productImg,
    name: "Nike Air Force 1 '07 QS",
    coast: "110 $",
  },
  {
    imgSrc: productImg,
    name: "Nike Air Force 1 '07 QS",
    coast: "110 $",
  },
  {
    imgSrc: productImg,
    name: "Nike Air Force 1 '07 QS",
    coast: "110 $",
  },
  {
    imgSrc: productImg,
    name: "Nike Air Force 1 '07 QS",
    coast: "110 $",
  },
];

export const Body = () => {

  const [category, setCategory] = useState('');

  const dispatch = useDispatch();

  const getCat = () => {
    axios
      .get("https://dummyjson.com/products/categories")
      .then((response) => {
        dispatch(setCategories(response.data));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getCatCategory = () => {
    axios
      .get(`https://dummyjson.com/products/search?q=${category}`)
      
  };

  const categories = useSelector((state: RootState) => state.shop.categories);

  useEffect(() => {
    if (categories.length === 0) {
      getCat();
    }
  }, [categories]);

  const handlerClickCat = (category: string) => {
    setCategory(category)
  };
console.log(category);
  return (
    <Container id="cataloge">
      <Catalog>
        <Title>{locale.catalog.title}</Title>

        <CatalogParameters>
          <SelectionText>
            Selection <br /> by parameters
          </SelectionText>

          <CategoryText>{locale.catalog.parameters.category}</CategoryText>

          <CategoryItems>
            {categories.map((category: string, id) => (
              <Item key={id} onClick={()=>handlerClickCat(category)}>
                {category}
              </Item>
            ))}
          </CategoryItems>

          <ApplyButton onClick={getCatCategory}
          
          
          >{locale.catalog.parameters.apply}</ApplyButton>

          <ResetButton>
            {locale.catalog.parameters.reset}
          </ResetButton>
        </CatalogParameters>
      </Catalog>

      <ProductContainer>
        {PRODUCTS.map(({ imgSrc, name, coast }, id) => (
          <Product key={id} imgSrc={imgSrc} name={name} coast={coast} />
        ))}

        <ShowMoreButton>{locale.catalog.parameters.showMore}</ShowMoreButton>
      </ProductContainer>
    </Container>
  );
};
