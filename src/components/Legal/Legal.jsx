import React from 'react';
import './Legal.css';

function Legal() {
  return (
    <div className="legal-container">
      <h2>TÉRMINOS Y CONDICIONES</h2>
      
      <div className="legal-content">
        <section className="legal-section">
          <h3>Participación</h3>
          <ol>
            <li>Este torneo deportivo tiene un carácter competitivo y se desarrollará exclusivamente de forma presencial en la sede asignada.</li>
            <li>
              Podrán participar todos los equipos que cumplan con los siguientes requisitos:
              <ul>
                <li>Respetar las categorías de edad asignadas.</li>
                <li>Cumplir con las condiciones legales, reglamentarias y económicas establecidas.</li>
                <li>No existen restricciones en cuanto a nivel o residencia.</li>
              </ul>
            </li>
            <li>La inscripción al torneo tiene un costo que será informado por los medios oficiales junto con el detalle de los servicios incluidos, como traslados, equipación y credenciales, entre otros.</li>
          </ol>
        </section>

        <section className="legal-section">
          <h3>Uso de los Datos</h3>
          <p>Los datos serán utilizados para:</p>
          <ul>
            <li>La gestión y organización del torneo.</li>
            <li>Compartir información con entidades interesadas en reclutar jugadores, siempre con consentimiento informado de los tutores.</li>
          </ul>
          <h4>Protección de Datos</h4>
          <p>Los datos personales estarán protegidos y solo serán compartidos con terceros autorizados para propósitos específicos y previamente comunicados.</p>
        </section>

        <section className="legal-section">
          <h3>Propiedad Intelectual</h3>
          <p>Los participantes podrán utilizar el contenido visual del torneo (fotos, videos, logos) para fines personales y promocionales no lucrativos, como compartir en redes sociales o guardar como recuerdo.</p>
          <p>Al participar en el torneo, los equipos otorgan consentimiento para el uso de su imagen en contenido promocional del torneo.</p>
        </section>

        <section className="legal-section">
          <h3>Exoneración de Responsabilidad</h3>
          <ol>
            <li>Este torneo implica la práctica de un deporte de contacto, por lo que existen riesgos físicos inherentes. Estos riesgos estarán cubiertos por un seguro incluido en el costo de inscripción.</li>
            <li>En caso de emergencia, los costos asociados serán cubiertos conforme a las condiciones del seguro.</li>
          </ol>
        </section>

        <section className="legal-section">
          <h3>Políticas de Reembolsos y Transferencias</h3>
          <ol>
            <li>Se permitirán reembolsos dentro de un plazo estipulado, el cual será comunicado en el momento de la inscripción. Pasado este plazo, no se realizarán devoluciones.</li>
            <li>Las inscripciones podrán transferirse, previa verificación y aprobación por parte de los organizadores.</li>
          </ol>
        </section>

        <section className="legal-section">
          <h3>Uso de Cookies</h3>
          <ol>
            <li>Este sitio web utiliza cookies para mejorar la experiencia del usuario y personalizar su navegación.</li>
            <li>La información recopilada será almacenada de forma segura y utilizada para fines analíticos y de personalización.</li>
          </ol>
        </section>

        <section className="legal-section">
          <h3>Contacto Legal</h3>
          <p>Para consultas legales, por favor contáctanos a través de nuestras vías oficiales:</p>
          <ul>
            <li>Correo electrónico: mkempresarial@hotmail.com</li>
          </ul>
        </section>

        <section className="legal-section">
          <h3>Legislación Aplicable</h3>
          <ol>
            <li>Este torneo y su organización estarán regidos por las leyes locales del lugar donde se lleva a cabo.</li>
            <li>En caso de dudas, las disposiciones legales serán interpretadas bajo el marco normativo aplicable en la jurisdicción correspondiente.</li>
          </ol>
        </section>
      </div>
    </div>
  );
}

export default Legal; 