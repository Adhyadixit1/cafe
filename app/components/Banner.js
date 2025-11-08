export default function Banner() {
  return (
    <section className="section section-divider gray banner">
      <div className="container">
        <ul className="banner-list">
          <li className="banner-item banner-lg">
            <div className="banner-card">
              <img src="/assets/images/banner-1.jpg" width="550" height="450" loading="lazy" alt="¡Descuento para hamburguesas sabrosas y deliciosas!" className="banner-img" />
              <div className="banner-item-content">
                <p className="banner-subtitle">¡50% de descuento ahora!</p>
                <h3 className="banner-title">Descuento Para Hamburguesas Sabrosas!</h3>
                <p className="banner-text">Venta con descuento del 50% solo esta semana</p>
                <button className="btn">Ordenar Ahora</button>
              </div>
            </div>
          </li>

          <li className="banner-item banner-sm">
            <div className="banner-card">
              <img src="/assets/images/banner-2.jpg" width="550" height="465" loading="lazy" alt="Pizza deliciosa" className="banner-img" />
              <div className="banner-item-content">
                <h3 className="banner-title">Pizza Deliciosa</h3>
                <p className="banner-text">50% de descuento ahora</p>
                <button className="btn">Ordenar Ahora</button>
              </div>
            </div>
          </li>

          <li className="banner-item banner-sm">
            <div className="banner-card">
              <img src="/assets/images/banner-3.jpg" width="550" height="465" loading="lazy" alt="American Burgers" className="banner-img" />
              <div className="banner-item-content">
                <h3 className="banner-title">Hamburguesas Americanas</h3>
                <p className="banner-text">50% de descuento ahora</p>
                <button className="btn">Ordenar Ahora</button>
              </div>
            </div>
          </li>

          <li className="banner-item banner-md">
            <div className="banner-card">
              <img src="/assets/images/banner-4.jpg" width="550" height="220" loading="lazy" alt="Tasty Buzzed Pizza" className="banner-img" />
              <div className="banner-item-content">
                <h3 className="banner-title">Pizza Sabrosa y Exquisita</h3>
                <p className="banner-text">Venta con descuento del 50% solo esta semana</p>
                <button className="btn">Ordenar Ahora</button>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  )
}
