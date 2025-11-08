export default function Testimonials() {
  return (
    <section className="section section-divider white testi">
      <div className="container">
        <p className="section-subtitle">Testimonios</p>
        <h2 className="h2 section-title">
          Opiniones de Nuestros <span className="span">Clientes</span>
        </h2>
        <p className="section-text">La comida es cualquier sustancia consumida para proporcionar soporte nutricional a un organismo.</p>

        <ul className="testi-list has-scrollbar">
          <li className="testi-item">
            <div className="testi-card">
              <div className="profile-wrapper">
                <figure className="avatar">
                  <img src="/assets/images/avatar-1.jpg" width="80" height="80" loading="lazy" alt="Robert William" />
                </figure>
                <div>
                  <h3 className="h4 testi-name">Robert William</h3>
                  <p className="testi-title">CEO Kingfisher</p>
                </div>
              </div>
              <blockquote className="testi-text">
                "Nunca me perdería sin restaurante. Me gustaría agradecer personalmente por su producto sobresaliente."
              </blockquote>
              <div className="rating-wrapper">
                {[...Array(5)].map((_, i) => <ion-icon key={i} name="star"></ion-icon>)}
              </div>
            </div>
          </li>

          <li className="testi-item">
            <div className="testi-card">
              <div className="profile-wrapper">
                <figure className="avatar">
                  <img src="/assets/images/avatar-2.jpg" width="80" height="80" loading="lazy" alt="Thomas Josef" />
                </figure>
                <div>
                  <h3 className="h4 testi-name">Thomas Josef</h3>
                  <p className="testi-title">CEO Getforce</p>
                </div>
              </div>
              <blockquote className="testi-text">
                "Nunca me perdería sin restaurante. Me gustaría agradecer personalmente por su producto sobresaliente."
              </blockquote>
              <div className="rating-wrapper">
                {[...Array(5)].map((_, i) => <ion-icon key={i} name="star"></ion-icon>)}
              </div>
            </div>
          </li>

          <li className="testi-item">
            <div className="testi-card">
              <div className="profile-wrapper">
                <figure className="avatar">
                  <img src="/assets/images/avatar-3.jpg" width="80" height="80" loading="lazy" alt="Charles Richard" />
                </figure>
                <div>
                  <h3 className="h4 testi-name">Charles Richard</h3>
                  <p className="testi-title">CEO Angela</p>
                </div>
              </div>
              <blockquote className="testi-text">
                "Nunca me perdería sin restaurante. Me gustaría agradecer personalmente por su producto sobresaliente."
              </blockquote>
              <div className="rating-wrapper">
                {[...Array(5)].map((_, i) => <ion-icon key={i} name="star"></ion-icon>)}
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  )
}
