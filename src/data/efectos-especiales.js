// Archivo de datos específico para la categoría de Efectos Especiales

// --- Colores Flock ---
import coloresFlockImage from '../assets/productos/colores-flock.png';
import flockBlack from '../assets/productos/colores-flock/black.png';
import flockGray from '../assets/productos/colores-flock/gray.png';
import flockNavy from '../assets/productos/colores-flock/navy.png';
import flockWhite from '../assets/productos/colores-flock/white.png';

// --- Colores Glitters ---
import coloresGlittersImage from '../assets/productos/colores-glitters.png';
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
import coloresMicasImage from '../assets/productos/colores-micas.png';
import micaPearl1000 from '../assets/productos/colores-micas/magna-pearl-1000.png';
import micaPlatino205 from '../assets/productos/colores-micas/magna-pearl-205-platino.png';
import micaInterferenceAzul225 from '../assets/productos/colores-micas/magna-pearl-225-interference-azul.png';
import micaVino504 from '../assets/productos/colores-micas/magna-pearl-504-vino.png';

const products = [
    {
      id: "colores-flock",
      titulo: "COLORES FLOCK",
      categoria: "estampado",
      subcategorias: [1], // "Materias primas y auxiliares"
      taxonomias: [5], // "Efectos especiales" (Note: Was "Colorantes" [5] in productos.js but should be "Efectos especiales" [5] based on id? Wait, taxonomy 5 IS "Efectos especiales" in [id].astro map, but comment in productos.js said "Colorantes". Let's check taxonomy map below)
      // taxonomy map in [id].astro: 5: "Efectos especiales", 12: "Colorantes". 
      // So products.js had tax:5 but comment said "Colorantes", which was likely a copy paste error in comments. It IS Efectos Especiales.
      descripcion: "Gama de Colores Flock",
      imagenes: [coloresFlockImage],
      fichaTecnica: null, 
      esTablaColores: true, 
      porcentajes: null, 
      colores: [
        { nombre: "Flock Gray", imagen: flockGray },
        { nombre: "Flock Black 02", imagen: flockBlack },
        { nombre: "Flock Navy 6143", imagen: flockNavy },
        { nombre: "Flock White 01", imagen: flockWhite },
      ],
      colorPrincipal: "#d4c56eff" 
    },
    {
      id: "colores-micas",
      titulo: "COLORES MICAS",
      categoria: "estampado",
      subcategorias: [1], 
      taxonomias: [5], // "Efectos especiales"
      descripcion: "Gama de Colores Micas",
      imagenes: [coloresMicasImage],
      fichaTecnica: null, 
      esTablaColores: true, 
      porcentajes: null, 
      colores: [
        { nombre: "Magna Pearl 1000", imagen: micaPearl1000 },
        { nombre: "Magna Pearl 205 Platino", imagen: micaPlatino205 },
        { nombre: "Magna Pearl 225 Interference Azul", imagen: micaInterferenceAzul225 },
        { nombre: "Magna Pearl 504 Vino", imagen: micaVino504 },
      ],
      colorPrincipal: "#2bd76aff" 
    },
    {
        id: "colores-glitters",
        titulo: "COLORES GLITTERS",
        categoria: "estampado",
        subcategorias: [1], 
        taxonomias: [5], // "Efectos especiales"
        descripcion: "Gama de Colores Glitters",
        imagenes: [coloresGlittersImage],
        fichaTecnica: null, 
        esTablaColores: true, 
        porcentajes: null, 
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
        colorPrincipal: "#d64b1dff" 
      }
];

export default products;
