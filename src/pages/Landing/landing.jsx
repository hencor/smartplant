import React from 'react';
import Header from '../../layouts/Header/Header';
import Features from './Features';

function Landing() {
  return (
    <React.Fragment>
      <Header />
      <aside className="text-center bg-gradient-primary-to-secondary">
        <div className="container px-5">
          <div className="row gx-5 justify-content-center">
            <div className="col-xl-8">
              <div className="h2 fs-1 text-white mb-4">
                "Una solución intuitiva a un problema común que todos
                enfrentamos, envuelto en una sola aplicación!"
              </div>
              <img
                src="assets/img/tnw-logo.svg"
                alt="..."
                style={{ height: '3rem' }}
              />
            </div>
          </div>
        </div>
      </aside>
      <Features />
      <section className="bg-light">
        <div className="container px-5">
          <div className="row gx-5 align-items-center justify-content-center justify-content-lg-between">
            <div className="col-12 col-lg-5">
              <h2 className="display-4 lh-1 mb-4">
                Llego la era de la agricultura inteligente...
              </h2>
              <p className="lead fw-normal text-muted mb-5 mb-lg-0">
                La agricultura climáticamente inteligente constituye un enfoque
                que ayuda a orientar las acciones necesarias para transformar y
                reorientar los sistemas agrícolas a fin de apoyar de forma
                eficaz el desarrollo y garantizar la seguridad alimentaria en el
                contexto de un clima cambiante ¡Conoce nuestras experiencias”
              </p>
            </div>
            <div className="col-sm-8 col-md-6">
              <div className="px-5 px-sm-0">
                <img
                  className="img-fluid rounded-circle"
                  src="https://source.unsplash.com/u8Jn2rzYIps/900x900"
                  alt="..."
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="cta">
        <div className="cta-content">
          <div className="container px-5">
            <h2 className="text-white display-1 lh-1 mb-4">
              No te quedes por fuera...
              <br />
            </h2>
            <a
              className="btn btn-outline-light py-3 px-4 rounded-pill"
              href="#!"
              target="_blank"
            >
              Solicita tu demo
            </a>
          </div>
        </div>
      </section>
      <section className="bg-gradient-primary-to-secondary" id="download">
        <div className="container px-5">
          <h2 className="text-center text-white font-alt mb-4">
            ¡Obtén la aplicación ahora!!
          </h2>
          <div className="d-flex flex-column flex-lg-row align-items-center justify-content-center">
            <a className="me-lg-3 mb-4 mb-lg-0" href="#!">
              <img
                className="app-badge"
                src="assets/img/google-play-badge.svg"
                alt="..."
              />
            </a>
            <a href="#!">
              <img
                className="app-badge"
                src="assets/img/app-store-badge.svg"
                alt="..."
              />
            </a>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

export default Landing;