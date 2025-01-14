import React, { useState } from 'react';
import './FAQ.css';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "¿Cómo puedo inscribirme al torneo?",
      answer: "La inscripción se realiza en línea a través de nuestro sitio web, completando el formulario y realizando el pago correspondiente. Una vez inscrito, recibirás un correo con detalles importantes."
    },
    {
      question: "¿Cuáles son los costos y qué incluyen?",
      answer: "El costo de inscripción varía según la categoría del equipo e incluye la participación en el torneo, el acceso a estadísticas en tiempo real mediante la app oficial y el kit informativo."
    },
    {
      question: "¿Cómo será el formato del torneo?",
      answer: "El torneo se llevará a cabo en formato [descripción breve: eliminación directa, grupos, etc.]. Los detalles específicos se proporcionarán en la app oficial al completar la inscripción."
    },
    {
      question: "¿Dónde puedo consultar información sobre la sede y ubicación del torneo?",
      answer: "La sede principal del torneo será [nombre del lugar], ubicada en [dirección]. Toda la información sobre accesos, mapas y servicios estará disponible en la app oficial una vez completada la inscripción."
    },
    {
      question: "¿El torneo incluye cobertura médica?",
      answer: "Sí, todos los participantes cuentan con un seguro básico que cubre atención inicial en caso de accidentes ocurridos durante el torneo."
    },
    {
      question: "¿Qué debo hacer en caso de una emergencia médica durante el torneo?",
      answer: "El personal del evento está capacitado para actuar ante emergencias. Habrá puntos de atención médica en la sede, y los contactos están disponibles en el reglamento."
    },
    {
      question: "¿Dónde puedo consultar el reglamento completo?",
      answer: "El reglamento está disponible para descarga en nuestro sitio web y se enviará como parte del kit informativo tras completar tu inscripción."
    },
    {
      question: "¿Cuáles son los requisitos para participar?",
      answer: "Es necesario presentar una identificación válida y, en caso de menores de edad, una autorización firmada por un tutor legal. Estos requisitos se detallan en el reglamento."
    }
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
      <h2>PREGUNTAS FRECUENTES</h2>
      <div className="faq-list">
        {faqs.map((faq, index) => (
          <div 
            key={index} 
            className={`faq-item ${activeIndex === index ? 'active' : ''}`}
            onClick={() => toggleAccordion(index)}
          >
            <div className="faq-question">
              <h3>{faq.question}</h3>
              {activeIndex === index ? <FaChevronUp /> : <FaChevronDown />}
            </div>
            <div className="faq-answer">
              <p>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FAQ; 