const apiUrl = 'http://localhost:3000/api/productos/';
const lista = document.getElementById('lista-productos');
const form = document.getElementById('producto-form');
const idInput = document.getElementById('producto-id');
const nombreInput = document.getElementById('nombre');
const precioInput = document.getElementById('precio');
const descripcionInput = document.getElementById('descripcion');

async function cargarProductos() {
  const res = await fetch(apiUrl);
  const productos = await res.json();

  lista.innerHTML = '';
productos.forEach(p => {
  const li = document.createElement('li');
  li.innerHTML = `
    <span class="col nombre">${p.nombre}</span>
    <span class="col precio">$${p.precio}</span>
    <span class="col descripcion">${p.descripcion}</span>
    <span class="col acciones">
      <button class="btn editar" onclick="editarProducto('${p._id}', '${p.nombre}', ${p.precio}, '${p.descripcion}')">Editar</button>
      <button class="btn eliminar" onclick="eliminarProducto('${p._id}')">Eliminar</button>
    </span>
  `;
  lista.appendChild(li);
  });
}

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const producto = {
    nombre: nombreInput.value,
    precio: parseFloat(precioInput.value),
    descripcion: descripcionInput.value
  };

  const id = idInput.value;

  if (id) {
    // PUT (actualizar)
    await fetch(apiUrl + id, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(producto)
    });
  } else {
    // POST (crear)
    await fetch(apiUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(producto)
    });
  }

  form.reset();
  cargarProductos();
});

async function eliminarProducto(id) {
  await fetch(apiUrl + id, {
    method: 'DELETE'
  });
  cargarProductos();
}

function editarProducto(id, nombre, precio, descripcion) {
  idInput.value = id;
  nombreInput.value = nombre;
  precioInput.value = precio;
  descripcionInput.value = descripcion;
}

cargarProductos();
