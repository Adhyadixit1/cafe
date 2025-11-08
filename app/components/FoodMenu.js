'use client'

import { useState } from 'react'

export default function FoodMenu() {
  const [activeFilter, setActiveFilter] = useState('All')

  const menuItems = [
    { id: 1, category: 'Pollo', title: 'Pollo Frito Ilimitado', price: '$49.00', oldPrice: '$69.00', image: '/assets/images/food-menu-1.png', badge: '-15%' },
    { id: 2, category: 'Fideos', title: 'Whopper de Burger King', price: '$29.00', oldPrice: '$39.00', image: '/assets/images/food-menu-2.png', badge: '-10%' },
    { id: 3, category: 'Pizzas', title: 'Pizzas de White Castle', price: '$49.00', oldPrice: '$69.00', image: '/assets/images/food-menu-3.png', badge: '-25%' },
    { id: 4, category: 'Burrito', title: 'Burrito Supremo de Bell', price: '$59.00 ', oldPrice: '$69.00', image: '/assets/images/food-menu-4.png', badge: '-20%' },
    { id: 5, category: 'Nuggets', title: 'Pollo Kung Pao BBQ', price: '$49.00', oldPrice: '$69.00', image: '/assets/images/food-menu-5.png', badge: '-5%' },
    { id: 6, category: 'Pollo', title: 'Pollo de Wendy\'s', price: '$49.00', oldPrice: '$69.00', image: '/assets/images/food-menu-6.png', badge: '-15%' },
  ]

  const filteredItems = activeFilter === 'All' ? menuItems : menuItems.filter(item => item.category === activeFilter)

  return (
    <section className="section food-menu" id="food-menu">
      <div className="container">
        <p className="section-subtitle">Platos Populares</p>
        <h2 className="h2 section-title">
          Nuestras Comidas <span className="span">Deliciosas</span>
        </h2>
        <p className="section-text">
          La comida es cualquier sustancia consumida para proporcionar soporte nutricional a un organismo.
        </p>

        <ul className="fiter-list">
          <li>
            <button className={`filter-btn ${activeFilter === 'All' ? 'active' : ''}`} onClick={() => setActiveFilter('All')}>Todo</button>
          </li>
          <li>
            <button className={`filter-btn ${activeFilter === 'Pizza' ? 'active' : ''}`} onClick={() => setActiveFilter('Pizza')}>Pizza</button>
          </li>
          <li>
            <button className={`filter-btn ${activeFilter === 'Burger' ? 'active' : ''}`} onClick={() => setActiveFilter('Burger')}>Hamburguesa</button>
          </li>
          <li>
            <button className={`filter-btn ${activeFilter === 'Drinks' ? 'active' : ''}`} onClick={() => setActiveFilter('Drinks')}>Bebidas</button>
          </li>
          <li>
            <button className={`filter-btn ${activeFilter === 'Sandwich' ? 'active' : ''}`} onClick={() => setActiveFilter('Sandwich')}>Sándwich</button>
          </li>
        </ul>

        <ul className="food-menu-list">
          {filteredItems.map(item => (
            <li key={item.id}>
              <div className="food-menu-card">
                <div className="card-banner">
                  <img src={item.image} width="300" height="300" loading="lazy" alt={item.title} className="w-100" />
                  {item.badge && <div className="badge">{item.badge}</div>}
                  <button className="btn food-menu-btn">Pedir Ahora</button>
                </div>

                <div className="wrapper">
                  <p className="category">{item.category}</p>
                  <div className="rating-wrapper">
                    {[...Array(5)].map((_, i) => <ion-icon key={i} name="star"></ion-icon>)}
                  </div>
                </div>

                <h3 className="h3 card-title">{item.title}</h3>

                <div className="price-wrapper">
                  <p className="price-text">Precio:</p>
                  <data className="price" value={item.price.replace('$', '')}>{item.price}</data>
                  {item.oldPrice && <del className="del" value={item.oldPrice.replace('$', '')}>{item.oldPrice}</del>}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
