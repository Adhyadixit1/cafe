export default function CTA() {
  return (
    <section className="section section-divider white cta" style={{ backgroundImage: 'url(/assets/images/hero-bg.jpg)' }}>
      <div className="container">
        <div className="cta-content">
          <h2 className="h2 section-title">
            El Lux Kavarnica Tiene Excelentes
            <span className="span">Hamburguesas de Calidad!</span>
          </h2>

          <p className="section-text">
            Los restaurantes en Hangzhou también atendían a muchos chinos del norte que habían huido al sur desde Kaifeng durante la invasión de los jurchen en la década de 1120, mientras que también se sabe que muchas familias regentaban restaurantes.
          </p>

          <button className="btn btn-hover">Ordenar Ahora</button>
        </div>

        <figure className="cta-banner">
          <img src="/assets/images/cta-banner.png" width="700" height="637" loading="lazy" alt="Burger" className="w-100 cta-img" />
          <img src="/assets/images/sale-shape.png" width="216" height="226" loading="lazy" alt="get up to 50% off now" className="abs-img scale-up-anim" />
        </figure>
      </div>
    </section>
  )
}
