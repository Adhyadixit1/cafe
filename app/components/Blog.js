export default function Blog() {
  const blogPosts = [
    {
      id: 1,
      image: '/assets/images/blog-1.jpg',
      badge: 'Pizza',
      date: '01 Ene 2022',
      author: 'Jonathan Smith',
      title: '¿Qué Piensas Sobre Recetas de Pizza de Queso?',
      text: 'Los expertos financieros apoyan o ayudan a encontrar la mejor manera de aumentar tus fondos...'
    },
    {
      id: 2,
      image: '/assets/images/blog-2.jpg',
      badge: 'Hamburguesa',
      date: '01 Ene 2022',
      author: 'Jonathan Smith',
      title: 'Haciendo Tiras de Pollo con Ingredientes Deliciosos y Nuevos.',
      text: 'Los expertos financieros apoyan o ayudan a encontrar la mejor manera de aumentar tus fondos...'
    },
    {
      id: 3,
      image: '/assets/images/blog-3.jpg',
      badge: 'Pollo',
      date: '01 Ene 2022',
      author: 'Jonathan Smith',
      title: 'Pasta Caliente Innovadora de Queso Cruda Hace Hecho Creador.',
      text: 'Los expertos financieros apoyan o ayudan a encontrar la mejor manera de aumentar tus fondos...'
    }
  ]

  return (
    <section className="section section-divider white blog" id="blog">
      <div className="container">
        <p className="section-subtitle">Últimas Publicaciones del Blog</p>
        <h2 className="h2 section-title">
          Esto Es Todo Sobre <span className="span">Comidas</span>
        </h2>
        <p className="section-text">
          La comida es cualquier sustancia consumida para proporcionar soporte nutricional a un organismo.
        </p>

        <ul className="blog-list">
          {blogPosts.map(post => (
            <li key={post.id}>
              <div className="blog-card">
                <div className="card-banner">
                  <img src={post.image} width="600" height="390" loading="lazy" alt={post.title} className="w-100" />
                  <div className="badge">{post.badge}</div>
                </div>

                <div className="card-content">
                  <div className="card-meta-wrapper">
                    <a href="#" className="card-meta-link">
                      <ion-icon name="calendar-outline"></ion-icon>
                      <time className="meta-info" dateTime="2022-01-01">{post.date}</time>
                    </a>
                    <a href="#" className="card-meta-link">
                      <ion-icon name="person-outline"></ion-icon>
                      <p className="meta-info">{post.author}</p>
                    </a>
                  </div>

                  <h3 className="h3">
                    <a href="#" className="card-title">{post.title}</a>
                  </h3>

                  <p className="card-text">{post.text}</p>

                  <a href="#" className="btn-link">
                    <span>Leer Más</span>
                    <ion-icon name="arrow-forward" aria-hidden="true"></ion-icon>
                  </a>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
