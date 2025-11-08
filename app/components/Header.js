'use client'

import { useState } from 'react'

export default function Header() {
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [isNavOpen, setIsNavOpen] = useState(false)

  return (
    <>
      <header className="header" data-header>
        <div className="container">
          <h1>
            <a href="#" className="logo">Lux Kavarnica<span className="span">.</span></a>
          </h1>

          <nav className={`navbar ${isNavOpen ? 'active' : ''}`} data-navbar>
            <ul className="navbar-list">
              <li className="nav-item">
                <a href="#home" className="navbar-link" data-nav-link>Inicio</a>
              </li>
              <li className="nav-item">
                <a href="#about" className="navbar-link" data-nav-link>Sobre Nosotros</a>
              </li>
              <li className="nav-item">
                <a href="#food-menu" className="navbar-link" data-nav-link>Tienda</a>
              </li>
              <li className="nav-item">
                <a href="#blog" className="navbar-link" data-nav-link>Blog</a>
              </li>
              <li className="nav-item">
                <a href="#" className="navbar-link" data-nav-link>Contáctanos</a>
              </li>
            </ul>
          </nav>

          <div className="header-btn-group">
            <button className="search-btn" aria-label="Buscar" data-search-btn onClick={() => setIsSearchOpen(!isSearchOpen)}>
              <ion-icon name="search-outline"></ion-icon>
            </button>
            <button className="btn btn-hover">Reservación</button>
            <button className="nav-toggle-btn" aria-label="Alternar Menú" data-menu-toggle-btn onClick={() => setIsNavOpen(!isNavOpen)}>
              <span className="line top"></span>
              <span className="line middle"></span>
              <span className="line bottom"></span>
            </button>
          </div>
        </div>
      </header>

      <div className={`search-container ${isSearchOpen ? 'active' : ''}`} data-search-container>
        <div className="search-box">
          <input type="search" name="search" aria-label="Buscar aquí" placeholder="Escribe palabras clave aquí..." className="search-input" />
          <button className="search-submit" aria-label="Enviar búsqueda" data-search-submit-btn>
            <ion-icon name="search-outline"></ion-icon>
          </button>
        </div>
        <button className="search-close-btn" aria-label="Cancelar búsqueda" data-search-close-btn onClick={() => setIsSearchOpen(false)}></button>
      </div>
    </>
  )
}
