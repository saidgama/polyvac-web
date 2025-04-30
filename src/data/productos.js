// Archivo de datos de productos para la tienda Polyvac
// Puedes agregar, quitar o modificar productos según tus necesidades

export default [
  {
    id: "aquaflex",
    titulo: "AQUAFLEX",
    categoria: "serigrafia",
    descripcion: "Tinta base agua formuladas para la estampación textil directa en Algodón 100% , totalmente libres de gas Nafta, metales pesados , PVC y Orto- Ftalatos; lo cual les da una excelente estabilidad en el esténcil , haciendo posible la estampación en el pulpo manual y automático. ",
    imagenes: [
      "../assets/cubeta.png"
    ],
    fichaTecnica: "https://industrias-polyvac.pages.dev/pdfs/ficha-aquaflex.pdf",
    presentaciones: ["1kg", "5kg", "20kg"],
    colores: [
      { nombre: "Blanco", hex: "#fff" },
      { nombre: "Negro", hex: "#222" },
      { nombre: "Rojo", hex: "#e3342f" }
    ]
  },
  {
    id: "plastisol",
    titulo: "PLASTISOL VM",
    categoria: "serigrafia",
    descripcion: " Tintas tipo plastisol formuladas para fondos claros y campañas políticas , utilizadas para realizar estampados en tela de algodón 100 % de terminado ahulado, con acabado semi-mate.",
    imagenes: [
      "../assets/cubeta.png"
    ],
    fichaTecnica: "https://industrias-polyvac.pages.dev/pdfs/ficha-plastisol-vm-ht.pdf",
    presentaciones: ["1kg", "5kg", "20kg"],
    colores: [
      { nombre: "Blanco", hex: "#fff" },
      { nombre: "Negro", hex: "#222" },
      { nombre: "Azul", hex: "#3490dc" }
    ]
  },
  {
    id: "ahulada",
    titulo: "Ahulada A.O.",
    categoria: "serigrafia",
    descripcion: "Tintas tipo plastisol formuladas libres de metales pesados y fabricadas con materias primas de importación, con un alto contenido de solidos y buen poder cubriente, utilizadas para realizar estampados en fondos obscuros de algodón 100%.",
    imagenes: ["../assets/cubeta.png"],
    fichaTecnica: "https://industrias-polyvac.pages.dev/pdfs/ficha-ahulado-ao-ht.pdf",
    presentaciones: ["1kg", "5kg", "20kg"],
    colores: [
      { nombre: "Blanco", hex: "#fff" },
      { nombre: "Negro", hex: "#222" }
    ]
  },
  {
    id: "plastivac",
    titulo: "Plastivac VS",
    categoria: "serigrafia",
    descripcion: " Tintas tipo plastisol formuladas libres de metales pesados y ftalatos, fabricadas con materias primas de importación, utilizadas para realizar estampaciones en tela de algodón 100% en terminado ahulado , con acabado semi-mate.",
    imagenes: ["../assets/cubeta.png"],
    fichaTecnica: "https://industrias-polyvac.pages.dev/pdfs/ficha-plastivac-vs-ht.pdf",
    presentaciones: ["1kg", "5kg", "20kg"],
    colores: [
      { nombre: "Blanco", hex: "#fff" },
      { nombre: "Negro", hex: "#222" }
    ]
  },
  {
    id: "polyprint",
    titulo: "PIGMENTOS POLYPRINT",
    categoria: "igualacion",
    descripcion: "Son pigmentos tanto orgánicos como inorgánicos dispersados en base agua que deben se fijados por medio de Binders.Debe ser termofijado para tener buena solidez al frote tanto en húmedo como en seco.",
    imagenes: ["../assets/cubeta.png"],
    fichaTecnica: "https://industrias-polyvac.pages.dev/pdfs/ficha-polyprint-ht.pdf",
    presentaciones: ["1kg", "5kg", "20kg"],
    colores: [
      { nombre: "Blanco", hex: "#fff" },
      { nombre: "Negro", hex: "#222" }
    ]
  },
  {
    id: "polytransfer",
    titulo: "POLYTRANSFER ",
    categoria: "sublimacion",
    descripcion: "Gama de colorantes líquidos concentrados para sublimación, desarrollados para integrarse fácilmente a pastas de sublimación tanto en base agua “SUBLIVAC” , como base solvente “SUBLISOL",
    imagenes: ["../assets/cubeta.png"],
    fichaTecnica: "https://industrias-polyvac.pages.dev/pdfs/ficha-polytransfer-ht.pdf",
    presentaciones: ["1kg", "5kg", "20kg"],
    colores: [
      { nombre: "Blanco", hex: "#fff" },
      { nombre: "Negro", hex: "#222" }
    ]
  },
  {
    id: "sublisol",
    titulo: "SUBLISOL",
    categoria: "sublimacion",
    descripcion: "Tintas de sublimación base solvente, diseñadas para impresiones en papel por serigrafia y termo-transferir a tela poliéster 100%, logrando un teñido de gran colorido y permitiendo el brillo natural de la tela.",
    imagenes: ["../assets/cubeta.png"],
    fichaTecnica: "https://industrias-polyvac.pages.dev/pdfs/ficha-sublisol-ht.pdf",
    presentaciones: ["1kg", "5kg", "20kg"],
    colores: [
      { nombre: "Blanco", hex: "#fff" },
      { nombre: "Negro", hex: "#222" }
    ]
  },
  {
    id: "sublivac",
    titulo: "SUBLIVAC",
    categoria: "sublimacion",
    descripcion: "Tintas de sublimación base agua, diseñadas para impresiones en papel por serigrafía y luego termo-trasferir a tela poliéster 100% logrando un teñido de gran colorido y permitiendo el brillo natural de la tela.",
    imagenes: ["../assets/cubeta.png"],
    fichaTecnica: "https://industrias-polyvac.pages.dev/pdfs/ficha-sublivac-ht.pdf",
    presentaciones: ["1kg", "5kg", "20kg"],
    colores: [
      { nombre: "Blanco", hex: "#fff" },
      { nombre: "Negro", hex: "#222" }
    ]
  }
];
