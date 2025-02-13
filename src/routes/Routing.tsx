import React from 'react';
import { Route, Routes } from 'react-router-dom';
import LandingPage from 'pages/LandingPage';
import GoodsPage from 'pages/GoodsPage';
import SearchPage from 'pages/SearchPage';
import SearchResultPage from 'pages/SearchResultPage';
import OrderPage from 'pages/OrderPage';
import CategoryPage from 'pages/CategoryPage';
import NotFoundPage from 'pages/NotFoundPage';
import LoginPage from 'pages/LoginPage';
import RegisterPage from 'pages/RegisterPage';
import ProfilePage from 'pages/ProfilePage';
import CartPage from 'pages/CartPage';
import PostGoodsPage from 'pages/PostGoodsPage';
import PostReviewPage from 'pages/PostReviewPage';
import TestPage from 'pages/TestPage';
import PostSizePage from 'pages/PostSizePage';
import PaymentPage from 'pages/PaymentPage';
import SuccessPage from 'pages/SuccessPage';
import NewBestPage from 'pages/NewBestPage';
import Path from './Path';

function Routing() {
  return (
    <Routes>
      <Route path="*" element={<NotFoundPage />} />
      <Route path={Path.LandingPage} element={<LandingPage />} />
      <Route path={Path.GoodsPage} element={<GoodsPage />} />
      <Route path={Path.SearchPage} element={<SearchPage />} />
      <Route path={Path.SearchResultPage} element={<SearchResultPage />} />
      <Route path={Path.OrderPage} element={<OrderPage />} />
      <Route path={Path.CategoryPage} element={<CategoryPage />} />
      <Route path={Path.LoginPage} element={<LoginPage />} />
      <Route path={Path.RegisterPage} element={<RegisterPage />} />
      <Route path={Path.ProfilePage} element={<ProfilePage />} />
      <Route path={Path.CartPage} element={<CartPage />} />
      <Route path={Path.PostGoodsPage} element={<PostGoodsPage />} />
      <Route path={Path.PostReviewPage} element={<PostReviewPage />} />
      <Route path={Path.TestPage} element={<TestPage />} />
      <Route path={Path.PostGoodsSizePage} element={<PostSizePage />} />
      <Route path={Path.PaymentPage} element={<PaymentPage />} />
      <Route path={Path.SuccessPage} element={<SuccessPage />} />
      <Route path={Path.NewPage} element={<NewBestPage />} />
      <Route path={Path.BestPage} element={<NewBestPage />} />
    </Routes>
  );
}

export default Routing;
