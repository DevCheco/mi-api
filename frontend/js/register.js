
  const formRegistro = document.getElementById('registro-form');

  formRegistro.addEventListener('submit', async (e) => {
    e.preventDefault();

    const nombre = formRegistro.nombre.value;
    const correo = formRegistro.correo.value;
    const contrasena = formRegistro.contrasena.value;
    const aceptaDatos = formRegistro.acepta_datos.checked;

    if (!aceptaDatos) {
      alert('Debes aceptar el tratamiento de tus datos personales.');
      return;
    }

    try {
      // Verificamos si el usuario ya existe
      const resUsuarios = await fetch('http://localhost:3000/api/usuarios/');
      const usuarios = await resUsuarios.json();

      const usuarioExistente = usuarios.find(u => u.email === correo);

      if (usuarioExistente) {
        alert('Ya existe un usuario registrado con ese correo.');
        return;
      }

      // Si no existe, registramos
      const nuevoUsuario = {
        nombre: nombre,
        email: correo,
        password: contrasena
      };

      const resRegistro = await fetch('http://localhost:3000/api/usuarios/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(nuevoUsuario)
      });

      if (resRegistro.ok) {
        alert('Registro exitoso. Ahora puedes iniciar sesión.');
        window.location.href = '/frontend/index.html';
      } else {
        const error = await resRegistro.json();
        alert(`Error al registrar: ${error.message || 'intenta más tarde'}`);
      }

    } catch (error) {
      console.error('Error durante el registro:', error);
      alert('Error de conexión con el servidor.');
    }
  });

