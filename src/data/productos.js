// Archivo de datos de productos para la tienda Polyvac
// Puedes agregar, quitar o modificar productos según tus necesidades

export default [
  {
    id: "aquaflex",
    titulo: "AQUAFLEX",
    categoria: "Serigrafía",
    descripcion: "Tinta base agua formulada para la estampación textil directa en Algodón 100%, totalmente libre de gas Nafta, metales pesados, PVC y Orto-Ftalatos. Excelente estabilidad en el esténcil, ideal para pulpo manual y automático.",
    imagenes: [
      "../assets/cubeta.png"
    ],
    fichaTecnica: "/pdfs/ficha-aquaflex.pdf",
    presentaciones: ["1kg", "4kg", "20kg"],
    codigoColor: "AQUA",
    colores: [
      { nombre: "Blanco", hex: "#fff" },
      { nombre: "Negro", hex: "#222" },
      { nombre: "Rojo", hex: "#e3342f" }
    ]
  },
  {
    id: "plastisol",
    titulo: "PLASTISOL",
    categoria: "Serigrafía",
    descripcion: "Tinta plastisol de alta opacidad y elasticidad para estampados textiles. Excelente cubrimiento y fácil curado.",
    imagenes: [
      "../assets/cubeta.png"
    ],
    fichaTecnica: "/pdfs/ficha-plastisol.pdf",
    presentaciones: ["1kg", "4kg", "20kg"],
    codigoColor: "PLAST",
    colores: [
      { nombre: "Blanco", hex: "#fff" },
      { nombre: "Negro", hex: "#222" },
      { nombre: "Azul", hex: "#3490dc" }
    ]
  }
];
