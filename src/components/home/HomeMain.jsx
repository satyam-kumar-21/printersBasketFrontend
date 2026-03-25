
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { listProducts } from '../../redux/actions/productActions';
import Hero from "./Hero";

import Home from "./Home";

import Reviews from "./Reviews";

import ProductGrid from "../productsCategories/ProductGrid";
import Categories from '../Categories';
import WhyChooseUs from './WhyChooseUs';
import PrinterBanners from './PrinterBanners';

const HomeMain = () => {
    const [searchParams] = useSearchParams();
    const searchQuery = searchParams.get('search');
    const dispatch = useDispatch();
    const productList = useSelector((state) => state.productList);
    const { loading, products } = productList;

    useEffect(() => {
        if (searchQuery) {
            dispatch(listProducts(searchQuery));
        }
    }, [dispatch, searchQuery]);

    if (searchQuery) {
        return (
            <div className="min-h-screen bg-slate-50/50">
                <div className="max-w-7xl mx-auto px-4 py-8">
                    <h1 className="text-3xl font-bold mb-8">Search Results for "{searchQuery}"</h1>
                    {loading ? (
                        <div className="text-center py-12">Loading...</div>
                    ) : products && products.length > 0 ? (
                        <ProductGrid products={products} />
                    ) : (
                        <div className="text-center py-12">No products found for "{searchQuery}"</div>
                    )}
                </div>
            </div>
        );
    }

    return (
        <>
            <Hero />
            <Categories />
            {/* <WelcomeSection /> */}
            <Home />
            
            <PrinterBanners />
            <Reviews />
            <WhyChooseUs />
         

            
            {/* <StatsCircles />
            <ImportantInfoSection /> */}
        </>
    );
};

export default HomeMain;
