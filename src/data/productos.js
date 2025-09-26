// Archivo de datos de productos para la tienda Polyvac
// Estructura actualizada para integrar con las taxonomías de estampado

// Importar imágenes para que funcionen en producción
import cubetaImage from '../assets/cubeta.png';

export default [
  {
    id: "aquaflex",
    titulo: "AQUAFLEX",
    categoria: "estampado", // Categoría principal
    subcategorias: [1, 2], // IDs de subcategorías: "Por tipo de aplicación", "Por tipo de formulación"
    taxonomias: [1, 8], // IDs de taxonomías: "Para algodón", "Tintas base agua"
    descripcion: "Tinta base agua formuladas para la estampación textil directa en Algodón 100% , totalmente libres de gas Nafta, metales pesados , PVC y Orto- Ftalatos; lo cual les da una excelente estabilidad en el esténcil , haciendo posible la estampación en el pulpo manual y automático.",
    imagenes: [
      cubetaImage
    ],
    fichaTecnica: "http://ec2-34-205-157-80.compute-1.amazonaws.com/panel/uploads/ficha_aquaflex_e3a4e88af9.pdf",
    colores: [
      { nombre: "Blanco", hex: "#fff" },
      { nombre: "Negro", hex: "#222" },
      { nombre: "Rojo", hex: "#e3342f" }
    ],
    colorPrincipal: "#10a3e8ff" // Color para el polígono
  },
  {
    id: "plastisol",
    titulo: "PLASTISOL VM",
    categoria: "estampado",
    subcategorias: [1, 2], // "Por tipo de aplicación", "Por tipo de formulación"
    taxonomias: [1, 3, 7], // "Para algodón", "Para fondos claros", "Tintas plastisol"
    descripcion: "Tintas tipo plastisol formuladas para fondos claros y campañas políticas , utilizadas para realizar estampados en tela de algodón 100 % de terminado ahulado, con acabado semi-mate.",
    imagenes: [
      cubetaImage
    ],
    fichaTecnica: "http://ec2-34-205-157-80.compute-1.amazonaws.com/panel/uploads/ficha_plastisol_vm_ht_c9c2f5cd42.pdf",
    colores: [
      { nombre: "Blanco", hex: "#fff" },
      { nombre: "Negro", hex: "#222" },
      { nombre: "Azul", hex: "#3490dc" }
    ],
    colorPrincipal: "#68d823ff" // Color para el polígono
  },
  {
    id: "ahulada",
    titulo: "Ahulada A.O.",
    categoria: "estampado",
    subcategorias: [1, 2], // "Por tipo de aplicación", "Por tipo de formulación"
    taxonomias: [1, 4, 7], // "Para algodón", "Para fondos oscuros", "Tintas plastisol"
    descripcion: "Tintas tipo plastisol formuladas libres de metales pesados y fabricadas con materias primas de importación, con un alto contenido de solidos y buen poder cubriente, utilizadas para realizar estampados en fondos obscuros de algodón 100%.",
    imagenes: [cubetaImage],
    fichaTecnica: "http://ec2-34-205-157-80.compute-1.amazonaws.com/panel/uploads/ficha_ahulado_ao_ht_ed3af4a320.pdf",
    colores: [
      { nombre: "Blanco", hex: "#fff" },
      { nombre: "Negro", hex: "#222" }
    ],
    colorPrincipal: "#f39c12" // Color para el polígono
  },
  {
    id: "plastivac",
    titulo: "Plastivac VS",
    categoria: "estampado",
    subcategorias: [1, 2], // "Por tipo de aplicación", "Por tipo de formulación"
    taxonomias: [1, 7], // "Para algodón", "Tintas plastisol"
    descripcion: "Tintas tipo plastisol formuladas libres de metales pesados y ftalatos, fabricadas con materias primas de importación, utilizadas para realizar estampaciones en tela de algodón 100% en terminado ahulado , con acabado semi-mate.",
    imagenes: [cubetaImage],
    fichaTecnica: "http://ec2-34-205-157-80.compute-1.amazonaws.com/panel/uploads/ficha_plastivac_vs_ht_e3fff37047.pdf",
    colores: [
      { nombre: "Blanco", hex: "#fff" },
      { nombre: "Negro", hex: "#222" }
    ],
    colorPrincipal: "#b659b3ff" // Color para el polígono
  },
  {
    id: "polyprint",
    titulo: "PIGMENTOS POLYPRINT",
    categoria: "estampado",
    subcategorias: [3], // "Materias primas y auxiliares"
    taxonomias: [11], // "Pigmentos"
    descripcion: "Son pigmentos tanto orgánicos como inorgánicos dispersados en base agua que deben se fijados por medio de Binders.Debe ser termofijado para tener buena solidez al frote tanto en húmedo como en seco.",
    imagenes: [cubetaImage],
    fichaTecnica: "http://ec2-34-205-157-80.compute-1.amazonaws.com/panel/uploads/ficha_polyprint_ht_58cdef145b.pdf",
    colores: [
      { nombre: "Blanco", hex: "#fff" },
      { nombre: "Negro", hex: "#222" }
    ],
    colorPrincipal: "#e67e22" // Color para el polígono
  },
  {
    id: "polytransfer",
    titulo: "POLYTRANSFER",
    categoria: "estampado",
    subcategorias: [3], // "Materias primas y auxiliares" (porque es un colorante concentrado)
    taxonomias: [12, 9], // "Colorantes", "Tintas de sublimación"
    descripcion: "Gama de colorantes líquidos concentrados para sublimación, desarrollados para integrarse fácilmente a pastas de sublimación tanto en base agua 'SUBLIVAC', como base solvente 'SUBLISOL'.",
    imagenes: [cubetaImage],
    fichaTecnica: "http://ec2-34-205-157-80.compute-1.amazonaws.com/panel/uploads/ficha_polytransfer_ht_8b9a5dc463.pdf",
    colores: [
      { nombre: "Blanco", hex: "#fff" },
      { nombre: "Negro", hex: "#222" }
    ],
    colorPrincipal: "#1abc9c" // Color para el polígono
  },
  {
    id: "sublisol",
    titulo: "SUBLISOL",
    categoria: "estampado",
    subcategorias: [1, 2], // "Por tipo de aplicación", "Por tipo de formulación"
    taxonomias: [2, 9], // "Para poliéster", "Tintas de sublimación"
    descripcion: "Tintas de sublimación base solvente, diseñadas para impresiones en papel por serigrafia y termo-transferir a tela poliéster 100%, logrando un teñido de gran colorido y permitiendo el brillo natural de la tela.",
    imagenes: [cubetaImage],
    fichaTecnica: "http://ec2-34-205-157-80.compute-1.amazonaws.com/panel//uploads/ficha_sublisol_ht_65ea8375e2.pdf",
    colores: [
      { nombre: "Blanco", hex: "#fff" },
      { nombre: "Negro", hex: "#222" }
    ],
    colorPrincipal: "#e74c3c" // Color para el polígono
  },
  {
    id: "sublivac",
    titulo: "SUBLIVAC",
    categoria: "estampado",
    subcategorias: [1, 2], // "Por tipo de aplicación", "Por tipo de formulación"
    taxonomias: [2, 8, 9], // "Para poliéster", "Tintas base agua", "Tintas de sublimación"
    descripcion: "Tintas de sublimación base agua, diseñadas para impresiones en papel por serigrafía y luego termo-trasferir a tela poliéster 100% logrando un teñido de gran colorido y permitiendo el brillo natural de la tela.",
    imagenes: [cubetaImage],
    fichaTecnica: "http://ec2-34-205-157-80.compute-1.amazonaws.com/panel//uploads/ficha_sublivac_ht_dbc9f8d1ec.pdf",
    colores: [
      { nombre: "Blanco", hex: "#fff" },
      { nombre: "Negro", hex: "#222" }
    ],
    colorPrincipal: "#6b35e0ff" // Color para el polígono
  },
  
  // Productos de colorantes - solo con tabla de colores
  {
    id: "colorantes-directos",
    titulo: "Colorantes Directos",
    categoria: "estampado",
    subcategorias: [3], // "Materias primas y auxiliares"
    taxonomias: [12], // "Colorantes"
    descripcion: "Línea completa de colorantes directos.",
    imagenes: [cubetaImage],
    fichaTecnica: null, // No tiene PDF, solo tabla de colores
    esTablaColores: true, // Bandera para identificar productos de tabla de colores
    porcentajes: { porcentaje1: "1%", porcentaje2: "3%" }, // Porcentajes dinámicos
    colores: [
      { nombre: "AMARILLO VACDIR EE DIRECT YELLOW 44", color1: "#fcea0a", color2: "#fee203" },
      { nombre: "AMARILLO VACDIR BEC DIRECT YELLOW 142", color1: "#fdf218", color2: "#fee806" },
      { nombre: "AMARILLO VACDIR FA DIRECT YELLOW 5O", color1: "#fceb22", color2: "#fbd303" },
      { nombre: "AMARILLO VACDIR IG DIRECT YELLOW 86", color1: "#fbd402", color2: "#f9c001" },
      { nombre: "NARANJA VACDIR CG DIREC ORANGE 26 150%", color1: "#fa722a", color2: "#fa722a" },
      { nombre: "NARANJA VACDIR DE DIREC ORANGE 34", color1: "#fb9e0a", color2: "#f67517" },
      { nombre: "NARANJA VACDIR DJ DIREC ORANGE 39", color1: "#f79808", color2: "#f57c14" },
      { nombre: "ROJO VACDIR CCI DIRECT RED 227", color1: "#eb559c", color2: "#d62774" },
      { nombre: "ROJO VACDIR CD DIRECT RED 23", color1: "#e1444b", color2: "#cf2d39" },
      { nombre: "ROJO VACDIR CI DIRECT RED 28", color1: "#cf2d39", color2: "#cc463d" },
      { nombre: "ROJO VACDIR DB DIRECT RED 31 150%", color1: "#bc1b53", color2: "#7e0f2a" },
      { nombre: "ROJO VACDIR IB DIRECT RED 81 100%", color1: "#c1264a", color2: "#b11139" },
      { nombre: "ROJO VACDIR CED DIRECT RED 243", color1: "#c63060", color2: "#8b1430" },
      { nombre: "VIOLETA VACDIR FB DIRECT VIOLET 51", color1: "#74317e", color2: "#531655" },
      { nombre: "VIOLETA VACDIR J DIRECT VIOLET 9 180%", color1: "#4b1f50", color2: "#3e113b" },
      { nombre: "AZUL VACDIR CAA DIRECT BLUE 200 200%", color1: "#1d3f6a", color2: "#0d2046" },

      { nombre: "AZUL VACDIR C DIRECT BLUE 2 ", color1: "#3a5075", color2: "#142135" }, 
      { nombre: "AZUL VACDIR CAB DIRECT BLUE 201 200%", color1: "#314376", color2: "#191f42" },
      { nombre: "AZUL VACDIR BFB DIRECT BLUE 151", color1: "#282a56", color2: "#110e2a" },
      { nombre: "AZUL VACDIR BF DIRECT BLUE 15", color1: "#123a6a", color2: "#0b3264" },

      { nombre: "AZUL VACDIR HB DIRECT BLUE 71", color1: "#183254", color2: "#061130" },
      { nombre: "AZUL VACDIR BAI DIRECT BLUE 108", color1: "#608ccb", color2: "#425fab" },
      { nombre: "AZUL VACDIR IG DIRECT BLUE 86", color1: "#00c1e0", color2: "#0faad5" },
      { nombre: "VERDE VACDIR B DIRECT GREEN 1", color1: "#354645", color2: "#232b2b" },
      { nombre: "CAFE VACDIR C DIRECT BROWN 2", color1: "#694437", color2: "#2d211c" },
      { nombre: "CAFE VACDIR JF DIRECT BROWN 95", color1: "#a16f47", color2: "#75452a" },
      { nombre: "NEGRO VACDIR CC DIRECT BLACK 1600%", color1: "#272d32", color2: "#12181b" },
      { nombre: "NEGRO VACDIR CC DIRECT BLACK 1200%", color1: "#253334", color2: "#1b2124" },
      { nombre: "NEGRO VACDIR DI DIRECT BLACK 38", color1: "#1e1f23", color2: "#131514" },

    ],
    colorPrincipal: "#d6ca1cff" // Color para el polígono
  },
  {
    id: "colorantes-basicos",
    titulo: "Colorantes Basicos",
    categoria: "estampado",
    subcategorias: [3], // "Materias primas y auxiliares"
    taxonomias: [12], // "Colorantes"
    descripcion: "Línea completa de colorantes basicos.",
    imagenes: [cubetaImage],
    fichaTecnica: null, // No tiene PDF, solo tabla de colores
    esTablaColores: true, // Bandera para identificar productos de tabla de colores
    porcentajes: { porcentaje1: "0.5%", porcentaje2: "1%" }, // Porcentajes dinámicos
    colores: [
      { nombre: "AURAMINA VACRYL C BASIC YELLOW 2", color1: "#fdf901", color2: "#fae900" },
      { nombre: "AMARILLO DORADO VACRYL MGL BASIC YELLOW 28 400%", color1: "#fac100", color2: "#faa500" },
      { nombre: "AMARILLO VACRYL M-8GL BASIC YELLOW 13", color1: "#fce811", color2: "#fcd000" },
      { nombre: "CRISODINA VACRYL C BASIC ORANGE 2 ", color1: "#f47509", color2: "#dd4b0a" },

      { nombre: "RODAMINA VACRYL BA RHODAMINE 10 ", color1: "#fc21b8", color2: "#fd008d" },
      { nombre: "ROJO VACRYL M4G BASIC RED 14 ", color1: "#fa5c79", color2: "#fc274d" },
      { nombre: "ROJO VACRYL EV BASIC RED 27", color1: "#fe2474", color2: "#fd0662" },
      { nombre: "ROJO VACRYL MGRL BASIC RED 46 400% ", color1: "#e9215a", color2: "#c5043c" },
      { nombre: "ROJO VACRYL MGTL BASIC RED 18 290%", color1: "#be3832", color2: "#a20e21" },
      { nombre: "VIOLETA VACRYL 2B BASIC VIOLET 1 METHIL", color1: "#510063", color2: "#37004d" },
      { nombre: "VIOLETA VACRYL BE BASIC VIOLET 14", color1: "#a6005d", color2: "#7c0032" },
      { nombre: "VIOLETA VACRYL M3RM BASIC VIOLET 16", color1: "#fe008a", color2: "#ca0061" },
      { nombre: "TURQUESA VACRYL M5G BASIC BLUE 3 200%", color1: "#437aa4", color2: "#0b4e7c" },
      { nombre: "AZUL VACRYL H BASIC BLUE 7 100%", color1: "#0d1f87", color2: "#060473" },
      { nombre: "AZUL VACRYL CG BASIC BLUE 26 100%", color1: "#031379", color2: "#000363" },
      { nombre: "AZUL VACRYL MGRRL BASIC BLUE 41 300%", color1: "#104793", color2: "#021055" },
      { nombre: "AZUL VACRYL LS BASIC BLUE 159 540%", color1: "#0a125e", color2: "#03013e" },
      { nombre: "VERDE VACRYL MQT BASIC GREEN 4", color1: "#086064", color2: "#06454c" },
      { nombre: "NEGRO VACRYL HC MIX", color1: "#251c24", color2: "#11070b" },
      { nombre: "NEGRO VACRYL SW MIX", color1: "#2d2220", color2: "#190d0b" },
    ],
    colorPrincipal: "#3ba940ff" // Color para el polígono
  },
  {
    id: "colorantes-acidos",
    titulo: "Colorantes Acidos",
    categoria: "estampado",
    subcategorias: [3], // "Materias primas y auxiliares"
    taxonomias: [12], // "Colorantes"
    descripcion: "Línea completa de colorantes acidos.",
    imagenes: [cubetaImage],
    fichaTecnica: null, // No tiene PDF, solo tabla de colores
    esTablaColores: true, // Bandera para identificar productos de tabla de colores
    porcentajes: { porcentaje1: "1%", porcentaje2: "3%" }, // Porcentajes dinámicos
    colores: [
      { nombre: "AMARILLO VACID CD ACID YELLOW 23", color1: "#fded00    ", color2: " #faed00  " },
      { nombre: "AMARILLO VACID 2RL ACID YELLOW 49 200%", color1: "#f9ea00    ", color2: "#f9e600   " },
      { nombre: "AMARILLO VACID HD ACID YELLOW 73", color1: "  #fdef16  ", color2: " #fce500  " },
      { nombre: "AMARILLO VACID E2LS ACID YELLOW 219 250%", color1: "#f58501    ", color2: " #f58501  " },
      { nombre: "ROJO VACID 3GP ACID RED 131 150%", color1: "#c40266    ", color2: "#bc0057  " }, 
      { nombre: "ROJO VACID ERN ACID RED 114", color1: "  #d42335  ", color2: " #cd1629  " },
      { nombre: "ROJO VACID RVB ACID RED 151", color1: "#ce142c    ", color2: "  #c0041f " },
      { nombre: "ROJO VACID EG4L ACID RED 337 225%", color1: " #cd284a   ", color2: "#cc1836   " },
      { nombre: "ROJO VACID EG4L CONC. ACID RED 337 450%", color1: "  #c91f3a  ", color2: "#ba142e   " },
      { nombre: "ROJO VACID V6N ACID RED 299 200%", color1: "  #731c38  ", color2: " #642035 " }, 
      { nombre: "ROJO VACID FH ACID RED 57", color1: " #ba1e56  ", color2: " #aa1742  " },
      { nombre: "ROJO VACID FB ACID RED 52", color1: "#fc3999    ", color2: "  #fd107a " },
      { nombre: "ROJO VACID FB ACID RED 52 400%", color1: " #fc187a   ", color2: "#ef0463   " },
      { nombre: "NARANJA VACID H ACID ORANGE 7 100%", color1: "#fc7a00", color2: " #fa6900  " },
      { nombre: "TURQUESA VACID BGF ACID BLUE 185 100%", color1: " #008cc7   ", color2: "#007ab8   " },
      { nombre: "TRUQUESA VACID AG ACID BLUE 9", color1: " #3d5ec0   ", color2: "#2d4daf   " }, 
      { nombre: "AZUL VACID CG ACID BLUE62 200%", color1: " #4d2ec0  ", color2: "#4319a1   " },
      { nombre: "AZULBTE VACID R ACID BLUE 260", color1: " #4245a9   ", color2: " #281c83  " },
      { nombre: "AZULBTE VACID CONC. ACID BLUE 260", color1: "#2c218b    ", color2: "#1c0b71   " },
      { nombre: "AZUL VACID EGLS ACID BLUE 324", color1: " #04337e   ", color2: " #031868  " },
      { nombre: "AZUL VACID EGLS CONC. ACID BLUE 324 200%", color1: " #03256e   ", color2: "#00074f   " },  
      { nombre: "VIOLETA VACID BL", color1: " #8a179a   ", color2: " #7c007e  " },
      { nombre: "MARINO VACID V4FS ACID BLUE 113", color1: "  #041239  ", color2: "#010215   " },
      { nombre: "MARINO VACID 2SRL ACID BLUE 193", color1: "  #14122b  ", color2: "  #090615 " },
      { nombre: "NEGRO VACID VT ACID BLACK 194", color1: "  #211b22  ", color2: "  #19131a " }, 
      { nombre: "NEGRO VACID VET ACID BLACK 1 100%", color1: " #1f2435  ", color2: "#110b13   " },
      { nombre: "NEGRO VACID FC ACID BLACK 52 ", color1: "#2a1e22    ", color2: "#130c0c   " },
      { nombre: "CAFE VACID BE ACID BROWN 14", color1: " #963427   ", color2: " #7e2019  " },
      { nombre: "CAFE VACID HF ACID BROWN 75", color1: " #58282a   ", color2: " #371719  " },  
    ],
    colorPrincipal: "#c12aa5ff" // Color para el polígono
  },

];
