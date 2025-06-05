const form = document.getElementById('login-form');
const mensaje = document.getElementById('mensaje');

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  const res = await fetch('http://localhost:3000/api/usuarios/');
  const usuarios = await res.json();

  const user = usuarios.find(u => u.email === email && u.password === password);

  if (user) {
    // Guardamos datos en localStorage
    localStorage.setItem('usuario', JSON.stringify(user));
    window.location.href = 'usuarios.html';
  } else {
    mensaje.textContent = 'Correo o contraseña incorrectos';
  }
});
