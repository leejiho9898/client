import React from 'react';
import { Route, Routes } from 'react-router-dom';
import TestPage from 'Pages/TestPage';
import GoodsPage from 'Pages/GoodsPage';
import LandingPage from 'Pages/LandingPage';
import Path from './Path';

function Routing() {
  return (
    <Routes>
      <Route path={Path.LandingPage} element={<LandingPage />} />
      <Route path={Path.TestPage} element={<TestPage />} />
      <Route path={Path.GoodsPage} element={<GoodsPage />} />
    </Routes>
  );
}

export default Routing;
