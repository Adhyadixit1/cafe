export default function Promo() {
  return (
    <section className="section section-divider white promo">
      <div className="container">
        <ul className="promo-list has-scrollbar">
          <li className="promo-item">
            <div className="promo-card">
              <div className="card-icon">
                <ion-icon name="restaurant-outline" style={{ fontSize: '60px', color: '#ff9d2d' }}></ion-icon>
              </div>
              <h3 className="h3 card-title">Pizza Mexicana</h3>
              <p className="card-text">La comida es cualquier sustancia consumida para proporcionar soporte nutricional a un organismo.</p>
              <img src="/assets/images/promo-1.png" width="300" height="300" loading="lazy" alt="Maxican Pizza" className="w-100 card-banner" />
            </div>
          </li>

          <li className="promo-item">
            <div className="promo-card">
              <div className="card-icon">
                <ion-icon name="wine-outline" style={{ fontSize: '60px', color: '#ff9d2d' }}></ion-icon>
              </div>
              <h3 className="h3 card-title">Bebidas Suaves</h3>
              <p className="card-text">La comida es cualquier sustancia consumida para proporcionar soporte nutricional a un organismo.</p>
              <img src="/assets/images/promo-2.png" width="300" height="300" loading="lazy" alt="Soft Drinks" className="w-100 card-banner" />
            </div>
          </li>

          <li className="promo-item">
            <div className="promo-card">
              <div className="card-icon">
                <ion-icon name="fast-food-outline" style={{ fontSize: '60px', color: '#ff9d2d' }}></ion-icon>
              </div>
              <h3 className="h3 card-title">Papas Fritas</h3>
              <p className="card-text">La comida es cualquier sustancia consumida para proporcionar soporte nutricional a un organismo.</p>
              <img src="/assets/images/promo-3.png" width="300" height="300" loading="lazy" alt="French Fry" className="w-100 card-banner" />
            </div>
          </li>

          <li className="promo-item">
            <div className="promo-card">
              <div className="card-icon">
                <ion-icon name="pizza-outline" style={{ fontSize: '60px', color: '#ff9d2d' }}></ion-icon>
              </div>
              <h3 className="h3 card-title">Burger Kingo</h3>
              <p className="card-text">La comida es cualquier sustancia consumida para proporcionar soporte nutricional a un organismo.</p>
              <img src="/assets/images/promo-4.png" width="300" height="300" loading="lazy" alt="Burger Kingo" className="w-100 card-banner" />
            </div>
          </li>

          <li className="promo-item">
            <div className="promo-card">
              <div className="card-icon">
                <ion-icon name="restaurant-outline" style={{ fontSize: '60px', color: '#ff9d2d' }}></ion-icon>
              </div>
              <h3 className="h3 card-title">Pollo Masala</h3>
              <p className="card-text">La comida es cualquier sustancia consumida para proporcionar soporte nutricional a un organismo.</p>
              <img src="/assets/images/promo-5.png" width="300" height="300" loading="lazy" alt="Chicken Masala" className="w-100 card-banner" />
            </div>
          </li>
        </ul>
      </div>
    </section>
  )
}
