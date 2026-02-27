// Archivo de datos específico para la categoría de Estampado

import cubetaImage from '../assets/cubeta.png';
import polytransferImage from '../assets/productos/polytransfer.png';


//tintas plastisol 
import plastivacImage from '../assets/productos/estampado/tintasplastisol/plastivac.png';
import plastisolImage from '../assets/productos/estampado/tintasplastisol/plastisol.png';
import ahuladaImage from '../assets/productos/estampado/tintasplastisol/ahulada.png';
import multitoneImage from '../assets/productos/estampado/tintasplastisol/multitone.png';
import polyvacHCImage from '../assets/productos/estampado/tintasplastisol/polyvac-hc.png';
import inflablePuffImage from '../assets/productos/estampado/tintasplastisol/inflable-puff.png';

//tintas base agua
import aquaflexImage from '../assets/productos/estampado/tintasbaseagua/aquaflex.png';
import aquaflexAOImage from '../assets/productos/estampado/tintasbaseagua/aquaflex-ao.png';
import astrolakE5HBImage from '../assets/productos/estampado/tintasbaseagua/astrolak-e5hb.png';
import astrolakEcoImage from '../assets/productos/estampado/tintasbaseagua/astrolak-eco.png';
import dischargeImage from '../assets/productos/estampado/tintasbaseagua/discharge.png';
import metalicosImage from '../assets/productos/estampado/tintasbaseagua/metalicos.png';
import baseAgua1Image from '../assets/productos/estampado/tintasbaseagua/base_agua1.jpg';
import baseAgua2Image from '../assets/productos/estampado/tintasbaseagua/base-agua2.jpeg';
import baseAgua3Image from '../assets/productos/estampado/tintasbaseagua/base-agua3.jpeg';

// tintas sublimacion
import sublivacImage from '../assets/productos/estampado/tintassublimacion/sublivac.png';
import sublisolImage from '../assets/productos/estampado/tintassublimacion/sublisol.png';
import vactransImage from '../assets/productos/estampado/tintassublimacion/vactrans.png';


//fotoemulsiones
import txdischargeImage from '../assets/productos/estampado/fotoemulsiones/txdischarge.png';
import emulsionhdImage from '../assets/productos/estampado/fotoemulsiones/emulsion-hd.png';
import prochemgtxredImage from '../assets/productos/estampado/fotoemulsiones/prochem-gtx-red.png';




//pigmentos en dispersion
import polyprintImage from '../assets/productos/estampado/pigmentosdispersion/polyprint.png';
import vacprintImage from '../assets/productos/estampado/pigmentosdispersion/vacprint.png';


const products = [
    // TINTAS TIPO PLASTISOL PARA SERIGRAFIA - subcategoria: 'tintas-plastisol'
    {
        id: "plastivac",
        titulo: "LÍNEA PLASTIVAC VS",
        subcategoria: "tintas-plastisol",
        descripcion: "Tintas tipo plastisol formuladas libres de metales pesados y ftalatos, fabricadas con materias primas de importación, utilizadas para realizar estampaciones en tela de algodón 100% en terminado ahulado , con acabado semi-mate.",
        imagenes: [plastivacImage],
        fichaTecnica: "/fichas/estampado/tintas-plastisol/PLASTIVAC VS.pdf",
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
          { nombre: "Amarillo limón (FLUORESCENTE)", hex: "#fefe65 " },
          { nombre: "Naranja (FLUORESCENTE)", hex: "#fe9900 " },
          { nombre: "Magenta (FLUORESCENTE)", hex: "#fe00fe " },
          { nombre: "Rosa (FLUORESCENTE)", hex: "#fe99cc " }, 
          { nombre: "Rojo (FLUORESCENTE)", hex: " #fe0000" },
          { nombre: "Azul (FLUORESCENTE)", hex: " #009bf9" },
          { nombre: "Púrpura (FLUORESCENTE)", hex: "#d14ff8 " },
          { nombre: "Verde (FLUORESCENTE)", hex: " #00fe00" },
        ],
        colorPrincipal: "#b659b3ff"
    },
    {
        id: "plastisol",
        titulo: "LÍNEA-PLASTISOL VM",
        subcategoria: "tintas-plastisol",
        descripcion: "Tintas tipo plastisol formuladas para fondos claros y campañas políticas , utilizadas para realizar estampados en tela de algodón 100 % de terminado ahulado, con acabado semi-mate.",
        imagenes: [plastisolImage],
        fichaTecnica: "/fichas/estampado/tintas-plastisol/PLASTISOL VM.pdf",
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
          { nombre: "Amarillo limón (FLUORESCENTE)", hex: "#fefe65 " },
          { nombre: "Naranja (FLUORESCENTE)", hex: "#fe9900 " },
          { nombre: "Magenta (FLUORESCENTE)", hex: "#fe00fe " },
          { nombre: "Rosa (FLUORESCENTE)", hex: "#fe99cc " }, 
          { nombre: "Rojo (FLUORESCENTE)", hex: " #fe0000" },
          { nombre: "Azul (FLUORESCENTE)", hex: " #009bf9" },
          { nombre: "Púrpura (FLUORESCENTE)", hex: "#d14ff8 " },
          { nombre: "Verde (FLUORESCENTE)", hex: " #00fe00" },
        ],
        colorPrincipal: "#68d823ff"
    },
    {
        id: "ahulada",
        titulo: "LÍNEA AHULADO AO",
        subcategoria: "tintas-plastisol",
        descripcion: "Tintas tipo plastisol formuladas libres de metales pesados y fabricadas con materias primas de importación, con un alto contenido de sólidos y buen poder cubriente, utilizadas para realizar estampados en fondos obscuros de algodón 100%.",
        imagenes: [ahuladaImage],
        fichaTecnica: "/fichas/estampado/tintas-plastisol/AHULADO AO.pdf",
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
          { nombre: "Amarillo limón (FLUORESCENTE)", hex: "#fefe65 " },
          { nombre: "Naranja (FLUORESCENTE)", hex: "#fe9900 " },
          { nombre: "Magenta (FLUORESCENTE)", hex: "#fe00fe " },
          { nombre: "Rosa (FLUORESCENTE)", hex: "#fe99cc " }, 
          { nombre: "Rojo (FLUORESCENTE)", hex: " #fe0000" },
          { nombre: "Azul (FLUORESCENTE)", hex: " #009bf9" },
          { nombre: "Púrpura (FLUORESCENTE)", hex: "#d14ff8 " },
          { nombre: "Verde (FLUORESCENTE)", hex: " #00fe00" },
        ],
        colorPrincipal: "#f39c12"
    },
    {
        id: "multitone",
        titulo: "LÍNEA MULTITONE L.F.",
        subcategoria: "tintas-plastisol",
        descripcion: "Tintas tipo plastisol formuladas libres de metales pesados y ftalatos, diseñadas para elaborar tonos de la gama Pantone, utilizadas para realizar estampaciones en tela de algodón 100% en terminado ahulado, con acabado semi-mate.",
        imagenes: [multitoneImage],
        fichaTecnica: "/fichas/estampado/tintas-plastisol/MULTITONE LF.pdf",
        colores: [
          { nombre: "Amarillo Multitone L.F.", hex: "#ffff00" },
          { nombre: "Rubina Multitone L.F.", hex: "#e5007d" },
          { nombre: "Escarlata Multitone L.F.", hex: "#ff0000" },
          { nombre: "Violeta Multitone L.F.", hex: "#800080" },
          { nombre: "Azul Turquesa Multitone L.F.", hex: "#00b7eb" },
          { nombre: "Azul #2 Multitone L.F.", hex: "#0000ff" },
          { nombre: "Azul Marino Multitone L.F.", hex: "#000080" },
          { nombre: "Azul Opaco Multitone L.F.", hex: "#003366" },
          { nombre: "Verde Opaco Multitone L.F.", hex: "#556b2f" },
          { nombre: "Verde Multitone L.F.", hex: "#008000" },
        ],
        colorPrincipal: "#e5007d"
    },
    {
        id: "polyvac-hc",
        titulo: "LÍNEA POLYVAC HC",
        subcategoria: "tintas-plastisol",
        descripcion: "Gama de pigmentos resinados de alta concentración formulados libres de metales pesados y orto-ftalatos; desarrollados para preparar igualaciones de una amplia variedad de tonos.",
        imagenes: [polyvacHCImage],
        fichaTecnica: "/fichas/estampado/tintas-plastisol/POLYVAC HC.pdf",
        colores: [
          { nombre: "Amarillo POLYVAC HC", hex: "#ffff00" },
          { nombre: "Naranja POLYVAC HC", hex: "#ff6600" },
          { nombre: "Rojo POLYVAC HC", hex: "#ff0000" },
          { nombre: "Escarlata POLYVAC HC", hex: "#c70120" },
          { nombre: "Marrón POLYVAC HC", hex: "#8b4513" },
          { nombre: "Azul POLYVAC HC", hex: "#0000ff" },
          { nombre: "Marino POLYVAC HC", hex: "#000080" },
          { nombre: "Magenta POLYVAC HC", hex: "#ff00ff" },
          { nombre: "Violeta POLYVAC HC", hex: "#800080" },
          { nombre: "Verde POLYVAC HC", hex: "#008000" },
          { nombre: "Negro POLYVAC HC", hex: "#000000" },
          { nombre: "Blanco POLYVAC HC", hex: "#ffffff" },
          { nombre: "Amarillo Limón (FLUORESCENTE) POLYVAC HC", hex: "#fefe65" },
          { nombre: "Amarillo Rojizo (FLUORESCENTE) POLYVAC HC", hex: "#ffcc00" },
          { nombre: "Naranja (FLUORESCENTE) POLYVAC HC", hex: "#fe9900" },
          { nombre: "Rojo (FLUORESCENTE) POLYVAC HC", hex: "#fe0000" },
          { nombre: "Rosa (FLUORESCENTE) POLYVAC HC", hex: "#fe99cc" },
          { nombre: "Magenta (FLUORESCENTE) POLYVAC HC", hex: "#fe00fe" },
          { nombre: "Púrpura (FLUORESCENTE) POLYVAC HC", hex: "#d14ff8" },
          { nombre: "Azul (FLUORESCENTE) POLYVAC HC", hex: "#009bf9" },
          { nombre: "Verde (FLUORESCENTE) POLYVAC HC", hex: "#00fe00" },
        ],
        colorPrincipal: "#e67e22"
    },
    {
        id: "puff",
        titulo: "LÍNEA INFLABLE PUFF",
        subcategoria: "tintas-plastisol",
        descripcion: "Tintas tipo plastisol diseñadas para dar un acabado en realce, formuladas libres de metales pesados y ftalatos restringidos, para el estampado serigráfico. No necesitan secarse entre cada color. Pueden imprimirse sobre cualquier tipo de tela como algodón, lana, acetato, rayón, mezclas de algodón-poliéster y algunas otras siempre y cuando resistan la temperatura de curado. Requieren calor para obtener el efecto inflable. Buena opacidad sobre fondos oscuros.",
        imagenes: [inflablePuffImage],
        fichaTecnica: "/fichas/estampado/tintas-plastisol/INFLABLE PUFF.pdf",
        colores: [
          { nombre: "Amarillo Limón INFLABLE PUFF", hex: "#ffcd00" },
          { nombre: "Amarillo Cromo INFLABLE PUFF", hex: "#ffff00" },
          { nombre: "Mandarina INFLABLE PUFF", hex: "#ff6600" },
          { nombre: "Rojo Fuego Rojo INFLABLE PUFF", hex: "#fc0000" },
          { nombre: "Escarlata INFLABLE PUFF", hex: "#c70120" },
          { nombre: "Azul Ultramar INFLABLE PUFF", hex: "#0000f2" },
          { nombre: "Marino INFLABLE PUFF", hex: "#030080" },
          { nombre: "Turquesa INFLABLE PUFF", hex: "#00355a" },
          { nombre: "Violeta INFLABLE PUFF", hex: "#7a017f" },
          { nombre: "Verde Jade INFLABLE PUFF", hex: "#007f00" },
          { nombre: "Verde Esmeralda INFLABLE PUFF", hex: "#008100" },
          { nombre: "Negro INFLABLE PUFF", hex: "#000000" },
          { nombre: "Blanco INFLABLE PUFF", hex: "#ffffff" },
          { nombre: "Amarillo Limón (FLUORESCENTE) INFLABLE PUFF", hex: "#fefe65" },
          { nombre: "Naranja (FLUORESCENTE) INFLABLE PUFF", hex: "#fe9900" },
          { nombre: "Magenta (FLUORESCENTE) INFLABLE PUFF", hex: "#fe00fe" },
          { nombre: "Rosa (FLUORESCENTE) INFLABLE PUFF", hex: "#fe99cc" },
          { nombre: "Rojo (FLUORESCENTE) INFLABLE PUFF", hex: "#fe0000" },
          { nombre: "Azul (FLUORESCENTE) INFLABLE PUFF", hex: "#009bf9" },
          { nombre: "Púrpura (FLUORESCENTE) INFLABLE PUFF", hex: "#d14ff8" },
          { nombre: "Verde (FLUORESCENTE) INFLABLE PUFF", hex: "#00fe00" },
        ],
        colorPrincipal: "#ff6600"
    },

    // TINTAS TEXTILES BASE AGUA PARA SERIGRAFIA - subcategoria: 'tintas-base-agua'
    {
        id: "aquaflex",
        titulo: "LÍNEA AQUAFLEX (HT)",
        subcategoria: "tintas-base-agua",
        descripcion: "Tinta base agua formuladas para la estampación textil directa en Algodón 100% , totalmente libres de gas Nafta, metales pesados , PVC y Orto- Ftalatos; lo cual les da una excelente estabilidad en el esténcil , haciendo posible la estampación en el pulpo manual y automático.",
        imagenes: [aquaflexImage],
        fichaTecnica: "/fichas/estampado/base-agua/AQUAFLEX.pdf",
        colores: [
          { nombre: "Amarillo AQUAFLEX V-196", hex: "#ffff00" },
          { nombre: "Naranja AQUAFLEX V-191", hex: "#ff6600" },
          { nombre: "Rosa Brillante AQUAFLEX", hex: "#ff2213" },
          { nombre: "Rojo escarlata AQUAFLEX", hex: "#ff0000" },
          { nombre: "Rojo Carmín AQUAFLEX", hex: "#c90019 " },
          { nombre: "Azul AQUAFLEX V-197", hex: " #0000fd" },
          { nombre: "Marino AQUAFLEX V-198", hex: " #000081" },
          { nombre: "Turquesa AQUAFLEX V-206", hex: "#003660 " },
          { nombre: "Violeta AQUAFLEX", hex: " #810081" },
          { nombre: "Verde AQUAFLEX V-192", hex: " #008100" },
          { nombre: "Negro AQUAFLEX V-190", hex: "#000000 " },
          { nombre: "Café AQUAFLEX", hex: " #622c00" },
          { nombre: "Blanco AQUAFLEX", hex: "#ffffff " },
          { nombre: "Amarillo limón (FLUORESCENTE) AQUAFLEX Fluorescente", hex: "#ffff66 " },
          { nombre: "Naranja (FLUORESCENTE) AQUAFLEX Fluorescente", hex: "#ff9a00 " },
          { nombre: "Rosa (FLUORESCENTE) AQUAFLEX Fluorescente V-185", hex: "#ff9acd " },
          { nombre: "Magenta (FLUORESCENTE) AQUAFLEX Fluorescente V-185", hex: "#ff00ff " }, 
          { nombre: "Azul (FLUORESCENTE) AQUAFLEX Fluorescente V-183", hex: " #009cf9" },
          { nombre: "Púrpura (FLUORESCENTE) AQUAFLEX Fluorescente V-184", hex: " #d250f8" },
          { nombre: "Verde (FLUORESCENTE) AQUAFLEX Fluorescente V-188", hex: "#00ff00 " },
          { nombre: "Rojo (FLUORESCENTE) AQUAFLEX Fluorescente V-188", hex: " #ff0000" },
        ],
        colorPrincipal: "#10a3e8ff"
    },
    { id: "aquaflex-ao", titulo: "LÍNEA AQUAFLEX AO", subcategoria: "tintas-base-agua", descripcion: "por agregar", imagenes: [aquaflexAOImage], placeholder: true },
    { id: "astrolak", titulo: "LÍNEA ASTROLAK E-5HB", subcategoria: "tintas-base-agua", descripcion: "por agregar", imagenes: [astrolakE5HBImage], placeholder: true },
    {
        id: "astrolak-eco",
        titulo: "LÍNEA ASTROLAK ECO",
        subcategoria: "tintas-base-agua",
        descripcion: "Tintas base agua formuladas para estampar sobre tela de polipropileno, tienen buen poder cubriente y está diseñada para fondos obscuros totalmente libres de gas Nafta, metales pesados, PVC, Ftalatos y APEO'S, tienen una buena estabilidad en el esténcil, haciendo posible la estampación en máquina plana y rotativa.",
        imagenes: [astrolakEcoImage],
        fichaTecnica: "/fichas/estampado/base-agua/ASTROLAK ECO.pdf",
        colores: [
          { nombre: "Amarillo ASTROLAK ECO", hex: "#ffff00" },
          { nombre: "Naranja ASTROLAK ECO", hex: "#ff6600" },
          { nombre: "Rosa Brillante ASTROLAK ECO", hex: "#ff2213" },
          { nombre: "Rojo Escarlata ASTROLAK ECO", hex: "#ff0000" },
          { nombre: "Rojo Carmín ASTROLAK ECO", hex: "#c90019" },
          { nombre: "Azul ASTROLAK ECO", hex: "#0000fd" },
          { nombre: "Marino ASTROLAK ECO", hex: "#000081" },
          { nombre: "Turquesa ASTROLAK ECO", hex: "#003660" },
          { nombre: "Violeta ASTROLAK ECO", hex: "#810081" },
          { nombre: "Verde ASTROLAK ECO", hex: "#008100" },
          { nombre: "Negro ASTROLAK ECO", hex: "#000000" },
          { nombre: "Café ASTROLAK ECO", hex: "#622c00" },
          { nombre: "Amarillo Limón (FLUORESCENTE) ASTROLAK ECO", hex: "#ffff66" },
          { nombre: "Naranja (FLUORESCENTE) ASTROLAK ECO", hex: "#ff9a00" },
          { nombre: "Rosa (FLUORESCENTE) ASTROLAK ECO", hex: "#ff9acd" },
          { nombre: "Magenta (FLUORESCENTE) ASTROLAK ECO", hex: "#ff00ff" },
          { nombre: "Azul (FLUORESCENTE) ASTROLAK ECO", hex: "#009cf9" },
          { nombre: "Púrpura (FLUORESCENTE) ASTROLAK ECO", hex: "#d250f8" },
          { nombre: "Verde (FLUORESCENTE) ASTROLAK ECO", hex: "#00ff00" },
          { nombre: "Rojo (FLUORESCENTE) ASTROLAK ECO", hex: "#ff0000" },
        ],
        colorPrincipal: "#2ecc71"
    },
    { id: "discharge", titulo: "LÍNEA DISCHARGE", subcategoria: "tintas-base-agua", descripcion: "por agregar", imagenes: [dischargeImage], placeholder: true },
    { id: "metalicos", titulo: "LÍNEA DE EFECTOS METÁLICOS", subcategoria: "tintas-base-agua", descripcion: "por agregar", imagenes: [metalicosImage], placeholder: true },

    // PRODUCTOS BASE AGUA CON FICHA TÉCNICA - subcategoria: 'tintas-base-agua'
    {
        id: "astroblanc-e-bt",
        titulo: "ASTROBLANC E-BT",
        subcategoria: "tintas-base-agua",
        descripcion: "Blanco cubriente de baja temperatura para estampación textil base agua. Ideal para fondos oscuros con excelente opacidad y tacto suave.",
        imagenes: [baseAgua2Image],
        fichaTecnica: "/fichas/estampado/base-agua/ASTROBLANC E-BT.pdf",
        colorPrincipal: "#2563EB"
    },
    {
        id: "astroblanc-e-crack",
        titulo: "ASTROBLANC E-CRACK",
        subcategoria: "tintas-base-agua",
        descripcion: "Blanco cubriente con efecto craquelado para estampación textil. Permite obtener un acabado decorativo con aspecto agrietado sobre algodón y sus mezclas.",
        imagenes: [baseAgua1Image],
        fichaTecnica: "/fichas/estampado/base-agua/ASTROBLANC E-CRACK.pdf",
        colorPrincipal: "#9333EA"
    },
    {
        id: "astroblanc-e-ly",
        titulo: "ASTROBLANC E-LY",
        subcategoria: "tintas-base-agua",
        descripcion: "Blanco cubriente tipo lycra para estampación textil base agua sobre tejidos elásticos. Ofrece alta elasticidad y resistencia al lavado.",
        imagenes: [baseAgua3Image],
        fichaTecnica: "/fichas/estampado/base-agua/ASTROBLANC E-LY.pdf",
        colorPrincipal: "#0891B2"
    },
    {
        id: "astroblanc-e-ns-new",
        titulo: "ASTROBLANC E-NS NEW",
        subcategoria: "tintas-base-agua",
        descripcion: "Blanco cubriente de alta opacidad para estampación no sublimable base agua. Evita la migración de colorantes dispersos sobre fondos oscuros de poliéster.",
        imagenes: [baseAgua1Image],
        fichaTecnica: "/fichas/estampado/base-agua/ASTROBLANC E-NS NEW.pdf",
        colorPrincipal: "#DC2626"
    },
    {
        id: "astroblanc-e-rn",
        titulo: "ASTROBLANC E-RN",
        subcategoria: "tintas-base-agua",
        descripcion: "Blanco cubriente de rápida polimerización para estampación textil base agua. Diseñado para alta producción con excelente poder cubriente.",
        imagenes: [baseAgua2Image],
        fichaTecnica: "/fichas/estampado/base-agua/ASTROBLANC E-RN.pdf",
        colorPrincipal: "#16A34A"
    },
    {
        id: "astrolak-e-961-eco",
        titulo: "ASTROLAK E-961 ECO",
        subcategoria: "tintas-base-agua",
        descripcion: "Laca cubriente con muy buen tacto para estampación de pieza con excelente poder de cobertura sobre fondos tintados. Apropiada para efectuar 'reserva' con colorantes reactivos y ácidos. Apto para certificación OEKO-TEX en todas sus clases (I a IV).",
        imagenes: [baseAgua3Image],
        fichaTecnica: "/fichas/estampado/base-agua/ASTROLAK E-961 ECO.pdf",
        colorPrincipal: "#D97706"
    },
    {
        id: "astrolak-e-crack",
        titulo: "ASTROLAK E-CRACK",
        subcategoria: "tintas-base-agua",
        descripcion: "Laca transparente con efecto craquelado para estampación textil base agua. Genera un acabado decorativo con aspecto agrietado sobre la superficie del tejido.",
        imagenes: [baseAgua2Image],
        fichaTecnica: "/fichas/estampado/base-agua/ASTROLAK E-CRACK.pdf",
        colorPrincipal: "#4F46E5"
    },
    {
        id: "astrolak-e-fb",
        titulo: "ASTROLAK E-FB",
        subcategoria: "tintas-base-agua",
        descripcion: "Laca base agua para estampación textil con acabado de alta brillantez. Proporciona un efecto luminoso y de alto brillo sobre algodón y mezclas.",
        imagenes: [baseAgua1Image],
        fichaTecnica: "/fichas/estampado/base-agua/ASTROLAK E-FB.pdf",
        colorPrincipal: "#DB2777"
    },
    {
        id: "astrolak-e-foam-170",
        titulo: "ASTROLAK E-FOAM 170",
        subcategoria: "tintas-base-agua",
        descripcion: "Compound para estampación con gran efecto tridimensional para conseguir efectos hinchados (símil bordado) y resistente al vaporizado.",
        imagenes: [baseAgua3Image],
        fichaTecnica: "/fichas/estampado/base-agua/ASTROLAK E-FOAM 170.pdf",
        colorPrincipal: "#2563EB"
    },
    {
        id: "astrolak-e-ly",
        titulo: "ASTROLAK E-LY",
        subcategoria: "tintas-base-agua",
        descripcion: "Laca transparente tipo lycra para estampación textil base agua sobre tejidos elásticos. Alta elasticidad, resistencia al lavado y excelente adherencia.",
        imagenes: [baseAgua1Image],
        fichaTecnica: "/fichas/estampado/base-agua/ASTROLAK E-LY.pdf",
        colorPrincipal: "#DC2626"
    },
    {
        id: "astrolak-e-ns-new",
        titulo: "ASTROLAK E-NS NEW",
        subcategoria: "tintas-base-agua",
        descripcion: "Laca transparente no sublimable para estampación textil base agua. Evita la migración de colorantes dispersos durante el termofijado sobre poliéster y sus mezclas.",
        imagenes: [baseAgua2Image],
        fichaTecnica: "/fichas/estampado/base-agua/ASTROLAK E-NS NEW.pdf",
        colorPrincipal: "#16A34A"
    },
    {
        id: "astrolak-e-pap-130-eco",
        titulo: "ASTROLAK E-PAP 130 ECO",
        subcategoria: "tintas-base-agua",
        descripcion: "Base termoadhesiva para transfer de papeles metálicos sobre artículos de algodón y sus mezclas. Apto para certificación OEKO-TEX en todas sus clases (I a IV). Sólido al lavado en seco.",
        imagenes: [baseAgua3Image],
        fichaTecnica: "/fichas/estampado/base-agua/ASTROLAK E-PAP 130 ECO.pdf",
        colorPrincipal: "#9333EA"
    },
    {
        id: "astrolak-e-peach-ff",
        titulo: "ASTROLAK E-PEACH FF",
        subcategoria: "tintas-base-agua",
        descripcion: "Compound listo para estampar destinado a conseguir efectos con tacto 'piel de melocotón'. Exento de APEO's, formaldehído y arilaminas.",
        imagenes: [baseAgua2Image],
        fichaTecnica: "/fichas/estampado/base-agua/ASTROLAK E-PEACH FF.pdf",
        colorPrincipal: "#D97706"
    },
    {
        id: "astrolak-e-tamp",
        titulo: "ASTROLAK E-TAMP",
        subcategoria: "tintas-base-agua",
        descripcion: "Producto base agua y ecológico que se usa como capa de imprimación para la retención del colorante que migra proveniente del tejido provocado por la sublimación o termomigración durante la etapa del fijado o posterior a esta.",
        imagenes: [baseAgua1Image],
        fichaTecnica: "/fichas/estampado/base-agua/ASTROLAK E-TAMP.pdf",
        colorPrincipal: "#0891B2"
    },
    {
        id: "vacprint-discharge-plus",
        titulo: "VACPRINT DISCHARGE PLUS",
        subcategoria: "tintas-base-agua",
        descripcion: "Pasta lista para estampar sobre fondos tintados con colorantes corroíbles y conseguir el efecto de corrosión por termofijado. Permite corrosión iluminada con pigmentos seleccionados.",
        imagenes: [baseAgua3Image],
        fichaTecnica: "/fichas/estampado/base-agua/VACPRINT DISCHARGE PLUS.pdf",
        colorPrincipal: "#4F46E5"
    },
    {
        id: "vacprint-e-bt",
        titulo: "VACPRINT E-BT",
        subcategoria: "tintas-base-agua",
        descripcion: "Compound base agua de baja temperatura para estampación textil. Ideal para procesos que requieren polimerización a temperaturas reducidas.",
        imagenes: [baseAgua2Image],
        fichaTecnica: "/fichas/estampado/base-agua/VACPRINT E-BT.pdf",
        colorPrincipal: "#DB2777"
    },
    {
        id: "vacprint-e-flock",
        titulo: "VACPRINT E-FLOCK",
        subcategoria: "tintas-base-agua",
        descripcion: "Compound preparado para la estampación y 'flockado' posterior sobre prenda confeccionada y pieza.",
        imagenes: [baseAgua1Image],
        fichaTecnica: "/fichas/estampado/base-agua/VACPRINT E-FLOCK.pdf",
        colorPrincipal: "#2563EB"
    },
    {
        id: "vacprint-e-luxor-new",
        titulo: "VACPRINT E-LUXOR NEW",
        subcategoria: "tintas-base-agua",
        descripcion: "Compound 'ready to use' aplicable en estampación textil o rasqueta para conseguir efectos 'brillantes' (tipo 'charol'). Producto exento de formol.",
        imagenes: [baseAgua3Image],
        fichaTecnica: "/fichas/estampado/base-agua/VACPRINT E-LUXOR NEW.pdf",
        colorPrincipal: "#DC2626"
    },
    {
        id: "vacprint-e-ns-new",
        titulo: "VACPRINT E-NS NEW",
        subcategoria: "tintas-base-agua",
        descripcion: "Compound no sublimable para estampación textil base agua sobre poliéster y sus mezclas. Evita la migración de colorantes dispersos durante el termofijado.",
        imagenes: [baseAgua2Image],
        fichaTecnica: "/fichas/estampado/base-agua/VACPRINT E-NS NEW.pdf",
        colorPrincipal: "#16A34A"
    },
    {
        id: "vacprint-tr-co",
        titulo: "VACPRINT TR-CO",
        subcategoria: "tintas-base-agua",
        descripcion: "Compound para transfer sobre algodón y sus mezclas. Permite la transferencia de diseños estampados en papel a tejidos de fibras celulósicas con excelente solidez.",
        imagenes: [baseAgua1Image],
        fichaTecnica: "/fichas/estampado/base-agua/VACPRINT TR-CO.pdf",
        colorPrincipal: "#9333EA"
    },

    // TINTAS PARA SUBLIMADO POR SERIGRAFIA - subcategoria: 'tintas-sublimacion'
    {
        id: "sublivac",
        titulo: "LÍNEA SUBLIVAC",
        subcategoria: "tintas-sublimacion",
        descripcion: "Tintas de sublimación base agua, diseñadas para impresiones en papel por serigrafía y luego termo-transferir a tela poliéster 100%, logrando un teñido de gran colorido y permitiendo el brillo natural de la tela.",
        imagenes: [sublivacImage],
        fichaTecnica: "/fichas/estampado/tintas-sublimacion/SUBLIVAC.pdf",
        colores: [
          { nombre: "Amarillo SUBLIVAC V1", hex: "#ffff00" },
          { nombre: "Amarillo SUBLIVAC V2", hex: "#ffcd00" },
          { nombre: "Amarillo SUBLIVAC V3", hex: "#ffcd00" },
          { nombre: "Amarillo oro SUBLIVAC V1", hex: "#ffcd00" },
          { nombre: "Naranja SUBLIVAC V4", hex: "#ff0000" },
          { nombre: "Rojo vivo SUBLIVAC V1", hex: "#cb0119" },
          { nombre: "Azul SUBLIVAC V1", hex: " #0000ff" },
          { nombre: "Azul SUBLIVAC V2", hex: " #0000ff" },
          { nombre: "Azul SUBLIVAC V3", hex: " #0000ff" },
          { nombre: "Marino SUBLIVAC V1", hex: " #003066" },
          { nombre: "Marino SUBLIVAC V2", hex: " #003662" },
          { nombre: "Morado SUBLIVAC V2", hex: " #800080" },
          { nombre: "Violeta SUBLIVAC V1", hex: " #800081" },
          { nombre: "Verde SUBLIVAC V1", hex: "#008101 " },
          { nombre: "Verde SUBLIVAC V2", hex: "#008100 " },
          { nombre: "Negro SUBLIVAC V6", hex: " #000000" },
          { nombre: "Blanco SUBLIVAC", hex: "#ffffff " },
          { nombre: "Amarillo Limón SUBLIVAC Fluorescente", hex: "#fefe65 " },
          { nombre: "Naranja SUBLIVAC Fluorescente", hex: "#fe9900 " },
          { nombre: "Rosa SUBLIVAC Fluorescente", hex: "#fe99cc " }, 
          { nombre: "Verde SUBLIVAC Fluorescente", hex: " #00fe00" },
        ],
        colorPrincipal: "#6b35e0ff"
    },
    {
        id: "sublisol",
        titulo: "LÍNEA SUBLISOL",
        subcategoria: "tintas-sublimacion",
        descripcion: "Tintas de sublimación base solvente, diseñadas para impresiones en papel por serigrafía y termo-transferir a tela poliéster 100%, logrando un teñido de gran colorido y permitiendo el brillo natural de la tela.",
        imagenes: [sublisolImage],
        fichaTecnica: "/fichas/estampado/tintas-sublimacion/SUBLISOL.pdf",
        colores: [
          { nombre: "Amarillo SUBLISOL V1", hex: "#ffff00" },
          { nombre: "Amarillo SUBLISOL V2", hex: "#ffcd00" },
          { nombre: "Amarillo SUBLISOL V3", hex: "#ffcd00" },
          { nombre: "Amarillo oro SUBLISOL V1", hex: "#ffcd00" },
          { nombre: "Naranja SUBLISOL V4", hex: "#ff0000" },
          { nombre: "Rojo vivo SUBLISOL V1", hex: "#cb0119" },
          { nombre: "Azul SUBLISOL V1", hex: " #0000ff" },
          { nombre: "Azul SUBLISOL V2", hex: " #0000ff" },
          { nombre: "Azul SUBLISOL V3", hex: " #0000ff" },
          { nombre: "Marino SUBLISOL V1", hex: " #003066" },
          { nombre: "Marino SUBLISOL V2", hex: " #003662" },
          { nombre: "Morado SUBLISOL V2", hex: " #800080" },
          { nombre: "Violeta SUBLISOL V1", hex: " #800081" },
          { nombre: "Verde SUBLISOL V1", hex: "#008101 " },
          { nombre: "Verde SUBLISOL V2", hex: "#008100 " },
          { nombre: "Negro SUBLISOL V6", hex: " #000000" },
          { nombre: "Blanco SUBLISOL", hex: "#ffffff " },
          { nombre: "Amarillo Limón SUBLISOL Fluorescente", hex: "#fefe65 " },
          { nombre: "Naranja SUBLISOL Fluorescente", hex: "#fe9900 " },
          { nombre: "Rosa SUBLISOL Fluorescente", hex: "#fe99cc " }, 
          { nombre: "Verde SUBLISOL Fluorescente", hex: " #00fe00" },
        ],
        colorPrincipal: "#e74c3c"
    },
    { id: "vactrans", titulo: "LÍNEA VACTRANS", subcategoria: "tintas-sublimacion", descripcion: "por agregar", imagenes: [vactransImage], placeholder: true },

    // FOTOEMULSIONES PARA REVELADO DE PLANTALLAS SERIGRAFICAS - subcategoria: 'fotoemulsiones'
    {
        id: "tx-discharge-blue",
        titulo: "TX DISCHARGE BLUE",
        subtitulo: "LÍNEA IMPORTADA DE Chemical Consultants Inc.",
        subcategoria: "fotoemulsiones",
        descripcion: "Emulsión sensibilizada Diazo para Plastisol, Descarga, Tintas a base de agua.",
        imagenes: [txdischargeImage],
        fichaTecnica: "/fichas/estampado/fotoemulsiones/TX DISCHARGE BLUE.pdf",
        colorPrincipal: "#2980b9"
    },
    {
        id: "emulsion-hd",
        titulo: "EMULSIÓN HD",
        subtitulo: "LÍNEA IMPORTADA DE Chemical Consultants Inc.",
        subcategoria: "fotoemulsiones",
        descripcion: "Emulsión de fotopolímero.",
        imagenes: [emulsionhdImage],
        fichaTecnica: "/fichas/estampado/fotoemulsiones/EMULSION HD.pdf",
        colorPrincipal: "#c0392b"
    },
    {
        id: "prochem-gtx-red",
        titulo: "PROCHEM GTX RED",
        subtitulo: "LÍNEA IMPORTADA DE Chemical Consultants Inc.",
        subcategoria: "fotoemulsiones",
        descripcion: "Emulsión de fotopolímero híbrido / presensibilizado para Tintas UV, Gráficas (a base de solventes) y Plastisol.",
        imagenes: [prochemgtxredImage],
        fichaTecnica: "/fichas/estampado/fotoemulsiones/PROCHEM GTX RED.pdf",
        colorPrincipal: "#c0392b"
    },
    // PIGMENTOS EN DISPERSION BASE AGUA PARA PASTAS DE ESTAMPADO - subcategoria: 'pigmentos-dispersion'
    {
        id: "polyprint",
        titulo: "LÍNEA POLYPRINT",
        subtitulo: "(IMPORTADA)",
        subcategoria: "pigmentos-dispersion",
        descripcion: "Son pigmentos tanto orgánicos como inorgánicos dispersados en base agua que deben ser fijados por medio de binders. Debe ser termofijado para tener buena solidez al frote tanto en húmedo como en seco.",
        imagenes: [polyprintImage],
        fichaTecnica: "/fichas/estampado/pigmentos-dispersion/POLYPRINT.pdf",
        colores: [
          { nombre: "Amarillo POLYPRINT EG", hex: "#ffff00" },
          { nombre: "Amarillo Oro POLYPRINT EGO", hex: "#ffcd00" },
          { nombre: "Amarillo POLYPRINT E4C", hex: "#fffe00" },
          { nombre: "Naranja POLYPRINT EG", hex: "#ff6600" },
          { nombre: "Naranja POLYPRINT EOL", hex: "#fe8935" },
          { nombre: "Rojo POLYPRINT E2BT", hex: "#ff2213" },
          { nombre: "Rojo POLYPRINT EGRL", hex: "#fe2113" },
          { nombre: "Rojo POLYPRINT VB", hex: "#c90019" },
          { nombre: "Rosa POLYPRINT E3B", hex: "#ff309a " },
          { nombre: "Azul POLYPRINT ER", hex: " #0000ff" },
          { nombre: "Azul POLYPRINT EB", hex: " #003066" },
          { nombre: "Marino POLYPRINT E5RF", hex: " #000081" },
          { nombre: "Marino POLYPRINT E4R", hex: " #2f66ff" },
          { nombre: "Marino POLYPRINT E5M", hex: " #39638a" },
          { nombre: "Violeta POLYPRINT E2B", hex: "#810081 " },
          { nombre: "Verde POLYPRINT EG", hex: " #008100" },
          { nombre: "Negro POLYPRINT EGF", hex: " #000000" },
          { nombre: "Blanco POLYPRINT L", hex: "#ffffff " },
          { nombre: "Amarillo (FLUORESCENTE) FLUO POLYPRINT", hex: "#fefe65 " },
          { nombre: "Naranja (FLUORESCENTE) FLUO POLYPRINT", hex: "#fe9900 " },
          { nombre: "Magenta (FLUORESCENTE) FLUO POLYPRINT", hex: "#fe00fe " },
          { nombre: "Rosa (FLUORESCENTE) FLUO POLYPRINT", hex: "#fe99cc " }, 
          { nombre: "Azul (FLUORESCENTE) FLUO POLYPRINT", hex: " #009bf9" },
          { nombre: "Púrpura (FLUORESCENTE) FLUO POLYPRINT", hex: "#d14ff8 " },
          { nombre: "Verde (FLUORESCENTE) FLUO POLYPRINT", hex: " #00fe00" },
        ],
        colorPrincipal: "#e67e22"
    },
    {
        id: "vacprint",
        titulo: "LÍNEA VACPRINT",
        subtitulo: "(FABRICACIÓN NACIONAL)",
        subcategoria: "pigmentos-dispersion",
        descripcion: "Gama de pigmento base agua en pasta; desarrollados en alta concentración, formulado libre de metales pesados, ideales para ser integrados en pasta de estampado textil de muy fácil dispersión.",
        imagenes: [vacprintImage],
        fichaTecnica: "/fichas/estampado/pigmentos-dispersion/VACPRINT.pdf",
        colores: [
          { nombre: "Amarillo Vacprint G", hex: "#ffff00" },
          { nombre: "Amarillo Oro Vacprint", hex: "#ffcd00" },
          { nombre: "Naranja Vacprint G", hex: "#ff6600" },
          { nombre: "Naranja Vacprint EOL", hex: "#fe8935" },
          { nombre: "Rojo Vacprint VB", hex: "#ff0000" },
          { nombre: "Rojo Vacprint BGR", hex: "#c90019" },
          { nombre: "Rubina Vacprint 312", hex: "#e5007d" },
          { nombre: "Azul Vacprint R", hex: "#0000ff" },
          { nombre: "Turquesa Vacprint G", hex: "#003660" },
          { nombre: "Violeta Vacprint G", hex: "#810081" },
          { nombre: "Verde Vacprint GB", hex: "#008100" },
          { nombre: "Negro Vacprint LNG", hex: "#000000" },
          { nombre: "Blanco Vacprint L", hex: "#ffffff" },
          { nombre: "Amarillo Limón (FLUORESCENTE) Vacprint", hex: "#fefe65" },
          { nombre: "Naranja (FLUORESCENTE) Vacprint", hex: "#fe9900" },
          { nombre: "Rosa (FLUORESCENTE) Vacprint", hex: "#fe99cc" },
          { nombre: "Magenta (FLUORESCENTE) Vacprint", hex: "#fe00fe" },
          { nombre: "Azul (FLUORESCENTE) Vacprint", hex: "#009bf9" },
          { nombre: "Púrpura (FLUORESCENTE) Vacprint", hex: "#d14ff8" },
          { nombre: "Verde (FLUORESCENTE) Vacprint", hex: "#00fe00" },
        ],
        colorPrincipal: "#3498db"
    }
];

export default products;
