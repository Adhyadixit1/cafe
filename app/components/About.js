export default function About() {
  return (
    <section className="section section-divider gray about" id="about">
      <div className="container">
        <div className="about-banner">
          <img src="/assets/images/about-banner.png" width="509" height="459" loading="lazy" alt="Burger with Drinks" className="w-100 about-img" />
          <img src="/assets/images/sale-shape-red.png" width="216" height="226" alt="get up to 50% off now" className="abs-img scale-up-anim" />
        </div>

        <div className="about-content">
          <h2 className="h2 section-title">
            Cafetería, Hamburguesas y Mejores Pizzas
            <span className="span">¡en la Ciudad!</span>
          </h2>

          <p className="section-text">
            Los restaurantes en Hangzhou también atendían a muchos chinos del norte que habían huido al sur desde Kaifeng durante la invasión de los jurchen en la década de 1120, mientras que también se sabe que muchas familias regentaban restaurantes.
          </p>

          <ul className="about-list">
            <li className="about-item">
              <ion-icon name="checkmark-outline"></ion-icon>
              <span className="span">Comidas Deliciosas y Saludables</span>
            </li>
            <li className="about-item">
              <ion-icon name="checkmark-outline"></ion-icon>
              <span className="span">Zona Especial para Familias y Niños</span>
            </li>
            <li className="about-item">
              <ion-icon name="checkmark-outline"></ion-icon>
              <span className="span">Música y Otras Instalaciones</span>
            </li>
            <li className="about-item">
              <ion-icon name="checkmark-outline"></ion-icon>
              <span className="span">Entrega a Domicilio de Comida Más Rápida</span>
            </li>
          </ul>

          <button className="btn btn-hover">Ordenar Ahora</button>
        </div>
      </div>
    </section>
  )
}
