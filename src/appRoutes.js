import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from './comps/footer'
import HeaderComp from './comps/headerComp'
import Home from './comps/home';
import NotFound from './comps/notFound';
import Page404 from './comps/page404';
import VideoInfo from './comps/videoInfo';
import VodSearchList from './comps/vodSearchList';
import VodYearList from './comps/vodYearList';

export default function AppRoutes() {


  return (
    <BrowserRouter>
      <HeaderComp />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/video/:id" element={<VideoInfo />} />
        <Route path="/year/:YYYY" element={<VodYearList />} />
        <Route path="/search/:searchQ" element={<VodSearchList />} />
        <Route path="/notFound" element={<NotFound />} />
        <Route path="/*" element={<Page404 />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}
