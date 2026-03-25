import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { removeFromCart, addToCart } from "../redux/actions/cartActions";
const printerImg = "/assets/printer.png";

const Cart = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const cart = useSelector((state) => state.cart);
    const { cartItems } = cart;

    const [giftWrap, setGiftWrap] = useState(false);

    const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.qty, 0);
    const totalWithGift = subtotal + (giftWrap ? 10 : 0);

    const removeFromCartHandler = (id) => {
        dispatch(removeFromCart(id));
    };

    const checkoutHandler = () => {
        navigate('/checkout');
    };

    return (
        <div className="w-full min-h-screen py-10 bg-gradient-to-br from-slate-50 via-white to-blue-50/20">
            {/* Background Patterns */}
            <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-200/10 to-transparent rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-200/10 to-transparent rounded-full blur-3xl"></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 lg:px-8">

                {/* Header */}
                <section className="w-full bg-gradient-to-br from-white to-blue-50/30 rounded-3xl border-2 border-slate-100 p-8 md:p-12 mb-12 shadow-lg shadow-blue-100/30 backdrop-blur-sm">
                    <div className="text-center space-y-3">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black bg-gradient-to-r from-blue-600 to-blue-600 bg-clip-text text-transparent uppercase tracking-tighter">Shopping Hub</h1>
                        <div className="h-1 w-16 mx-auto bg-gradient-to-r from-blue-500 to-blue-600 rounded-full"></div>
                        <p className="text-xs sm:text-sm font-bold text-slate-600 uppercase tracking-widest">
                            You have <span className="bg-gradient-to-r from-blue-600 to-blue-600 bg-clip-text text-transparent font-black text-base sm:text-lg">{cartItems.reduce((acc, item) => acc + item.qty, 0)}</span> items in your inventory
                        </p>
                    </div>
                </section>

                {cartItems.length === 0 ? (
                    <div className="bg-white border-2 border-dashed border-slate-200 rounded-3xl p-20 text-center flex flex-col items-center justify-center space-y-6 shadow-lg">
                        <div className="w-28 h-28 bg-gradient-to-br from-blue-50 to-blue-50 rounded-full flex items-center justify-center border-2 border-slate-100">
                            <svg className="w-12 h-12 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                            </svg>
                        </div>
                        <div className="space-y-3">
                            <h2 className="text-3xl font-black bg-gradient-to-r from-blue-600 to-blue-600 bg-clip-text text-transparent uppercase tracking-tighter">Your Cart is Empty</h2>
                            <p className="text-slate-500 font-medium text-base">Ready to start printing? Explore our premium hardware collection.</p>
                        </div>
                        <Link to="/" className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-600 text-white rounded-2xl font-black uppercase text-[11px] tracking-widest hover:shadow-lg hover:shadow-blue-200/50 transition-all hover:scale-105">
                            Browse Inventory
                        </Link>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* LEFT : Cart Items */}
                        <div className="lg:col-span-2 space-y-6">
                            <div className="bg-white border-2 border-slate-100 rounded-3xl overflow-hidden shadow-lg shadow-blue-100/20 hover:shadow-xl transition-all">
                                <div className="hidden md:grid grid-cols-5 gap-4 p-6 bg-gradient-to-r from-slate-50 to-blue-50/50 text-[11px] font-black text-slate-600 uppercase tracking-widest border-b-2 border-slate-100">
                                    <span className="col-span-2">Product Details</span>
                                    <span className="text-center">Price</span>
                                    <span className="text-center">Qty</span>
                                    <span className="text-right">Action</span>
                                </div>

                                <div className="divide-y divide-slate-50">
                                    {cartItems.map((item) => (
                                        <div key={item.product} className="p-6 grid grid-cols-1 md:grid-cols-5 gap-4 items-center hover:bg-gradient-to-r hover:from-blue-50/20 hover:to-blue-50/20 transition-all duration-300">
                                            {/* Product */}
                                            <div className="col-span-1 md:col-span-2 flex gap-4 items-center">
                                                <div className="w-20 h-20 bg-gradient-to-br from-slate-50 to-slate-100 border-2 border-slate-100 rounded-2xl p-2 flex-shrink-0 flex items-center justify-center shadow-md">
                                                    <img
                                                        src={item.image ? (item.image.startsWith('http') ? item.image : `http://localhost:5000${item.image}`) : printerImg}
                                                        alt={item.title}
                                                        className="w-full h-full object-contain"
                                                    />
                                                </div>
                                                <div className="space-y-2 flex-1">
                                                    <Link to={`/product/${item.slug}`} className="text-sm font-black text-slate-900 uppercase tracking-tight hover:bg-gradient-to-r hover:from-blue-600 hover:to-blue-600 hover:bg-clip-text hover:text-transparent transition-all line-clamp-2">
                                                        {item.title}
                                                    </Link>
                                                    <p className="text-[10px] font-bold text-emerald-600 uppercase tracking-widest bg-emerald-50 px-2 py-1 rounded-full w-fit">✓ In Stock</p>
                                                </div>
                                            </div>

                                            {/* Price */}
                                            <div className="text-center hidden md:block">
                                                <p className="text-lg font-black bg-gradient-to-r from-blue-600 to-blue-600 bg-clip-text text-transparent">${item.price.toFixed(2)}</p>
                                            </div>

                                            {/* Quantity */}
                                            <div className="flex justify-center">
                                                <div className="flex items-center border-2 border-slate-200 rounded-xl bg-white overflow-hidden h-10 shadow-sm">
                                                    <button 
                                                        onClick={() => dispatch(addToCart(item.product, Math.max(1, item.qty - 1)))}
                                                        className="px-3 hover:bg-gradient-to-r hover:from-blue-50 hover:to-blue-50 text-slate-500 hover:text-blue-600 font-bold transition-all"
                                                    >−</button>
                                                    <span className="px-3 text-sm font-black text-slate-900">{item.qty}</span>
                                                    <button 
                                                        onClick={() => dispatch(addToCart(item.product, Math.min(item.countInStock, item.qty + 1)))}
                                                        className="px-3 hover:bg-gradient-to-r hover:from-blue-50 hover:to-blue-50 text-slate-500 hover:text-blue-600 font-bold transition-all"
                                                    >+</button>
                                                </div>
                                            </div>

                                            {/* Action */}
                                            <div className="text-right">
                                                <button 
                                                    onClick={() => removeFromCartHandler(item.product)}
                                                    className="p-3 text-rose-500 hover:bg-gradient-to-r hover:from-rose-50 hover:to-red-50 rounded-xl transition-all hover:shadow-md"
                                                >
                                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-4v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                                    </svg>
                                                </button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* RIGHT : Summary */}
                        <div className="space-y-6">
                            <div className="bg-gradient-to-br from-white to-blue-50/30 border-2 border-slate-100 rounded-3xl p-8 shadow-lg shadow-blue-100/30 backdrop-blur-sm space-y-6 h-fit lg:sticky lg:top-24 hover:shadow-xl transition-all">
                                <h3 className="text-2xl font-black bg-gradient-to-r from-blue-600 to-blue-600 bg-clip-text text-transparent uppercase tracking-tighter">Order Summary</h3>
                                
                                <div className="space-y-3">
                                    <div className="flex items-center justify-between py-3 px-4 bg-slate-50 rounded-xl border border-slate-100">
                                        <span className="text-[11px] font-black text-slate-600 uppercase tracking-widest">Subtotal</span>
                                        <span className="text-lg font-black bg-gradient-to-r from-blue-600 to-blue-600 bg-clip-text text-transparent">${subtotal.toFixed(2)}</span>
                                    </div>

                                    <div className="flex items-center justify-between p-4 bg-gradient-to-r from-blue-50 to-blue-50 rounded-xl border-2 border-blue-100 group cursor-pointer hover:border-blue-200 hover:shadow-md transition-all" onClick={() => setGiftWrap(!giftWrap)}>
                                        <div className="flex items-center gap-3">
                                            <div className={`w-6 h-6 rounded-lg border-2 transition-all flex items-center justify-center flex-shrink-0 ${giftWrap ? 'bg-gradient-to-r from-blue-500 to-blue-500 border-transparent' : 'border-slate-300 hover:border-blue-400'}`}>
                                                {giftWrap && <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/></svg>}
                                            </div>
                                            <span className="text-[11px] font-black text-slate-700 uppercase tracking-widest">🎁 Premium Gift Packing</span>
                                        </div>
                                        <span className="text-sm font-black bg-gradient-to-r from-blue-600 to-blue-600 bg-clip-text text-transparent">$10.00</span>
                                    </div>
                                </div>

                                <div className="pt-2 border-t-2 border-slate-100">
                                    <div className="flex items-center justify-between mb-3">
                                        <span className="text-xs font-black text-slate-600 uppercase tracking-widest">Invoice Total</span>
                                        <span className="text-5xl font-black bg-gradient-to-r from-blue-600 to-blue-600 bg-clip-text text-transparent tracking-tighter">${totalWithGift.toFixed(2)}</span>
                                    </div>
                                    <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest text-center bg-slate-50 py-2 rounded-lg">Taxes & Logistics at checkout</p>
                                </div>

                                <div className="space-y-3 pt-4">
                                    <button 
                                        onClick={checkoutHandler}
                                        className="w-full bg-gradient-to-r from-blue-600 to-blue-600 text-white py-5 rounded-2xl font-black uppercase text-[12px] tracking-widest hover:shadow-lg hover:shadow-blue-200/50 transition-all shadow-lg active:scale-95 hover:from-blue-700 hover:to-blue-700"
                                    >
                                        ✓ Proceed to Checkout
                                    </button>
                                    <div className="flex flex-col items-center justify-center gap-3 py-4 px-4 bg-gradient-to-r from-slate-50 to-blue-50/30 rounded-2xl border-2 border-slate-100 hover:border-slate-200 transition-all">
                                        <img src="https://razorpay.com/assets/razorpay-glyph.svg" alt="Razorpay" className="h-4 opacity-70" />
                                        <span className="text-[10px] font-bold text-slate-600 uppercase tracking-widest">🔒 Verified Secure Payment</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Cart;
