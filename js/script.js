let productos = []; // Aquí se guardará la base de datos cargada desde el CSV

// Cargar el archivo CSV
Papa.parse("productos.csv", {
  download: true,
  header: true,
  complete: function(results) {
    productos = results.data; // Ya tienes los productos listos
    console.log("Productos cargados:", productos);
  }
});

// Función para buscar productos
function buscarProductos(query) {
  return productos.filter(producto => {
    return producto.codigoEUSA?.includes(query) || producto.nombre?.toLowerCase().includes(query.toLowerCase());
  });
}

// Evento para buscar productos
document.getElementById("buscar-btn").addEventListener("click", () => {
  const query = document.getElementById("buscar").value;
  const resultados = buscarProductos(query);
  const resultadosBody = document.getElementById("resultados-body");
  resultadosBody.innerHTML = "";

  if (resultados.length === 0) {
    resultadosBody.innerHTML = `<tr><td colspan="5">No se encontraron resultados</td></tr>`;
    return;
  }

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
