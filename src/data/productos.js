// Archivo de datos de productos para la tienda Polyvac
// Estructura actualizada para integrar con las taxonomías de estampado

// ============================================
// IMPORTACIÓN DE IMÁGENES
// ============================================

// Imagen general de productos
import cubetaImage from '../assets/cubeta.png';




// --- Colores Flock ---
import flockBlack from '../assets/productos/colores-flock/black.png';
import flockGray from '../assets/productos/colores-flock/gray.png';
import flockNavy from '../assets/productos/colores-flock/navy.png';
import flockWhite from '../assets/productos/colores-flock/white.png';

// --- Colores Glitters ---
import glitterOroBrillante008 from '../assets/productos/colores-glitters/oro-brillante-008.png';
import glitterOro04 from '../assets/productos/colores-glitters/oro-04.png';
import glitterRojo008 from '../assets/productos/colores-glitters/rojo-008.png';
import glitterRosa008 from '../assets/productos/colores-glitters/rosa-008.png';
import glitterVioleta008 from '../assets/productos/colores-glitters/violeta-008.png';
import glitterAzul from '../assets/productos/colores-glitters/azul.png';
import glitterVerde from '../assets/productos/colores-glitters/verde.png';
import glitterPlata08 from '../assets/productos/colores-glitters/plata-08.png';
import glitterPlata04 from '../assets/productos/colores-glitters/plata-04.png';
import glitterRainbow from '../assets/productos/colores-glitters/rainbow-1-128-08.png';
import glitterSugar from '../assets/productos/colores-glitters/sugar-1-128-08.png';
import glitterBlanco from '../assets/productos/colores-glitters/blanco.png';
import glitterNegro008 from '../assets/productos/colores-glitters/negro-008.png';

// --- Colores Micas ---
import micaPearl1000 from '../assets/productos/colores-micas/magna-pearl-1000.png';
import micaPlatino205 from '../assets/productos/colores-micas/magna-pearl-205-platino.png';
import micaInterferenceAzul225 from '../assets/productos/colores-micas/magna-pearl-225-interference-azul.png';
import micaVino504 from '../assets/productos/colores-micas/magna-pearl-504-vino.png';

// --- Gama de Mallas ---

import mallaBlanca from '../assets/productos/gama-mallas/malla-blanca.png';
import mallaAmarilla from '../assets/productos/gama-mallas/malla-amarilla.png';

// ============================================
// DATOS DE PRODUCTOS
// ============================================

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
      { nombre: "Amarillo", hex: "#ffff00" },
      { nombre: "Naranja", hex: "#ff6600" },
      { nombre: "Rosa Brillante", hex: "#ff2213" },
      { nombre: "Rojo escarlata", hex: "#ff0000" },
      { nombre: "Rojo Carmín", hex: "#c90019 " },
      { nombre: "Azul", hex: " #0000fd" },
      { nombre: "Marino", hex: " #000081" },
      { nombre: "Turquesa", hex: "#003660 " },
      { nombre: "Violeta", hex: " #810081" },
      { nombre: "Verde", hex: " #008100" },
      { nombre: "Negro", hex: "#000000 " },
      { nombre: "Café", hex: " #622c00" },
      { nombre: "Blanco", hex: "#ffffff " },
      { nombre: "Amarillo limon (FLUORESCENTE)", hex: "#ffff66 " },
      { nombre: "Naranja (FLUORESCENTE)", hex: "#ff9a00 " },
      { nombre: "Rosa (FLUORESCENTE)", hex: "#ff9acd " },
      { nombre: "Magenta (FLUORESCENTE)", hex: "#ff00ff " }, 
      { nombre: "Azul (FLUORESCENTE)", hex: " #009cf9" },
      { nombre: "Purpura (FLUORESCENTE)", hex: " #d250f8" },
      { nombre: "Verde (FLUORESCENTE)", hex: "#00ff00 " },
      { nombre: "Rojo (FLUORESCENTE)", hex: " #ff0000" },
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
      { nombre: "Amarillo mango", hex: "#ffcd00" },
      { nombre: "Amarillo Canario", hex: "#ffff00" },
      { nombre: "Naranja", hex: "#ff6600" },
      { nombre: "Rojo Claro ", hex: "#ff2213" },
      { nombre: "Rojo Carmín", hex: "#ff0000 " },
      { nombre: "Azul ultra ", hex: " #0000fd" },
      { nombre: "Marino", hex: " #0000ff" },
      { nombre: "Turquesa", hex: "#003066 " },
      { nombre: "Violeta", hex: " #810081" },
      { nombre: "Verde Bandera", hex: " #008100" },
      { nombre: "Verde botella", hex: "#008100f9 " },
      { nombre: "Negro", hex: " #000000" },
      { nombre: "Blanco", hex: "#ffffff " },
      { nombre: "Amarillo limon (FLUORESCENTE)", hex: "#fefe65 " },
      { nombre: "Naranja (FLUORESCENTE)", hex: "#fe9900 " },
      { nombre: "Magenta (FLUORESCENTE)", hex: "#fe00fe " },
      { nombre: "Rosa (FLUORESCENTE)", hex: "#fe99cc " }, 
      { nombre: "Rojo (FLUORESCENTE)", hex: " #fe0000" },
      { nombre: "Azul (FLUORESCENTE)", hex: " #009bf9" },
      { nombre: "Púrpura (FLUORESCENTE)", hex: "#d14ff8 " },
      { nombre: "Verde (FLUORESCENTE)", hex: " #00fe00" },
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
      { nombre: "Amarillo Limón", hex: "#ffcd00" },
      { nombre: "Amarillo Cromo", hex: "#ffff00" },
      { nombre: "Mandarina", hex: "#ff6600" },
      { nombre: "Rojo carmín ", hex: "#fc0000" },
      { nombre: "Rojo escarlata", hex: "#c70120 " },
      { nombre: "Azul ultramar", hex: " #0000f2" },
      { nombre: "Marino", hex: " #030080" },
      { nombre: "Morado", hex: "#7a017f " },
      { nombre: "Turquesa", hex: " #00355a" },
      { nombre: "Verde Jade", hex: " #007f00" },
      { nombre: "Verde esmeralda", hex: "#008100f9 " },
      { nombre: "Negro", hex: " #000000" },
      { nombre: "Blanco", hex: "#ffffff " },
      { nombre: "Amarillo limon (FLUORESCENTE)", hex: "#fefe65 " },
      { nombre: "Naranja (FLUORESCENTE)", hex: "#fe9900 " },
      { nombre: "Magenta (FLUORESCENTE)", hex: "#fe00fe " },
      { nombre: "Rosa (FLUORESCENTE)", hex: "#fe99cc " }, 
      { nombre: "Rojo (FLUORESCENTE)", hex: " #fe0000" },
      { nombre: "Azul (FLUORESCENTE)", hex: " #009bf9" },
      { nombre: "Púrpura (FLUORESCENTE)", hex: "#d14ff8 " },
      { nombre: "Verde (FLUORESCENTE)", hex: " #00fe00" },
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
      { nombre: "Amarillo Limón", hex: "#ffcd00" },
      { nombre: "Amarillo Cromo", hex: "#ffff00" },
      { nombre: "Mandarina", hex: "#ff6600" },
      { nombre: "Rojo fuego ", hex: "#fc0000" },
      { nombre: "Rojo escarlata", hex: "#c70120 " },
      { nombre: "Azul ultramar", hex: " #0000f2" },
      { nombre: "Marino", hex: " #030080" },
      { nombre: "Turquesa", hex: " #00355a" },
      { nombre: "Violeta", hex: "#7a017f " },
      { nombre: "Verde Jade", hex: " #007f00" },
      { nombre: "Verde esmeralda", hex: "#008100f9 " },
      { nombre: "Negro", hex: " #000000" },
      { nombre: "Blanco", hex: "#ffffff " },
      { nombre: "Amarillo limon (FLUORESCENTE)", hex: "#fefe65 " },
      { nombre: "Naranja (FLUORESCENTE)", hex: "#fe9900 " },
      { nombre: "Magenta (FLUORESCENTE)", hex: "#fe00fe " },
      { nombre: "Rosa (FLUORESCENTE)", hex: "#fe99cc " }, 
      { nombre: "Rojo (FLUORESCENTE)", hex: " #fe0000" },
      { nombre: "Azul (FLUORESCENTE)", hex: " #009bf9" },
      { nombre: "Púrpura (FLUORESCENTE)", hex: "#d14ff8 " },
      { nombre: "Verde (FLUORESCENTE)", hex: " #00fe00" },
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
      { nombre: "Amarillo", hex: "#ffff00" },
      { nombre: "Amarillo Oro", hex: "#ffcd00" },
      { nombre: "Amarillo ", hex: "#fffe00" },
      { nombre: "Naranja", hex: "#ff6600" },
      { nombre: "Naranja", hex: "#fe8935" },
      { nombre: "Rojo", hex: "#ff2213" },
      { nombre: "Rojo", hex: "#fe2113" },
      { nombre: "Rojo", hex: "#c90019" },
      { nombre: "Rosa", hex: "#ff309a " },
      { nombre: "Azul", hex: " #0000ff" },
      { nombre: "Azul", hex: " #003066" },
      { nombre: "Marino", hex: " #000081" },
      { nombre: "Marino", hex: " #2f66ff" },
      { nombre: "Marino", hex: " #39638a" },
      { nombre: "Violeta", hex: "#810081 " },
      { nombre: "Verde", hex: " #008100" },
      { nombre: "Negro", hex: " #000000" },
      { nombre: "Blanco", hex: "#ffffff " },
      { nombre: "Amarillo  (FLUORESCENTE)", hex: "#fefe65 " },
      { nombre: "Naranja (FLUORESCENTE)", hex: "#fe9900 " },
      { nombre: "Magenta (FLUORESCENTE)", hex: "#fe00fe " },
      { nombre: "Rosa (FLUORESCENTE)", hex: "#fe99cc " }, 
      { nombre: "Azul (FLUORESCENTE)", hex: " #009bf9" },
      { nombre: "Púrpura (FLUORESCENTE)", hex: "#d14ff8 " },
      { nombre: "Verde (FLUORESCENTE)", hex: " #00fe00" },
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
      { nombre: "Amarillo", hex: "#ffff00" },
      { nombre: "Naranja", hex: "#ffcd00" },
      { nombre: "Rojo ", hex: "#ff6600" },
      { nombre: "Rojo escarlata", hex: "#fe2112 " },
      { nombre: "Azul", hex: " #0000ff" },
      { nombre: "Azul", hex: " #0000f9" },
      { nombre: "Turquesa", hex: " #003066" },
      { nombre: "Violeta", hex: " #800080" },
      { nombre: "Verde", hex: "#008100 " },
      { nombre: "Negro", hex: " #000000" },
      { nombre: "Blanco", hex: "#ffffff " },
      { nombre: "Amarillo limon (FLUORESCENTE)", hex: "#fefe65 " },
      { nombre: "Naranja (FLUORESCENTE)", hex: "#fe9900 " },
      { nombre: "Rosa (FLUORESCENTE)", hex: "#fe99cc " }, 
      { nombre: "Verde (FLUORESCENTE)", hex: " #00fe00" },
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
      { nombre: "Amarillo", hex: "#ffff00" },
      { nombre: "Amarillo", hex: "#ffcd00" },
      { nombre: "Amarillo", hex: "#ffcd00" },
      { nombre: "Amarillo oro", hex: "#ffcd00" },
      { nombre: "Naranja", hex: "#ff0000" },
      { nombre: "Rojo vivo", hex: "#cb0119" },
      { nombre: "Azul", hex: " #0000ff" },
      { nombre: "Azul", hex: " #0000ff" },
      { nombre: "Azul", hex: " #0000ff" },
      { nombre: "Marino", hex: " #003066" },
      { nombre: "Marino", hex: " #003662" },
      { nombre: "Morado", hex: " #800080" },
      { nombre: "Violeta", hex: " #800081" },
      { nombre: "Verde", hex: "#008101 " },
      { nombre: "Verde", hex: "#008100 " },
      { nombre: "Negro", hex: " #000000" },
      { nombre: "Blanco", hex: "#ffffff " },
      { nombre: "Amarillo limon (FLUORESCENTE)", hex: "#fefe65 " },
      { nombre: "Naranja (FLUORESCENTE)", hex: "#fe9900 " },
      { nombre: "Rosa (FLUORESCENTE)", hex: "#fe99cc " }, 
      { nombre: "Verde (FLUORESCENTE)", hex: " #00fe00" },
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
      { nombre: "Amarillo", hex: "#ffff00" },
      { nombre: "Amarillo", hex: "#ffcd00" },
      { nombre: "Amarillo", hex: "#ffcd00" },
      { nombre: "Amarillo oro", hex: "#ffcd00" },
      { nombre: "Naranja", hex: "#ff0000" },
      { nombre: "Rojo vivo", hex: "#cb0119" },
      { nombre: "Azul", hex: " #0000ff" },
      { nombre: "Azul", hex: " #0000ff" },
      { nombre: "Azul", hex: " #0000ff" },
      { nombre: "Marino", hex: " #003066" },
      { nombre: "Marino", hex: " #003662" },
      { nombre: "Morado", hex: " #800080" },
      { nombre: "Violeta", hex: " #800081" },
      { nombre: "Verde", hex: "#008101 " },
      { nombre: "Verde", hex: "#008100 " },
      { nombre: "Negro", hex: " #000000" },
      { nombre: "Blanco", hex: "#ffffff " },
      { nombre: "Amarillo limon (FLUORESCENTE)", hex: "#fefe65 " },
      { nombre: "Naranja (FLUORESCENTE)", hex: "#fe9900 " },
      { nombre: "Rosa (FLUORESCENTE)", hex: "#fe99cc " }, 
      { nombre: "Verde (FLUORESCENTE)", hex: " #00fe00" },
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
    porcentajes: null, // Porcentajes eliminados
    colores: [
      { nombre: "AMARILLO VACDIR EE DIRECT YELLOW 44", color1: "#fcea0a" },
      { nombre: "AMARILLO VACDIR BEC DIRECT YELLOW 142", color1: "#fdf218" },
      { nombre: "AMARILLO VACDIR FA DIRECT YELLOW 5O", color1: "#fceb22" },
      { nombre: "AMARILLO VACDIR IG DIRECT YELLOW 86", color1: "#fbd402" },
      { nombre: "NARANJA VACDIR CG DIREC ORANGE 26 150%", color1: "#fa722a" },
      { nombre: "NARANJA VACDIR DE DIREC ORANGE 34", color1: "#fb9e0a" },
      { nombre: "NARANJA VACDIR DJ DIREC ORANGE 39", color1: "#f79808" },
      { nombre: "ROJO VACDIR CCI DIRECT RED 227", color1: "#eb559c" },
      { nombre: "ROJO VACDIR CD DIRECT RED 23", color1: "#e1444b" },
      { nombre: "ROJO VACDIR CI DIRECT RED 28", color1: "#cf2d39" },
      { nombre: "ROJO VACDIR DB DIRECT RED 31 150%", color1: "#bc1b53" },
      { nombre: "ROJO VACDIR IB DIRECT RED 81 100%", color1: "#c1264a" },
      { nombre: "ROJO VACDIR CED DIRECT RED 243", color1: "#c63060" },
      { nombre: "VIOLETA VACDIR FB DIRECT VIOLET 51", color1: "#74317e" },
      { nombre: "VIOLETA VACDIR J DIRECT VIOLET 9 180%", color1: "#4b1f50" },
      { nombre: "AZUL VACDIR CAA DIRECT BLUE 200 200%", color1: "#1d3f6a" },

      { nombre: "AZUL VACDIR C DIRECT BLUE 2 ", color1: "#3a5075" }, 
      { nombre: "AZUL VACDIR CAB DIRECT BLUE 201 200%", color1: "#314376" },
      { nombre: "AZUL VACDIR BFB DIRECT BLUE 151", color1: "#282a56" },
      { nombre: "AZUL VACDIR BF DIRECT BLUE 15", color1: "#123a6a" },

      { nombre: "AZUL VACDIR HB DIRECT BLUE 71", color1: "#183254" },
      { nombre: "AZUL VACDIR BAI DIRECT BLUE 108", color1: "#608ccb" },
      { nombre: "AZUL VACDIR IG DIRECT BLUE 86", color1: "#00c1e0" },
      { nombre: "VERDE VACDIR B DIRECT GREEN 1", color1: "#354645" },
      { nombre: "CAFE VACDIR C DIRECT BROWN 2", color1: "#694437" },
      { nombre: "CAFE VACDIR JF DIRECT BROWN 95", color1: "#a16f47" },
      { nombre: "NEGRO VACDIR CC DIRECT BLACK 1600%", color1: "#272d32" },
      { nombre: "NEGRO VACDIR CC DIRECT BLACK 1200%", color1: "#253334" },
      { nombre: "NEGRO VACDIR DI DIRECT BLACK 38", color1: "#1e1f23" },

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
    porcentajes: null, // Porcentajes eliminados
    colores: [
      { nombre: "AURAMINA VACRYL C BASIC YELLOW 2", color1: "#fdf901" },
      { nombre: "AMARILLO DORADO VACRYL MGL BASIC YELLOW 28 400%", color1: "#fac100" },
      { nombre: "AMARILLO VACRYL M-8GL BASIC YELLOW 13", color1: "#fce811" },
      { nombre: "CRISODINA VACRYL C BASIC ORANGE 2 ", color1: "#f47509" },

      { nombre: "RODAMINA VACRYL BA RHODAMINE 10 ", color1: "#fc21b8" },
      { nombre: "ROJO VACRYL M4G BASIC RED 14 ", color1: "#fa5c79" },
      { nombre: "ROJO VACRYL EV BASIC RED 27", color1: "#fe2474" },
      { nombre: "ROJO VACRYL MGRL BASIC RED 46 400% ", color1: "#e9215a" },
      { nombre: "ROJO VACRYL MGTL BASIC RED 18 290%", color1: "#be3832" },
      { nombre: "VIOLETA VACRYL 2B BASIC VIOLET 1 METHIL", color1: "#510063" },
      { nombre: "VIOLETA VACRYL BE BASIC VIOLET 14", color1: "#a6005d" },
      { nombre: "VIOLETA VACRYL M3RM BASIC VIOLET 16", color1: "#fe008a" },
      { nombre: "TURQUESA VACRYL M5G BASIC BLUE 3 200%", color1: "#437aa4" },
      { nombre: "AZUL VACRYL H BASIC BLUE 7 100%", color1: "#0d1f87" },
      { nombre: "AZUL VACRYL CG BASIC BLUE 26 100%", color1: "#031379" },
      { nombre: "AZUL VACRYL MGRRL BASIC BLUE 41 300%", color1: "#104793" },
      { nombre: "AZUL VACRYL LS BASIC BLUE 159 540%", color1: "#0a125e" },
      { nombre: "VERDE VACRYL MQT BASIC GREEN 4", color1: "#086064" },
      { nombre: "NEGRO VACRYL HC MIX", color1: "#251c24" },
      { nombre: "NEGRO VACRYL SW MIX", color1: "#2d2220" },
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
    porcentajes: null, // Porcentajes eliminados
    colores: [
      { nombre: "AMARILLO VACID CD ACID YELLOW 23", color1: "#fded00    " },
      { nombre: "AMARILLO VACID 2RL ACID YELLOW 49 200%", color1: "#f9ea00    " },
      { nombre: "AMARILLO VACID HD ACID YELLOW 73", color1: "  #fdef16  " },
      { nombre: "AMARILLO VACID E2LS ACID YELLOW 219 250%", color1: "#f58501    " },
      { nombre: "ROJO VACID 3GP ACID RED 131 150%", color1: "#c40266    " }, 
      { nombre: "ROJO VACID ERN ACID RED 114", color1: "  #d42335  " },
      { nombre: "ROJO VACID RVB ACID RED 151", color1: "#ce142c    " },
      { nombre: "ROJO VACID EG4L ACID RED 337 225%", color1: " #cd284a   " },
      { nombre: "ROJO VACID EG4L CONC. ACID RED 337 450%", color1: "  #c91f3a  " },
      { nombre: "ROJO VACID V6N ACID RED 299 200%", color1: "  #731c38  " }, 
      { nombre: "ROJO VACID FH ACID RED 57", color1: " #ba1e56  " },
      { nombre: "ROJO VACID FB ACID RED 52", color1: "#fc3999    " },
      { nombre: "ROJO VACID FB ACID RED 52 400%", color1: " #fc187a   " },
      { nombre: "NARANJA VACID H ACID ORANGE 7 100%", color1: "#fc7a00" },
      { nombre: "TURQUESA VACID BGF ACID BLUE 185 100%", color1: " #008cc7   " },
      { nombre: "TRUQUESA VACID AG ACID BLUE 9", color1: " #3d5ec0   " }, 
      { nombre: "AZUL VACID CG ACID BLUE62 200%", color1: " #4d2ec0  " },
      { nombre: "AZULBTE VACID R ACID BLUE 260", color1: " #4245a9   " },
      { nombre: "AZULBTE VACID CONC. ACID BLUE 260", color1: "#2c218b    " },
      { nombre: "AZUL VACID EGLS ACID BLUE 324", color1: " #04337e   " },
      { nombre: "AZUL VACID EGLS CONC. ACID BLUE 324 200%", color1: " #03256e   " },  
      { nombre: "VIOLETA VACID BL", color1: " #8a179a   " },
      { nombre: "MARINO VACID V4FS ACID BLUE 113", color1: "  #041239  " },
      { nombre: "MARINO VACID 2SRL ACID BLUE 193", color1: "  #14122b  " },
      { nombre: "NEGRO VACID VT ACID BLACK 194", color1: "  #211b22  " }, 
      { nombre: "NEGRO VACID VET ACID BLACK 1 100%", color1: " #1f2435  " },
      { nombre: "NEGRO VACID FC ACID BLACK 52 ", color1: "#2a1e22    " },
      { nombre: "CAFE VACID BE ACID BROWN 14", color1: " #963427   " },
      { nombre: "CAFE VACID HF ACID BROWN 75", color1: " #58282a   " },  
    ],
    colorPrincipal: "#c12aa5ff" // Color para el polígono
  },
  {
      id: "colores-flock",
      titulo: "Colores Flock",
      categoria: "estampado",
      subcategorias: [1], // "Materias primas y auxiliares"
      taxonomias: [5], // "Colorantes"
      descripcion: "Gama de Colores Flock",
      imagenes: [cubetaImage],
      fichaTecnica: null, // No tiene PDF, solo tabla de colores
      esTablaColores: true, // Bandera para identificar productos de tabla de colores
      porcentajes: null, // Porcentajes eliminados
      colores: [
        { nombre: "Flock Gray", imagen: flockGray },
        { nombre: "Flock Black 02", imagen: flockBlack },
        { nombre: "Flock Navy 6143", imagen: flockNavy },
        { nombre: "Flock White 01", imagen: flockWhite },
      ],
      colorPrincipal: "#d4c56eff" // Color para el polígono
    },
    {
      id: "colores-micas",
      titulo: "Colores Micas",
      categoria: "estampado",
      subcategorias: [1], // "Materias primas y auxiliares"
      taxonomias: [5], // "Colorantes"
      descripcion: "Gama de Colores Micas",
      imagenes: [cubetaImage],
      fichaTecnica: null, // No tiene PDF, solo tabla de colores
      esTablaColores: true, // Bandera para identificar productos de tabla de colores
      porcentajes: null, // Porcentajes eliminados
      colores: [
        { nombre: "Magna Pearl 1000", imagen: micaPearl1000 },
        { nombre: "Magna Pearl 205 Platino", imagen: micaPlatino205 },
        { nombre: "Magna Pearl 225 Interference Azul", imagen: micaInterferenceAzul225 },
        { nombre: "Magna Pearl 504 Vino", imagen: micaVino504 },
      ],
      colorPrincipal: "#2bd76aff" // Color para el polígono
    },
    {
        id: "colores-glitters",
        titulo: "Colores Glitters",
        categoria: "estampado",
        subcategorias: [1], // "Materias primas y auxiliares"
        taxonomias: [5], // "Colorantes"
        descripcion: "Gama de Colores Glitters",
        imagenes: [cubetaImage],
        fichaTecnica: null, // No tiene PDF, solo tabla de colores
        esTablaColores: true, // Bandera para identificar productos de tabla de colores
        porcentajes: null, // Porcentajes eliminados
        colores: [
          { nombre: "Glitter Oro Brillante .008", imagen: glitterOroBrillante008 },
          { nombre: "Glitter Oro .04", imagen: glitterOro04 },
          { nombre: "Glitter Rojo .008", imagen: glitterRojo008 },
          { nombre: "Glitter Rosa .008", imagen: glitterRosa008 },
          { nombre: "Glitter Violeta 0.008", imagen: glitterVioleta008 },
          { nombre: "Glitter Azul", imagen: glitterAzul },
          { nombre: "Glitter Verde", imagen: glitterVerde },
          { nombre: "Glitter Plata .08", imagen: glitterPlata08 },
          { nombre: "Glitter Plata 0.04", imagen: glitterPlata04 },
          { nombre: "Glitter Rainbow 1/128 .08", imagen: glitterRainbow },
          { nombre: "Glitter Sugar 1/128 .08", imagen: glitterSugar },
          { nombre: "Glitter Blanco", imagen: glitterBlanco },
          { nombre: "Glitter Negro 008", imagen: glitterNegro008 },
        ],
        colorPrincipal: "#d64b1dff" // Color para el polígono
      },
      {
        id: "gama-mallas",
        titulo: "Gama de Mallas",
        categoria: "estampado",
        subcategorias: [4], // "Accesorios de serigrafía"
        taxonomias: [16], // "Mallas"
        descripcion: "Mallas de alta tensión y precisión para serigrafía, disponibles en diferentes numeraciones para todo tipo de trabajos.",
        imagenes: [cubetaImage], // Placeholder
        fichaTecnica: null,
        esTablaEspecificaciones: true, // Bandera para usar el nuevo componente
        items: [
          {
            nombre: "Malla 11",
            imagen: mallaBlanca,
            especificaciones: [
              "Número de hilos: 11 h/cm 28 h/pulg",
              "Apertura de la malla: 750 micras - µm",
              "Diámetro del hilo: 250 micras - µm",
              "Superficie abierta: 56%",
              "Grosor de seda: 500 micras - µm",
              "Peso: 165 g/m²",
              "Deposito teórico de tinta: 280 cm³/m²",
              "Tensión: 66 N/cm"
            ]
          },
          {
            nombre: "Malla 24",
            imagen: mallaBlanca,
            especificaciones: [
              "Número de hilos: 24 h/cm 60 h/pulg",
              "Apertura de la malla: 297 micras - µm",
              "Diámetro del hilo: 120 micras - µm",
              "Superficie abierta: 51%",
              "Grosor de seda: 204 micras - µm",
              "Peso: 97 g/m²",
              "Deposito teórico de tinta: 104 cm³/m²",
              "Tensión: 52 N/cm"
            ]
          },
          {
            nombre: "Malla 32",
            imagen: mallaBlanca,
            especificaciones: [
              "Número de hilos: 32 h/cm 80 h/pulg",
              "Apertura de la malla: 212 micras - µm",
              "Diámetro del hilo: 100 micras - µm",
              "Superficie abierta: 45%",
              "Grosor de seda: 165 micras - µm",
              "Peso: 75 g/m²",
              "Deposito teórico de tinta: 73 cm³/m²",
              "Tensión: 54 N/cm"
            ]
          },
          {
            nombre: "Malla 34",
            imagen: mallaBlanca,
            especificaciones: [
              "Número de hilos: 34 h/cm 86 h/pulg",
              "Apertura de la malla: 194 micras - µm",
              "Diámetro del hilo: 100 micras - µm",
              "Superficie abierta: 44%",
              "Grosor de seda: 172 micras - µm",
              "Peso: 78 g/m²",
              "Deposito teórico de tinta: 76 cm³/m²",
              "Tensión: 56 N/cm"
            ]
          },
          {
            nombre: "Malla 36",
            imagen: mallaBlanca,
            especificaciones: [
              "Número de hilos: 36 h/cm 90 h/pulg",
              "Apertura de la malla: 173 micras - µm",
              "Diámetro del hilo: 100 micras - µm",
              "Superficie abierta: 41%",
              "Grosor de seda: 166 micras - µm",
              "Peso: 75 g/m²",
              "Deposito teórico de tinta: 68 cm³/m²",
              "Tensión: 56 N/cm"
            ]
          },
          {
            nombre: "Malla 43",
            imagen: mallaBlanca,
            especificaciones: [
              "Número de hilos: 43 h/cm 110 h/pulg",
              "Apertura de la malla: 149 micras - µm",
              "Diámetro del hilo: 80 micras - µm",
              "Superficie abierta: 41%",
              "Grosor de seda: 130 micras - µm",
              "Peso: 64 g/m²",
              "Deposito teórico de tinta: 53 cm³/m²",
              "Tensión: 37 N/cm"
            ]
          },
          {
            nombre: "Malla 55",
            imagen: mallaBlanca,
            especificaciones: [
              "Número de hilos: 55 h/cm 140 h/pulg",
              "Apertura de la malla: 118 micras - µm",
              "Diámetro del hilo: 64 micras - µm",
              "Superficie abierta: 42%",
              "Grosor de seda: 109 micras - µm",
              "Peso: 42 g/m²",
              "Deposito teórico de tinta: 45 cm³/m²",
              "Tensión: 32 N/cm"
            ]
          },
          {
            nombre: "Malla 62",
            imagen: mallaBlanca,
            especificaciones: [
              "Número de hilos: 62 h/cm 160 h/pulg",
              "Apertura de la malla: 95 micras - µm",
              "Diámetro del hilo: 64 micras - µm",
              "Superficie abierta: 34%",
              "Grosor de seda: 109 micras - µm",
              "Peso: 58 g/m²",
              "Deposito teórico de tinta: 37 cm³/m²",
              "Tensión: 32 N/cm"
            ]
          },
          {
            nombre: "Malla 72",
            imagen: mallaBlanca,
            especificaciones: [
              "Número de hilos: 72 h/cm 183 h/pulg",
              "Apertura de la malla: 149 micras - µm",
              "Diámetro del hilo: 55 micras - µm",
              "Superficie abierta: 30%",
              "Grosor de seda: 90 micras - µm",
              "Peso: 51 g/m²",
              "Deposito teórico de tinta: 27 cm³/m²",
              "Tensión: 38 N/cm"
            ]
          },
          {
            nombre: "Malla 77",
            imagen: mallaBlanca,
            especificaciones: [
              "Número de hilos: 77 h/cm 195 h/pulg",
              "Apertura de la malla: 67 micras - µm",
              "Diámetro del hilo: 55 micras - µm",
              "Superficie abierta: 27%",
              "Grosor de seda: 88 micras - µm",
              "Peso: 55 g/m²",
              "Deposito teórico de tinta: 24 cm³/m²",
              "Tensión: 33 N/cm"
            ]
          },
          {
            nombre: "Malla Blanca 90",
            imagen: mallaBlanca,
            especificaciones: [
              "Número de hilos: 90 h/cm 230 h/pulg",
              "Apertura de la malla: 56 micras - µm",
              "Diámetro del hilo: 48 micras - µm",
              "Superficie abierta: 25%",
              "Grosor de seda: 78 micras - µm",
              "Peso: 50 g/m²",
              "Deposito teórico de tinta: 19 cm³/m²",
              "Tensión: 32 N/cm"
            ]
          },
          {
            nombre: "Malla Blanca 120",
            imagen: mallaBlanca,
            especificaciones: [
              "Número de hilos: 120 h/cm 305 h/pulg",
              "Apertura de la malla: 45 micras - µm",
              "Diámetro del hilo: 34 micras - µm",
              "Superficie abierta: 30%",
              "Grosor de seda: 55 micras - µm",
              "Peso: 35 g/m²",
              "Deposito teórico de tinta: 16 cm³/m²",
              "Tensión: 34 N/cm"
            ]
          },
          {
            nombre: "Malla Blanca 140",
            imagen: mallaBlanca,
            especificaciones: [
              "Número de hilos: 140 h/cm 355 h/pulg",
              "Apertura de la malla: 31 micras - µm",
              "Diámetro del hilo: 34 micras - µm",
              "Superficie abierta: 20%",
              "Grosor de seda: 53 micras - µm",
              "Peso: 29 g/m²",
              "Deposito teórico de tinta: 10 cm³/m²",
              "Tensión: 29 N/cm"
            ]
          },
          {
            nombre: "Malla 90 Amarilla",
            imagen: mallaAmarilla,
            especificaciones: [
              "Número de hilos: 90 h/cm 230 h/pulg",
              "Apertura de la malla: 56 micras - µm",
              "Diámetro del hilo: 48 micras - µm",
              "Superficie abierta: 25%",
              "Grosor de seda: 78 micras - µm",
              "Peso: 50 g/m²",
              "Deposito teórico de tinta: 19 cm³/m²",
              "Tensión: 32 N/cm"
            ]
          },
          {
            nombre: "Malla 120 Amarilla",
            imagen: mallaAmarilla,
            especificaciones: [
              "Número de hilos: 120 h/cm 305 h/pulg",
              "Apertura de la malla: 45 micras - µm",
              "Diámetro del hilo: 34 micras - µm",
              "Superficie abierta: 30%",
              "Grosor de seda: 55 micras - µm",
              "Peso: 35 g/m²",
              "Deposito teórico de tinta: 16 cm³/m²",
              "Tensión: 34 N/cm"
            ]
          },
          {
            nombre: "Malla 140 Amarilla",
            imagen: mallaAmarilla,
            especificaciones: [
              "Número de hilos: 140 h/cm 355 h/pulg",
              "Apertura de la malla: 31 micras - µm",
              "Diámetro del hilo: 34 micras - µm",
              "Superficie abierta: 20%",
              "Grosor de seda: 53 micras - µm",
              "Peso: 29 g/m²",
              "Deposito teórico de tinta: 10 cm³/m²",
              "Tensión: 29 N/cm"
            ]
          }
        ],
        colorPrincipal: "#27cfe8ff"
      },
      {
        id: "pigmentos-en-polvo",
        titulo: "Pigmentos en Polvo",
        categoria: "estampado",
        subcategorias: [3], // "Materias primas y auxiliares"
        taxonomias: [11], // "Pigmentos"
        descripcion: "Gama completa de pigmentos en polvo para diversas aplicaciones.",
        imagenes: [cubetaImage],
        fichaTecnica: null,
        esTablaColores: true,
        porcentajes: null,
        colores: [
          { nombre: "Pig Amarillo Limon Fluo P-FT", color1: "#ebe200" },
          { nombre: "Pigmento Flourescente Amarillo limón FB", color1: "#ebe200" },
          { nombre: "Yellow Fluo SHT-17", color1: "#ebe200" },
          { nombre: "Pigmento Amarillo Fluo", color1: "#ffff01" },
          { nombre: "Amarillo Fluo EG", color1: "#ffff01" },
          { nombre: "Pigmento Amarillo 12", color1: "#ffe401" },
          { nombre: "Pigmento Amarillo 14", color1: "#ffe603" },
          { nombre: "Pigmento Amarillo 34 Limon", color1: "#ffdb01" },
          { nombre: "Pigmento Amarillo 62", color1: "#f3d304" },
          { nombre: "Pigmento Amarillo 65", color1: "#ffd002" },
          { nombre: "Pigmento Amarillo 34 rojizo", color1: "#ffcc00" },
          { nombre: "Pigmento Amarillo 55", color1: "#ffb301" },
          { nombre: "Pigmento Amarillo 83", color1: "#ea9713" },
          { nombre: "Pigmento Naranja 13", color1: "#fc7712" },
          { nombre: "Pig Naranja Fluo P-FT", color1: "#fe7815" },
          { nombre: "Pig Naranja Amarillento Fluo P-FT", color1: "#fe7815" },
          { nombre: "Pigmento Naranja Fluo FB", color1: "#fe7914" },
          { nombre: "Orange Fluo SHT-15", color1: "#ff7714" },
          { nombre: "Orange Yellow Fluo SHT-16", color1: "#ff7613" },
          { nombre: "Pigmento Naranja 34", color1: "#ff7010" },
          { nombre: "Pigmento Naranja 36 (Base solvente)", color1: "#ec3f17" },
          { nombre: "Red Orange Fluo SHT-14", color1: "#ee401c" },
          { nombre: "Naranja Molibdato MM - 33", color1: "#ec3e1e" },
          { nombre: "Pigmento Durazno Fluo", color1: "#ef3b1d" },
          { nombre: "Rojo Pig 104 207", color1: "#ef3c1c" },
          { nombre: "Rojo Pig 104 307 A", color1: "#f03e20" },
          { nombre: "Rojo Fluo SHT-13", color1: "#f02d2b" },
          { nombre: "Rojo Fluo Polvo EG", color1: "#f22f2e" },
          { nombre: "Pigmento Rojo 170", color1: "#f12e2c" },
          { nombre: "Pigmento Rojo 254", color1: "#cd0108" },
          { nombre: "Pigmento Rojo 48:1", color1: "#d02622" },
          { nombre: "Pigmento Rojo 48:2", color1: "#d61d25" },
          { nombre: "Pigmento Rojo 53:1", color1: "#d42228" },
          { nombre: "Pigmento Rojo 57:1 (Base solvente)", color1: "#b92123" },
          { nombre: "Pigment Red 57:1 (Plástico)", color1: "#b81b24" },
          { nombre: "Pigmento Rojo 146", color1: "#8d0209" },
          { nombre: "Pigmento Rojo 122", color1: "#850317" },
          { nombre: "Pigmento Rojo 31", color1: "#85031a" },
          { nombre: "Cereza Fluo SHT-12", color1: "#ce5b96" },
          { nombre: "Pigmento Magenta Fluo FT", color1: "#ca0186" },
          { nombre: "Magenta Fluo Polvo EG", color1: "#ca0186" },
          { nombre: "Magenta SHT-21", color1: "#ca0186CC" },
          { nombre: "Pigmento Magenta Fluo FB", color1: "#ca0186" },
          { nombre: "Pigmento Rosa Fluorescente", color1: "#f380bb" },
          { nombre: "Pigmento Rosa Fluo FB", color1: "#f47fbb" },
          { nombre: "Pig Rosa Fluo P-FT", color1: "#f47fbd" },
          { nombre: "Rosa Fluo SHT-11", color1: "#f47fbd" },
          { nombre: "Pigmento Violeta 1", color1: "#41156e" },
          { nombre: "Pigmento Violeta Fluo FB", color1: "#2a155f" },
          { nombre: "Violet Fluo SHT-20", color1: "#2a155f" },
          { nombre: "Pigmento Violeta 23", color1: "#170a35" },
          { nombre: "Pigmento Violeta 3", color1: "#000120" },
          { nombre: "Pigmento Violeta 3(Base Solvente)", color1: "#000120" },
          { nombre: "Pigmento Azul 15:0", color1: "#0e123e" },
          { nombre: "Pigmento Azul 15:1", color1: "#0f103e" },
          { nombre: "Pigmento Azul 15:3 (FTALO)", color1: "#041145" },
          { nombre: "Pigmento Azul 15:4", color1: "#233973" },
          { nombre: "Pigmento Azul 29 Ultramar", color1: "#0035b5" },
          { nombre: "Pigmento Azul Fluo FB", color1: "#00a8ff" },
          { nombre: "Pig Azul Fluo P-FT", color1: "#00a8ff" },
          { nombre: "Blue Fluo SHT-19", color1: "#00a8ff" },
          { nombre: "Pigmento Verde 7 (Verde ftalo)", color1: "#01301c" },
          { nombre: "Pigmento Verde 8", color1: "#01301c" },
          { nombre: "Pigmento Verde Fluo FB", color1: "#01ff01" },
          { nombre: "Pig Verde Fluo P- FT", color1: "#01ff01" },
          { nombre: "Verde Fosforescente M-500", color1: "#01ff01" },
          { nombre: "Pigmento Blanco FT", color1: "#fefefe" },
          { nombre: "Pigmento Negro 7", color1: "#000000" },
        ],
        colorPrincipal: "#d58606ff" // Color para el polígono
      }
];
