export default function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="footer-top" style={{ backgroundImage: 'url(/assets/images/footer-illustration.png)' }}>
          <div className="container">
            <div className="footer-brand">
              <a href="#" className="logo">Lux Kavarnica<span className="span">.</span></a>
              <p className="footer-text">
                Los expertos financieros apoyan o ayudan a encontrar la mejor manera de aumentar tus fondos.
              </p>

              <ul className="social-list">
                <li><a href="#" className="social-link"><ion-icon name="logo-facebook"></ion-icon></a></li>
                <li><a href="#" className="social-link"><ion-icon name="logo-twitter"></ion-icon></a></li>
                <li><a href="#" className="social-link"><ion-icon name="logo-instagram"></ion-icon></a></li>
                <li><a href="#" className="social-link"><ion-icon name="logo-pinterest"></ion-icon></a></li>
              </ul>
            </div>

            <ul className="footer-list">
              <li>
                <p className="footer-list-title">Información de Contacto</p>
              </li>

              <li>
                <p className="footer-list-item">+1 (062) 109-9222</p>
              </li>

              <li>
                <p className="footer-list-item">Info@TuGmail24.com</p>
              </li>

              <li>
                <address className="footer-list-item">153 Plaza Williamson, Maggieberg, MT 09514</address>
              </li>
            </ul>

            <ul className="footer-list">
              <li>
                <p className="footer-list-title">Horas de Apertura</p>
              </li>
              <li>
                <p className="footer-list-item">Lunes-Viernes: 08:00-22:00</p>
              </li>
              <li>
                <p className="footer-list-item">Martes 4PM: Hasta Medianoche</p>
              </li>
              <li>
                <p className="footer-list-item">Sábado: 10:00-16:00</p>
              </li>
            </ul>

            <form action="" className="footer-form">
              <p className="footer-list-title">Reservar Una Mesa</p>
              <div className="input-wrapper">
                <input type="text" name="full_name" required placeholder="Tu Nombre" aria-label="Tu Nombre" className="input-field" />
                <input type="email" name="email_address" required placeholder="Correo Electrónico" aria-label="Correo Electrónico" className="input-field" />
              </div>
              <div className="input-wrapper">
                <select name="total_person" aria-label="Total de personas" className="input-field">
                  <option value="person">Persona</option>
                  <option value="2 person">2 Personas</option>
                  <option value="3 person">3 Personas</option>
                  <option value="4 person">4 Personas</option>
                  <option value="5 person">5 Personas</option>
                </select>
                <input type="date" name="booking_date" aria-label="Fecha de reserva" className="input-field" />
              </div>
              <textarea name="message" required placeholder="Mensaje" aria-label="Mensaje" className="input-field"></textarea>
              <button type="submit" className="btn">Reservar Una Mesa</button>
            </form>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="container">
            <p className="copyright-text">
              &copy; 2022 <a href="#" className="copyright-link">codewithsadee</a> Todos los Derechos Reservados.
            </p>
          </div>
        </div>
      </footer>

      <a href="#top" className="back-top-btn" aria-label="Volver arriba" data-back-top-btn>
        <ion-icon name="chevron-up"></ion-icon>
      </a>
    </>
  )
}
