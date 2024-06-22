import React, { useState } from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';

// Creación del Formulario de Contacto a manera interna, y de los hooks

const FormularioContacto = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    asunto: '',
    mensaje: ''
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Implementar el mecanismo de enviar un formulario

  const handleSubmit = (e) => {
    e.preventDefault();
    const { nombre, email, asunto, mensaje } = formData;

    if (!nombre || !email || !asunto || !mensaje) {
      setError('Todos los campos son obligatorios');
      setSuccess('');
      return;
    }

    setError('');
    setSuccess('Mensaje enviado con éxito');
    setFormData({
      nombre: '',
      email: '',
      asunto: '',
      mensaje: ''
    });
  };
  
  // Diseño del formulario con código HTML y elementos de MUI Material

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ maxWidth: 500, mx: 'auto', mt: 5, p: 2, boxShadow: 3, borderRadius: 2, bgcolor: 'background.paper' }}>
      <Typography variant="h4" mb={3}>
        Formulario de Contacto, sea usted bienvenido!
      </Typography>
      {error && (
        <Typography variant="body1" color="error" mb={2}>
          {error}
        </Typography>
      )}
      {success && (
        <Typography variant="body1" color="success" mb={2}>
          {success}
        </Typography>
      )}
      <TextField
        label="Nombre Completo"
        name="nombre"
        value={formData.nombre}
        onChange={handleChange}
        fullWidth
        margin="normal"
        required
      />
      <TextField
        label="Correo Electrónico"
        name="email"
        type="email"
        value={formData.email}
        onChange={handleChange}
        fullWidth
        margin="normal"
        required
      />
      <TextField
        label="Asunto"
        name="asunto"
        value={formData.asunto}
        onChange={handleChange}
        fullWidth
        margin="normal"
        required
      />
      <TextField
        label="Mensaje"
        name="mensaje"
        value={formData.mensaje}
        onChange={handleChange}
        fullWidth
        margin="normal"
        multiline
        rows={4}
        required
      />
      <Button type="submit" variant="contained" color="primary" sx={{ mt: 3 }}>
        Enviar
      </Button>
    </Box>
  );
};

export default FormularioContacto;