import React, { useState, useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Product } from "../../../components/Product";
import locale from "../../../locale/locale";
import productImg from "../../../images/productImg.jpg";
import { setCategories, setProducts } from "../../../redux/shopSlice";
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

// interface ProductItemProps {
//   product: Product;
//   category: string;
// }

// interface ProductCategoriesResponse {
//   categories: [];
// }

interface IProduct {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
}

interface IProductResponse {
  limit: number;
  products: IProduct[];
  skip: number;
  total: number;
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
  const [category, setCategory] = useState("");

  const dispatch = useDispatch();

  const getAllProducts = () => {
    axios
      .get("https://dummyjson.com/products")
      .then((response) => {
        dispatch(setProducts((response.data as IProductResponse).products));
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const allProducts = useSelector((state: RootState) => state.shop.products);

  // const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setValue(event.currentTarget.value);
  // };

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

  const getSelectCategory = () => {
    axios.get(`https://dummyjson.com/products/search?q=${category}`);
  };

  const categories = useSelector((state: RootState) => state.shop.categories);

  useEffect(() => {
    if (categories.length === 0) {
      getCat();
    }
  }, [categories]);

  const handlerButtonAppleClickCategories = (category: string) => {
    setCategory(category);
  };
  console.log(category);

  const handlerButtonResetClickCategories = () => {
    setCategory("");
  };

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
              <Item
                key={id}
                onClick={() => handlerButtonAppleClickCategories(category)}
              >
                {category}
              </Item>
            ))}
          </CategoryItems>

          <ApplyButton onClick={getSelectCategory}>
            {locale.catalog.parameters.apply}
          </ApplyButton>

          <ResetButton onClick={handlerButtonResetClickCategories}>
            {locale.catalog.parameters.reset}
          </ResetButton>
        </CatalogParameters>
      </Catalog>

      {/* const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.currentTarget.value);
   }; */}

      <ProductContainer>
      allProducts
        {PRODUCTS.map(({ imgSrc, name, coast }, id) => (
          <Product key={id} imgSrc={imgSrc} name={name} coast={coast} />
        ))}
         {/* {allProducts.map((product, id : IProduct) => (
          <Product key={id}>{product.brand} {product.title} {product.price}</Product>
        ))} */}

        <ShowMoreButton>{locale.catalog.parameters.showMore}</ShowMoreButton>
      </ProductContainer>
    </Container>
  );
};
