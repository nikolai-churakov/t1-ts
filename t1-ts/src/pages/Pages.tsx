import React, {useMemo} from "react";
import { Catalog } from "./Catalog";
import type { RootState } from '../redux/store'
import { useSelector } from 'react-redux'
import {ProductsList} from './ProductsList'
import {PAGES} from '../redux/shopSlice'


export const Pages = () => {
    const page = useSelector((state: RootState) => state.shop.page);

    const components = useMemo(
        () => ({
            // Стараница с Каталогом
            [PAGES.CATALOG]: <Catalog />,
             // Стараница со списком товарами
            [PAGES.PRODUCTS_LIST]: <ProductsList />,
        }),
        [],
    );

    return components[page];
};