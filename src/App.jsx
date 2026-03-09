import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'


import './App.css'
import Header from "./components/Header";
import Home from "./pages/Home";
import Favorites from './pages/Favorites';
import MovieDetails from './pages/MovieDetails';
import Profile from './pages/Profile';
import Login from './pages/Login';

import { AuthContext } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';


export default function App() {
  return (
    <>
    <Header />

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/movie/:id" element={<MovieDetails />} />
      <Route path="/login" element={<Login />} />
      <Route path="/favorites" element={<ProtectedRoute><Favorites /></ProtectedRoute>} />
      <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />

      {/* 404 */}
      <Route path="*" element={<div>404 Not Found</div>} />
    </Routes>
    </>
  );
}

