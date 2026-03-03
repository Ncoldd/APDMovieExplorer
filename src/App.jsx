import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'

import './App.css'
import Header from "./components/Header";
import Home from "./pages/Home";
import Favorites from './pages/Favorites';
import MovieDetails from './pages/MovieDetails';
import Profile from './pages/Profile';

export default function App() {
  return (
    <>
    <Header />

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/movie/:id" element={<MovieDetails />} />
      <Route path="/favorites" element={<Favorites />} />
      <Route path="/profile" element={<Profile />} />

      {/* 404 */}
      <Route path="*" element={<div>404 Not Found</div>} />
    </Routes>
    </>
  );
}

