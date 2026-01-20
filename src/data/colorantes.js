// Archivo de datos específico para la categoría de Colorantes

// Usamos la misma imagen genérica para todos por el momento, o importamos la misma si está disponible
import cubetaImage from '../assets/cubeta.png';

// Si existen en la carpeta de productos, intentaríamos usarlas, pero por seguridad y consistencia usaremos placeholders o la genérica
// a menos que podamos confirmar sus rutas. En productos.js importaban '../assets/productos/colorantes.png' 
// Vamos a asumir que esa imagen existe y usarla.
// import colorantesImage from '../assets/productos/colorantes.png'; 
import acidosImage from '../assets/productos/colorantes/colorantes-acidos.png';
import basicosImage from '../assets/productos/colorantes/colorantes-basicos.png';
import directosImage from '../assets/productos/colorantes/colorantes-directos.png';

const products = [
  {
    id: "colorantes-basicos",
    titulo: "COLORANTES BASICOS",
    tipo: "basicos", // Campo identificador para agrupación si se requiere en el futuro
    descripcion: "Línea completa de colorantes basicos.",
    imagenes: [basicosImage],
    fichaTecnica: null,
    esTablaColores: true, // Indica que este producto es principalmente una tabla de colores
    colores: [
      { nombre: "AURAMINA VACRYL C BASIC YELLOW 2", hex: "#fdf901" },
      { nombre: "AMARILLO DORADO VACRYL MGL BASIC YELLOW 28 400%", hex: "#fac100" },
      { nombre: "AMARILLO VACRYL M-8GL BASIC YELLOW 13", hex: "#fce811" },
      { nombre: "CRISODINA VACRYL C BASIC ORANGE 2 ", hex: "#f47509" },

      { nombre: "RODAMINA VACRYL BA RHODAMINE 10 ", hex: "#fc21b8" },
      { nombre: "ROJO VACRYL M4G BASIC RED 14 ", hex: "#fa5c79" },
      { nombre: "ROJO VACRYL EV BASIC RED 27", hex: "#fe2474" },
      { nombre: "ROJO VACRYL MGRL BASIC RED 46 400% ", hex: "#e9215a" },
      { nombre: "ROJO VACRYL MGTL BASIC RED 18 290%", hex: "#be3832" },
      { nombre: "VIOLETA VACRYL 2B BASIC VIOLET 1 METHIL", hex: "#510063" },
      { nombre: "VIOLETA VACRYL BE BASIC VIOLET 14", hex: "#a6005d" },
      { nombre: "VIOLETA VACRYL M3RM BASIC VIOLET 16", hex: "#fe008a" },
      { nombre: "TURQUESA VACRYL M5G BASIC BLUE 3 200%", hex: "#437aa4" },
      { nombre: "AZUL VACRYL H BASIC BLUE 7 100%", hex: "#0d1f87" },
      { nombre: "AZUL VACRYL CG BASIC BLUE 26 100%", hex: "#031379" },
      { nombre: "AZUL VACRYL MGRRL BASIC BLUE 41 300%", hex: "#104793" },
      { nombre: "AZUL VACRYL LS BASIC BLUE 159 540%", hex: "#0a125e" },
      { nombre: "VERDE VACRYL MQT BASIC GREEN 4", hex: "#086064" },
      { nombre: "NEGRO VACRYL HC MIX", hex: "#251c24" },
      { nombre: "NEGRO VACRYL SW MIX", hex: "#2d2220" },
    ],
    colorPrincipal: "#3ba940ff"
  },
  {
    id: "colorantes-acidos",
    titulo: "COLORANTES ACIDOS",
    tipo: "acidos",
    descripcion: "Línea completa de colorantes acidos.",
    imagenes: [acidosImage],
    fichaTecnica: null,
    esTablaColores: true,
    colores: [
      { nombre: "AMARILLO VACID CD ACID YELLOW 23", hex: "#fded00" },
      { nombre: "AMARILLO VACID 2RL ACID YELLOW 49 200%", hex: "#f9ea00" },
      { nombre: "AMARILLO VACID HD ACID YELLOW 73", hex: "#fdef16" },
      { nombre: "AMARILLO VACID E2LS ACID YELLOW 219 250%", hex: "#f58501" },
      { nombre: "ROJO VACID 3GP ACID RED 131 150%", hex: "#c40266" }, 
      { nombre: "ROJO VACID ERN ACID RED 114", hex: "#d42335" },
      { nombre: "ROJO VACID RVB ACID RED 151", hex: "#ce142c" },
      { nombre: "ROJO VACID EG4L ACID RED 337 225%", hex: "#cd284a" },
      { nombre: "ROJO VACID EG4L CONC. ACID RED 337 450%", hex: "#c91f3a" },
      { nombre: "ROJO VACID V6N ACID RED 299 200%", hex: "#731c38" }, 
      { nombre: "ROJO VACID FH ACID RED 57", hex: "#ba1e56" },
      { nombre: "ROJO VACID FB ACID RED 52", hex: "#fc3999" },
      { nombre: "ROJO VACID FB ACID RED 52 400%", hex: "#fc187a" },
      { nombre: "NARANJA VACID H ACID ORANGE 7 100%", hex: "#fc7a00" },
      { nombre: "TURQUESA VACID BGF ACID BLUE 185 100%", hex: "#008cc7" },
      { nombre: "TRUQUESA VACID AG ACID BLUE 9", hex: "#3d5ec0" }, 
      { nombre: "AZUL VACID CG ACID BLUE62 200%", hex: "#4d2ec0" },
      { nombre: "AZULBTE VACID R ACID BLUE 260", hex: "#4245a9" },
      { nombre: "AZULBTE VACID CONC. ACID BLUE 260", hex: "#2c218b" },
      { nombre: "AZUL VACID EGLS ACID BLUE 324", hex: "#04337e" },
      { nombre: "AZUL VACID EGLS CONC. ACID BLUE 324 200%", hex: "#03256e" },  
      { nombre: "VIOLETA VACID BL", hex: "#8a179a" },
      { nombre: "MARINO VACID V4FS ACID BLUE 113", hex: "#041239" },
      { nombre: "MARINO VACID 2SRL ACID BLUE 193", hex: "#14122b" },
    ],
    colorPrincipal: "#d35400" // Ajustado un color naranja/rojizo
  },
  {
    id: "colorantes-directos",
    titulo: "COLORANTES DIRECTOS",
    tipo: "directos",
    descripcion: "Línea completa de colorantes directos.",
    imagenes: [directosImage],
    fichaTecnica: null,
    esTablaColores: true,
    colores: [
      { nombre: "AMARILLO VACDIR EE DIRECT YELLOW 44", hex: "#fcea0a" },
      { nombre: "AMARILLO VACDIR BEC DIRECT YELLOW 142", hex: "#fdf218" },
      { nombre: "AMARILLO VACDIR FA DIRECT YELLOW 5O", hex: "#fceb22" },
      { nombre: "AMARILLO VACDIR IG DIRECT YELLOW 86", hex: "#fbd402" },
      { nombre: "NARANJA VACDIR CG DIREC ORANGE 26 150%", hex: "#fa722a" },
      { nombre: "NARANJA VACDIR DE DIREC ORANGE 34", hex: "#fb9e0a" },
      { nombre: "NARANJA VACDIR DJ DIREC ORANGE 39", hex: "#f79808" },
      { nombre: "ROJO VACDIR CCI DIRECT RED 227", hex: "#eb559c" },
      { nombre: "ROJO VACDIR CD DIRECT RED 23", hex: "#e1444b" },
      { nombre: "ROJO VACDIR CI DIRECT RED 28", hex: "#cf2d39" },
      { nombre: "ROJO VACDIR DB DIRECT RED 31 150%", hex: "#bc1b53" },
      { nombre: "ROJO VACDIR IB DIRECT RED 81 100%", hex: "#c1264a" },
      { nombre: "ROJO VACDIR CED DIRECT RED 243", hex: "#c63060" },
      { nombre: "VIOLETA VACDIR FB DIRECT VIOLET 51", hex: "#74317e" },
      { nombre: "VIOLETA VACDIR J DIRECT VIOLET 9 180%", hex: "#4b1f50" },
      { nombre: "AZUL VACDIR CAA DIRECT BLUE 200 200%", hex: "#1d3f6a" },

      { nombre: "AZUL VACDIR C DIRECT BLUE 2 ", hex: "#3a5075" }, 
      { nombre: "AZUL VACDIR CAB DIRECT BLUE 201 200%", hex: "#314376" },
      { nombre: "AZUL VACDIR BFB DIRECT BLUE 151", hex: "#282a56" },
      { nombre: "AZUL VACDIR BF DIRECT BLUE 15", hex: "#123a6a" },

      { nombre: "AZUL VACDIR HB DIRECT BLUE 71", hex: "#183254" },
      { nombre: "AZUL VACDIR BAI DIRECT BLUE 108", hex: "#608ccb" },
      { nombre: "AZUL VACDIR IG DIRECT BLUE 86", hex: "#00c1e0" },
      { nombre: "VERDE VACDIR B DIRECT GREEN 1", hex: "#354645" },
      { nombre: "CAFE VACDIR C DIRECT BROWN 2", hex: "#694437" },
      { nombre: "CAFE VACDIR JF DIRECT BROWN 95", hex: "#a16f47" },
      { nombre: "NEGRO VACDIR CC DIRECT BLACK 1600%", hex: "#272d32" },
      { nombre: "NEGRO VACDIR CC DIRECT BLACK 1200%", hex: "#253334" },
      { nombre: "NEGRO VACDIR DI DIRECT BLACK 38", hex: "#1e1f23" },
    ],
    colorPrincipal: "#d6ca1cff"
  }
];

export default products;
