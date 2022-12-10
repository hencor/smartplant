import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-black text-center py-5">
      <div className="container px-5">
        <div className="text-white-50 small">
          <div className="mb-2">&copy;2022 - Todos los derechos reservados.</div>
          <a href="#!">Política de privacidad</a>
          <span className="mx-1"> &middot; </span>
          <a href="#!">Términos y condiciones</a>
          <span className="mx-1"> &middot; </span>
          <a href="#!">Preguntas frecuentes</a>
        </div>
      </div>
    </footer>
  );
}