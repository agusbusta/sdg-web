import React, { useState } from 'react';
import './Registro.css';
import { motion } from 'framer-motion';

function Registro() {
  const [formData, setFormData] = useState({
    nombreEquipo: '',
    zonaOrigen: '',
    tieneIndumentaria: '',
    categorias: [],
    nombreResponsable: '',
    telefono: '',
    email: '',
    aceptaTerminos: '',
    aceptaPermisos: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleCategoriasChange = (e) => {
    const { value, checked } = e.target;
    setFormData(prevState => ({
      ...prevState,
      categorias: checked 
        ? [...prevState.categorias, value]
        : prevState.categorias.filter(cat => cat !== value)
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica para enviar los datos
    console.log(formData);
  };

  return (
    <motion.div 
      className="registro-container"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        PRE INSCRIPCIÓN
      </motion.h1>
      
      <h2>FORMULARIO DE INSCRIPCIÓN "COPA DESAFIO 2025 1ra Edición"</h2>

      <form onSubmit={handleSubmit}>
        <motion.section
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
        >
          <h3>DATOS GENERALES DEL EQUIPO</h3>
          <p>Queremos conocer a tu equipo!</p>

          <div className="form-group">
            <label htmlFor="nombreEquipo">¿Cuál es el nombre de tu equipo? *</label>
            <input
              type="text"
              id="nombreEquipo"
              name="nombreEquipo"
              value={formData.nombreEquipo}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="zonaOrigen">Zona de origen (Provincia y localidad) *</label>
            <input
              type="text"
              id="zonaOrigen"
              name="zonaOrigen"
              value={formData.zonaOrigen}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="form-group">
            <label>¿Tu equipo cuenta con indumentaria? *</label>
            <div className="radio-group">
              <label>
                <input
                  type="radio"
                  name="tieneIndumentaria"
                  value="SI"
                  onChange={handleInputChange}
                  required
                /> SI
              </label>
              <label>
                <input
                  type="radio"
                  name="tieneIndumentaria"
                  value="NO"
                  onChange={handleInputChange}
                /> NO
              </label>
            </div>
          </div>

          <div className="form-group">
            <label>¿Cuáles son las categorías que disputarán? *</label>
            <div className="checkbox-group">
              {['2011', '2012', '2013', '2014', '2015 - 2016', '2017 - 2018'].map(categoria => (
                <label key={categoria}>
                  <input
                    type="checkbox"
                    name="categorias"
                    value={categoria}
                    onChange={handleCategoriasChange}
                  /> {categoria}
                </label>
              ))}
            </div>
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
        >
          <h3>DATOS DEL RESPONSABLE DEL EQUIPO</h3>
          <p>El responsable obtendrá toda la información necesaria (reglamento, pagos, fin de inscripción, horarios, etc.)</p>

          <div className="form-group">
            <label htmlFor="nombreResponsable">Nombre completo del responsable *</label>
            <input
              type="text"
              id="nombreResponsable"
              name="nombreResponsable"
              value={formData.nombreResponsable}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="telefono">Número de contacto (teléfono celular) *</label>
            <input
              type="tel"
              id="telefono"
              name="telefono"
              value={formData.telefono}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Correo electrónico de contacto</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
            />
          </div>
        </motion.section>

        <div className="form-group">
          <label>¿Aceptas los términos y condiciones que se plantean en el reglamento previamente enviado? *</label>
          <div className="radio-group">
            <label>
              <input
                type="radio"
                name="aceptaTerminos"
                value="acepto"
                onChange={handleInputChange}
                required
              /> Lo leí y acepto las condiciones
            </label>
            <label>
              <input
                type="radio"
                name="aceptaTerminos"
                value="no_lei"
                onChange={handleInputChange}
              /> No lo leí
            </label>
          </div>
        </div>

        <div className="form-group">
          <label>¿Asumís la responsabilidad sobre los permisos de cada jugador, de su padre/madre/tutor? *</label>
          <div className="radio-group">
            <label>
              <input
                type="radio"
                name="aceptaPermisos"
                value="asumo"
                onChange={handleInputChange}
                required
              /> Asumo y me hago responsable del permiso de cada jugador
            </label>
            <label>
              <input
                type="radio"
                name="aceptaPermisos"
                value="no_asumo"
                onChange={handleInputChange}
              /> No tengo forma de conseguir todos los permisos
            </label>
          </div>
        </div>

        <motion.button 
          type="submit" 
          className="submit-button"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          Enviar inscripción
        </motion.button>
      </form>
    </motion.div>
  );
}

export default Registro; 