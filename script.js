const menu = [
  {
    id: 1,
    nombre: "Combo Hamburguesa",
    precio: 12000,
    imagen: "https://assets.onecompiler.app/43ftuv7vk/43ftuyhb4/hamburguesa.jpeg"
  },
  {
    id: 2,
    nombre: "Combo Perro Caliente",
    precio: 10000,
    imagen: "https://assets.onecompiler.app/43ftuv7vk/43ftuyhb4/perro.jpeg"
  },
  {
    id: 3,
    nombre: "Combo Papas Fritas",
    precio: 6000,
    imagen: "https://assets.onecompiler.app/43ftuv7vk/43ftuyhb4/papas.jpeg"
  },
  {
    id: 4,
    nombre: "Combo Gaseosa + Snack",
    precio: 8000,
    imagen: "https://assets.onecompiler.app/43ftuv7vk/43ftuyhb4/gaseosa.jpeg"
  },
  {
    id: 5,
    nombre: "Combo Vegetariano",
    precio: 9500,
    imagen: "https://assets.onecompiler.app/43ftuv7vk/43ftptc3s/vegetariano.jpeg"
  }
];

const carrito = [];
const menuContainer = document.getElementById("menu");
const cartItems = document.getElementById("cart-items");
const totalElement = document.getElementById("total");

function renderMenu() {
  menu.forEach((item) => {
    const div = document.createElement("div");
    div.className = "item";
    div.innerHTML = `
      <img src="${item.imagen}" alt="${item.nombre}">
      <h3>${item.nombre}</h3>
      <p>Precio: $${item.precio}</p>
      <button onclick="agregarAlCarrito(${item.id})">Agregar</button>
    `;
    menuContainer.appendChild(div);
  });
}

function agregarAlCarrito(id) {
  const producto = menu.find((p) => p.id === id);
  carrito.push(producto);
  actualizarCarrito();
}

function eliminarDelCarrito(index) {
  carrito.splice(index, 1);
  actualizarCarrito();
}

function actualizarCarrito() {
  cartItems.innerHTML = "";
  let total = 0;
  carrito.forEach((item, index) => {
    const li = document.createElement("li");
    li.innerHTML = `
      ${item.nombre} - $${item.precio}
      <button class="remove-btn" onclick="eliminarDelCarrito(${index})">Quitar</button>
    `;
    cartItems.appendChild(li);
    total += item.precio;
  });
  totalElement.textContent = total;
}

// Sonido al pasar el mouse sobre el logo
document.querySelector('.logo').addEventListener('mouseenter', () => {
  const sonido = document.getElementById('homeroSound');
  sonido.currentTime = 0;
  sonido.play();
});

renderMenu();
