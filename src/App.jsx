import React from 'react'

import Home from "./page/Home"
import Post from "./page/Post"
import Category from "./page/Category"
import Author from "./page/Author"

import Nav from './components/Nav'

import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post" element={<Post />} />
        <Route path="/category" element={<Category />} />
        <Route path="/author" element={<Author />} />
      </Routes>

    </div>
  );
}

export default App;
