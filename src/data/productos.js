// Archivo de datos de productos para la tienda Polyvac
// Estructura actualizada para integrar con las taxonomías de estampado
// NOTA: Este archivo contiene productos pendientes de clasificación o categorías generales.

// ============================================
// IMPORTACIÓN DE IMÁGENES
// ============================================

import polytransferImage from '../assets/productos/polytransfer.png';
import gamaMallasImage from '../assets/productos/mallas.png';
import pigmentosEnPolvoImage from '../assets/productos/pigmentos-en-polvo.png';

// ============================================
// DATOS DE PRODUCTOS
// ============================================

export default [
  {
    id: "polytransfer",
    titulo: "POLYTRANSFER",
    categoria: "estampado",
    subcategorias: [3], // "Materias primas y auxiliares" (porque es un colorante concentrado)
    taxonomias: [12, 9], // "Colorantes", "Tintas de sublimación"
    descripcion: "Gama de colorantes líquidos concentrados para sublimación, desarrollados para integrarse fácilmente a pastas de sublimación tanto en base agua 'SUBLIVAC', como base solvente 'SUBLISOL'.",
    imagenes: [polytransferImage],
    fichaTecnica: "/fichas/estampado/tintas-sublimacion/POLYTRANSFER HT.pdf",
    colores: [
      { nombre: "Amarillo POLYTRANSFER R4", hex: "#ffff00" },
      { nombre: "Naranja POLYTRANSFER 2R", hex: "#ffcd00" },
      { nombre: "Rojo POLYTRANSFER FB", hex: "#ff6600" },
      { nombre: "Rojo Escarlata POLYTRANSFER B", hex: "#fe2112 " },
      { nombre: "Azul POLYTRANSFER B2R", hex: " #0000ff" },
      { nombre: "Azul POLYTRANSFER 3R", hex: " #0000f9" },
      { nombre: "Turquesa POLYTRANSFER BN", hex: " #003066" },
      { nombre: "Violeta POLYTRANSFER GD", hex: " #800080" },
      { nombre: "Verde POLYTRANSFER STD", hex: "#008100 " },
      { nombre: "Negro POLYTRANSFER MBG", hex: " #000000" },
      { nombre: "Blanco POLYTRANSFER", hex: "#ffffff " },
      { nombre: "Amarillo Limón POLYTRANSFER Fluorescente", hex: "#fefe65 " },
      { nombre: "Naranja POLYTRANSFER Fluorescente", hex: "#fe9900 " },
      { nombre: "Rosa POLYTRANSFER Fluorescente", hex: "#fe99cc " }, 
      { nombre: "Verde POLYTRANSFER Fluorescente", hex: " #00fe00" },
    ],
    colorPrincipal: "#1abc9c" // Color para el polígono
  },
  {
    id: "pigmentos-en-polvo",
    titulo: "PIGMENTOS EN POLVO",
    categoria: "estampado",
    subcategorias: [3], // "Materias primas y auxiliares"
    taxonomias: [11], // "Pigmentos"
    descripcion: "Gama completa de pigmentos en polvo para diversas aplicaciones.",
    imagenes: [pigmentosEnPolvoImage],
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
