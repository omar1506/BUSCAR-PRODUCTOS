// Paso 1: Declarar variable global
let productos = [];

// Paso 2: Cargar CSV desde GitHub (enlace RAW)
Papa.parse("https://raw.githubusercontent.com/omar1506/BUSCAR-PRODUCTOS/main/productos.csv", {
  download: true,
  header: true,
  complete: function(results) {
    productos = results.data;
    console.log("✅ Productos cargados:", productos.length);
  },
  error: function(error) {
    console.error("❌ Error al cargar CSV:", error);
  }
});

// Paso 3: Mostrar en consola lo que el usuario busca
document.getElementById("buscar-btn").addEventListener("click", () => {
  const input = document.getElementById("buscar").value.trim().toLowerCase();
  const resultados = productos.filter(p =>
    Object.values(p).some(valor =>
      valor?.toLowerCase().includes(input)
    )
  );

  console.log("🔍 Resultados encontrados:", resultados);
});



  

