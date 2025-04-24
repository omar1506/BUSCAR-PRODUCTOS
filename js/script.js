// Simulación de base de datos
const productos = [
  { codigoEUSA: "12345", nombre: "Producto 1", cliente: "Pozuelo", estante: "P1", codigoBarras: "123456789" },
  { codigoEUSA: "67890", nombre: "Producto 2", cliente: "Carguill", estante: "C2", codigoBarras: "987654321" },
  // ...
];

// Función para buscar productos
function buscarProductos(query) {
  const resultados = productos.filter(producto => {
    return producto.codigoEUSA.includes(query) || producto.nombre.includes(query);
  });
  return resultados;
}

// Evento para buscar productos
document.getElementById("buscar-btn").addEventListener("click", () => {
  const query = document.getElementById("buscar").value;
  const resultados = buscarProductos(query);
  const resultadosBody = document.getElementById("resultados-body");
  resultadosBody.innerHTML = "";
  resultados.forEach(resultado => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${resultado.codigoEUSA}</td>
      <td>${resultado.nombre}</td>
      <td>${resultado.cliente}</td>
      <td>${resultado.estante}</td>
      <td>${resultado.codigoBarras}</td>
    `;
    resultadosBody.appendChild(row);
  });
});
