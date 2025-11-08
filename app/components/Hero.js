export default function Hero() {
  return (
    <section className="hero" id="home" style={{ backgroundImage: 'url(/assets/images/hero-bg.jpg)' }}>
      <div className="container">
        <div className="hero-content">
          <p className="hero-subtitle">Come Duerme Y</p>
          <h2 className="h1 hero-title">¡Hamburguesas súper deliciosas en la ciudad!</h2>
          <p className="hero-text">La comida es cualquier sustancia consumida para proporcionar soporte nutricional a un organismo.</p>
          <button className="btn">Reservar Una Mesa</button>
        </div>

        <figure className="hero-banner">
          <img src="/assets/images/hero-banner-bg.png" width="820" height="716" alt="" aria-hidden="true" className="w-100 hero-img-bg" />
          <img src="/assets/images/hero-banner.png" width="700" height="637" loading="lazy" alt="Burger" className="w-100 hero-img" />
        </figure>
      </div>
    </section>
  )
}
