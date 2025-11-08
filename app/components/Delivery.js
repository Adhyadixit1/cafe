export default function Delivery() {
  return (
    <section className="section section-divider gray delivery">
      <div className="container">
        <div className="delivery-content">
          <h2 className="h2 section-title">
            Un Momento De Entrega En <span className="span">El Tiempo y Lugar Correctos</span>
          </h2>

          <p className="section-text">
            Los restaurantes en Hangzhou también atendían a muchos chinos del norte que habían huido al sur desde Kaifeng durante la invasión de los jurchen en la década de 1120, mientras que también se sabe que muchas familias regentaban restaurantes.
          </p>

          <button className="btn btn-hover">Ordenar Ahora</button>
        </div>

        <figure className="delivery-banner">
          <img src="/assets/images/delivery-banner-bg.png" width="700" height="602" loading="lazy" alt="clouds" className="w-100" />
          <img src="/assets/images/delivery-boy.svg" width="1000" height="880" loading="lazy" alt="delivery boy" className="w-100 delivery-img" data-delivery-boy />
        </figure>
      </div>
    </section>
  )
}
