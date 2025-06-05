const apiUrl = 'http://localhost:3000/api/usuarios/';
const lista = document.getElementById('lista-usuarios');
const form = document.getElementById('usuario-form');
const nombreInput = document.getElementById('nombre');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const idInput = document.getElementById('id');

async function cargarUsuarios() {
  const res = await fetch(apiUrl);
  const usuarios = await res.json();

 lista.innerHTML = '';
usuarios.forEach(u => {
  const li = document.createElement('li');
  li.innerHTML = `
    <span class="col nombre">${u.nombre}</span>
    <span class="col email">${u.email || 'Sin email'}</span>
    <span class="col password">${u.password}</span>
    <span class="col acciones">
      <button class="btn editar" onclick="editarUsuario('${u._id}', '${u.nombre}', '${u.email}', '${u.password}')">Editar</button>
      <button class="btn eliminar" onclick="eliminarUsuario('${u._id}')">Eliminar</button>
    </span>
  `;
  lista.appendChild(li);
  });
}

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const usuario = {
    nombre: nombreInput.value,
    email: emailInput.value,
    password: passwordInput.value
  };

  const id = idInput.value;

  if (id) {
    // PUT (actualizar)
    await fetch(apiUrl + id, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(usuario)
    });
  } else {
    // POST (crear)
    await fetch(apiUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(usuario)
    });
  }

  form.reset();
  cargarUsuarios();
});

async function eliminarUsuario(id) {
  await fetch(apiUrl + id, {
    method: 'DELETE'
  });
  cargarUsuarios();
}

function editarUsuario(id, nombre, email, password) {
  idInput.value = id;
  nombreInput.value = nombre;
  emailInput.value = email || '';
  passwordInput.value = password || '';
}

cargarUsuarios();
