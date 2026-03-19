import React from "react";
import CategoryProductList from "../productsCategories/CategoryProductList";

const HomeProductList = ({ enableFlowLayout = false }) => {
    // categoryName="" means fetch all
    return <CategoryProductList categoryName="" heading="Trending products" enableFlowLayout={enableFlowLayout} />;
};

export default HomeProductList;
