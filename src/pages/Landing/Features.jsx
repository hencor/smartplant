import React from 'react';

export default function Features() {
  return (
    <section id="features">
      <div className="container px-2">
        <div className="row gx-5 align-items-center">
          <div className="col-lg-8 order-lg-1 mb-5 mb-lg-0">
            <div className="container-fluid px-5">
              <div className="row gx-5">
                <div className="col-md-6 mb-5">
                  <div className="text-center">
                    <i className="bi-cpu icon-feature text-gradient d-block mb-3"></i>
                    <h3 className="font-alt">Dispositivos</h3>
                    <p className="text-muted mb-0">
                      Tenemos los mejores dispositivos para controlar su
                      producción, fácil montaje y gestión!
                    </p>
                  </div>
                </div>
                <div className="col-md-6 mb-5">
                  <div className="text-center">
                    <i className="bi-person icon-feature text-gradient d-block mb-3"></i>
                    <h3 className="font-alt">Servicios</h3>
                    <p className="text-muted mb-0">
                      Somos sus aliados para facilitar la modernización de su
                      unidad productiva!
                    </p>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 mb-5 mb-md-0">
                  <div className="text-center">
                    <i className="bi-gift icon-feature text-gradient d-block mb-3"></i>
                    <h3 className="font-alt">Un regalo para ti</h3>
                    <p className="text-muted mb-0">
                      Registrate y ten acceso gratis para 5 dispositivos!
                    </p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="text-center">
                    <i className="bi-phone icon-feature ext-gradient d-block mb-3"></i>
                    <h3 className="font-alt">App SmarPlant</h3>
                    <p className="text-muted mb-0">
                      Con SmartPlant tiene el control de todo en su bolsillo!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 order-lg-0">
            <div className="features-device-mockup">
              <svg
                className="circle"
                viewBox="0 0 100 100"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <linearGradient
                    id="circleGradient"
                    gradientTransform="rotate(45)"
                  >
                    <stop className="gradient-start-color" offset="0%"></stop>
                    <stop className="gradient-end-color" offset="100%"></stop>
                  </linearGradient>
                </defs>
                <circle cx="50" cy="50" r="50"></circle>
              </svg>
              <svg
                className="shape-1 d-none d-sm-block"
                viewBox="0 0 240.83 240.83"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="-32.54"
                  y="78.39"
                  width="305.92"
                  height="84.05"
                  rx="42.03"
                  transform="translate(120.42 -49.88) rotate(45)"
                ></rect>
                <rect
                  x="-32.54"
                  y="78.39"
                  width="305.92"
                  height="84.05"
                  rx="42.03"
                  transform="translate(-49.88 120.42) rotate(-45)"
                ></rect>
              </svg>
              <svg
                className="shape-2 d-none d-sm-block"
                viewBox="0 0 100 100"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="50" cy="50" r="50"></circle>
              </svg>
              <div className="device-wrapper">
                <div
                  className="device"
                  data-device="iPhoneX"
                  data-orientation="portrait"
                  data-color="black"
                >
                  <div className="screen bg-black">
                    <video
                      muted="muted"
                      autoPlay=""
                      loop=""
                      style={{ maxWidth: '100%', height: '100%' }}
                    >
                      <source
                        src="assets/img/demo-screen.mp4"
                        type="video/mp4"
                      />
                    </video>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
