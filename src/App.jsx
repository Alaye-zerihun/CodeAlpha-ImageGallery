import { useState } from 'react'
import ImageGallery from './components/ImageGallery'
import './App.css'

function App() {
  return (
    <div className="App">
      <header className="app-header">
        <h1>Image Gallery</h1>
        <p>Explore our curated collection of beautiful images</p>
      </header>
      <ImageGallery />
    </div>
  )
}

export default App