// Archivo de datos para Accesorios y Consumibles
// Contiene: Mallas, Marcos, Papel, Adhesivos, Solventes, Diluyentes, Aditivos.

// Importación de imágenes
import mallaBlanca from '../assets/productos/gama-mallas/malla-blanca.png';
import mallaAmarilla from '../assets/productos/gama-mallas/malla-amarilla.png';

export default [
    // === MALLAS BLANCAS ===
    {
        id: "malla-11",
        titulo: "Malla 11",
        categoria: "accesorios", // Usamos "accesorios" para filtrar
        subcategorias: [4], // Accesorios
        taxonomias: [16], // Mallas
        familia: "mallas", // Campo personalizado para agrupar en la página
        descripcion: "Malla de poliéster monofilamento de alta tensión y baja elongación, ideal para depósitos muy altos de tinta.",
        imagenes: [mallaBlanca],
        esTablaEspecificaciones: true,
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
            }
        ],
        colorPrincipal: "#27cfe8ff"
    },
    {
        id: "malla-24",
        titulo: "Malla 24",
        categoria: "accesorios",
        subcategorias: [4],
        taxonomias: [16],
        familia: "mallas",
        descripcion: "Malla de poliéster monofilamento para trabajos que requieren alto depósito de tinta.",
        imagenes: [mallaBlanca],
        esTablaEspecificaciones: true,
        items: [
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
            }
        ],
        colorPrincipal: "#27cfe8ff"
    },
    {
        id: "malla-32",
        titulo: "Malla 32",
        categoria: "accesorios",
        subcategorias: [4],
        taxonomias: [16],
        familia: "mallas",
        descripcion: "Malla de poliéster versátil para estampado textil con pastas de alta viscosidad.",
        imagenes: [mallaBlanca],
        esTablaEspecificaciones: true,
        items: [
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
            }
        ],
        colorPrincipal: "#27cfe8ff"
    },
    {
        id: "malla-34",
        titulo: "Malla 34",
        categoria: "accesorios",
        subcategorias: [4],
        taxonomias: [16],
        familia: "mallas",
        descripcion: "Malla de poliéster para serigrafía, ofrece buen anclaje y definición.",
        imagenes: [mallaBlanca],
        esTablaEspecificaciones: true,
        items: [
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
            }
        ],
        colorPrincipal: "#27cfe8ff"
    },
    {
        id: "malla-36",
        titulo: "Malla 36",
        categoria: "accesorios",
        subcategorias: [4],
        taxonomias: [16],
        familia: "mallas",
        descripcion: "Malla estándar para impresión textil con tintas base agua y plastisoles con glitter grueso.",
        imagenes: [mallaBlanca],
        esTablaEspecificaciones: true,
        items: [
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
            }
        ],
        colorPrincipal: "#27cfe8ff"
    },
    {
        id: "malla-43",
        titulo: "Malla 43",
        categoria: "accesorios",
        subcategorias: [4],
        taxonomias: [16],
        familia: "mallas",
        descripcion: "Malla de uso general para impresión textil, ideal para plastisoles y base agua estándar.",
        imagenes: [mallaBlanca],
        esTablaEspecificaciones: true,
        items: [
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
            }
        ],
        colorPrincipal: "#27cfe8ff"
    },
    {
        id: "malla-55",
        titulo: "Malla 55",
        categoria: "accesorios",
        subcategorias: [4],
        taxonomias: [16],
        familia: "mallas",
        descripcion: "Malla para detalles medios y textos legibles en impresión textil.",
        imagenes: [mallaBlanca],
        esTablaEspecificaciones: true,
        items: [
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
            }
        ],
        colorPrincipal: "#27cfe8ff"
    },
    {
        id: "malla-62",
        titulo: "Malla 62",
        categoria: "accesorios",
        subcategorias: [4],
        taxonomias: [16],
        familia: "mallas",
        descripcion: "Malla para impresiones con buena definición y depósito moderado.",
        imagenes: [mallaBlanca],
        esTablaEspecificaciones: true,
        items: [
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
            }
        ],
        colorPrincipal: "#27cfe8ff"
    },
    {
        id: "malla-72",
        titulo: "Malla 72",
        categoria: "accesorios",
        subcategorias: [4],
        taxonomias: [16],
        familia: "mallas",
        descripcion: "Malla para trabajos de línea fina y detalles en selección de color básica.",
        imagenes: [mallaBlanca],
        esTablaEspecificaciones: true,
        items: [
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
            }
        ],
        colorPrincipal: "#27cfe8ff"
    },
    {
        id: "malla-77",
        titulo: "Malla 77",
        categoria: "accesorios",
        subcategorias: [4],
        taxonomias: [16],
        familia: "mallas",
        descripcion: "Excelente para cuatricromías en fondos claros y medios tonos.",
        imagenes: [mallaBlanca],
        esTablaEspecificaciones: true,
        items: [
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
            }
        ],
        colorPrincipal: "#27cfe8ff"
    },
    {
        id: "malla-90-blanca",
        titulo: "Malla Blanca 90",
        categoria: "accesorios",
        subcategorias: [4],
        taxonomias: [16],
        familia: "mallas",
        descripcion: "Malla de alta definición para tramas finas y detalles precisos.",
        imagenes: [mallaBlanca],
        esTablaEspecificaciones: true,
        items: [
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
            }
        ],
        colorPrincipal: "#27cfe8ff"
    },
    {
        id: "malla-120-blanca",
        titulo: "Malla Blanca 120",
        categoria: "accesorios",
        subcategorias: [4],
        taxonomias: [16],
        familia: "mallas",
        descripcion: "Para impresiones UV de alta calidad y detalles extremadamente finos.",
        imagenes: [mallaBlanca],
        esTablaEspecificaciones: true,
        items: [
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
            }
        ],
        colorPrincipal: "#27cfe8ff"
    },
    {
        id: "malla-140-blanca",
        titulo: "Malla Blanca 140",
        categoria: "accesorios",
        subcategorias: [4],
        taxonomias: [16],
        familia: "mallas",
        descripcion: "Malla de muy alta resolución para trabajos gráficos exigentes.",
        imagenes: [mallaBlanca],
        esTablaEspecificaciones: true,
        items: [
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
            }
        ],
        colorPrincipal: "#27cfe8ff"
    },
    // === MALLAS AMARILLAS ===
    {
        id: "malla-90-amarilla",
        titulo: "Malla 90 Amarilla",
        categoria: "accesorios",
        subcategorias: [4],
        taxonomias: [16],
        familia: "mallas",
        descripcion: "Malla amarilla que absorbe la dispersión de luz UV, mejorando la definición de bordes en tramas finas.",
        imagenes: [mallaAmarilla],
        esTablaEspecificaciones: true,
        items: [
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
            }
        ],
        colorPrincipal: "#facc15"
    },
    {
        id: "malla-120-amarilla",
        titulo: "Malla 120 Amarilla",
        categoria: "accesorios",
        subcategorias: [4],
        taxonomias: [16],
        familia: "mallas",
        descripcion: "Malla amarilla de alta tensión para cuatricromías y detalles finos con control de halación.",
        imagenes: [mallaAmarilla],
        esTablaEspecificaciones: true,
        items: [
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
            }
        ],
        colorPrincipal: "#facc15"
    },
    {
        id: "malla-140-amarilla",
        titulo: "Malla 140 Amarilla",
        categoria: "accesorios",
        subcategorias: [4],
        taxonomias: [16],
        familia: "mallas",
        descripcion: "Malla amarilla de ultra alta definición, minimiza la refracción de luz para la máxima calidad gráfica.",
        imagenes: [mallaAmarilla],
        esTablaEspecificaciones: true,
        items: [
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
        colorPrincipal: "#facc15"
    }
];
