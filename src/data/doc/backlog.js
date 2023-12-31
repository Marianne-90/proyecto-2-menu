export const BACKLOG = {
  headers: [
    "Identificador (ID) de la Historia",
    "Enunciado de la Historia",
    "Alias",
    "Estado",
    "Dimensión/ Esfuerzo",
    "Interacción (Sprint)",
    "Prioridad",
    "Comentarios",
  ],
  columns: [
    [
      "H001",
      "Como cliente quiero que exista una barra de navegación clara y concisa que me permita navegar a la información que deseo conocer.",
      "Barra Navegación",
      "Hecho",
      "13",
      "S001",
      "M",
      "Barra de navegación con las páginas del sitio web. Al momento de hacer scroll, esta tiene que estar fijada a la parte superior de la pantalla . Inicio Valores-Historia, Menús, Pedidos, Contacto y Ubicación, Bolsa de trabajo",
    ],
    [
      "H001.1",
      "Como cliente me gustaría que exista un pie de página con los datos de contacto a la mano",
      "footer",
      "Hecho",
      "3",
      "S003",
      "M",
      "S/C",
    ],
    [
      "H002",
      "Como cliente me gustaría que desde la página principal tenga acceso a los menús, ya que es lo que más me interesa.",
      "Acceso página principal menú",
      "Hecho",
      "3",
      "S001",
      "C",
      "Agregar un botón para que nos muestre el menú",
    ],

    [
      "H003",
      "Como administrador me gustaría poder colocar mis promociones del mes en la página principal",
      "Banner Principal",
      "Hecho",
      "13",
      "S001",
      "M",
      "Un slider de 3 imágenes, cada slide con alguna promoción.",
    ],
    [
      "H004",
      "Como cliente me sería agradable poder ver imágenes del restaurante en la página principal para saber si me gustaría el lugar.",
      "Galería Principal",
      "Hecho",
      "13",
      "S002",
      "S",
      "Galería de imágenes. Al hacer clic en las imágenes, poder previsualizarlas en tamaño completo",
    ],
    [
      "H005",
      "Como dueño del restaurante me gustaría poner en la página principal una descripción del restaurante, sus historias y sus valores para generar empatía con los clientes.",
      "Valores e Historia",
      "Hecho",
      "8",
      "S002",
      "C",
      "En el home, añadir un breve párrafo de misión y visión.",
    ],
    [
      "H006",
      "Como cliente me gustaría tener acceso a sus opciones de menús para saber si estoy interesado.",
      "Menús",
      "Hecho",
      "5",
      "S002",
      "S",
      "Se puede acceder a ellos en la página menú, o también al momento de dar click en alguna subpágina, descargar en pdf el menú.",
    ],
    [
      "H007",
      "Como cliente me encantaría ver imágenes reales de los alimentos que preparan para saber si me apetece pedirlo.",
      "Imágenes Menús",
      "Hecho",
      "8",
      "S002",
      "C",
      "Imágenes localizadas estratégicamente dentro de los menús para que al hacer clic se pueda previsualizarlas en tamaño completo.",
    ],
    [
      "H008",
      "Como cliente me gustaría que los platillos indiquen sus ingredientes para saber si contiene algo a lo que soy alérgico.",
      "Menús ingredientes",
      "Hecho",
      "8",
      "S003",
      "M",
      "Añadir después del título del platillo los ingredientes que utiliza.",
    ],
    [
      "H009",
      "Como cliente quisiera que los alimentos incluyan sus precios para saber si están dentro de mi presupuesto.",
      "Menús Precio",
      "Hecho",
      "5",
      "S003",
      "M",
      "En cada platillo añadir los precios con IVA incluido.",
    ],
    [
      "H010",
      "Como cliente me gustaría que los menús incluyeran sus porciones en gramos para saber la magnitud.",
      "Menú porciones",
      "Hecho",
      "5",
      "S003",
      "S",
      "En cada platillo añadir la porción del mismo en gramos.",
    ],
    [
      "H011",
      "Como cliente me gustaría que se indique si hay costos adicionales para saber si estoy dispuesto a pagar por ello.",
      "Menú costos extras",
      "Hecho",
      "5",
      "S003",
      "S",
      "Dependiendo de los platillos y el menú añadir de forma estratégica complementos o personalizaciones extra que pueda llevar.",
    ],
    [
      "H012",
      "Como cliente me es importante tener acceso al contacto en caso de tener alguna duda o querer solicitar algo al restaurante.",
      "Contacto",
      "Hecho",
      "3",
      "S004",
      "M",
      "Añadir los datos del contacto del restaurante para que al darle clic al icono puedan marcar o mandar un WhatsApp.",
    ],
    [
      "H013",
      "Como usuario me gustaría un formulario de contacto directo en la página para poder enviar correos de forma rápida.",
      "Formulario Contacto",
      "Hecho",
      "5",
      "S004",
      "C",
      "Existirá un formulario de contacto que esté directamente vinculado al correo del product owner.",
    ],
    [
      "H014",
      "Como dueño del restaurante me gustaría que el usuario me enviara en el formulario su teléfono, nombre y correo para poder contactarlo y tener registro en mi base de datos personal.",
      "Datos Usuario",
      "Hecho",
      "3",
      "S004",
      "C",
      "En el formulario de contacto se deberá añadir una solicitud para nombre, correo y teléfono del usuario.",
    ],
    [
      "H015",
      "Como usuario me gustaría encontrar de forma fácil la ubicación para poder llegar.",
      "ubicación",
      "Hecho",
      "3",
      "S004",
      "M",
      "Añadir la ubicación tanto escrita como con Google Maps para que al hacer clic se les abra la aplicación con la ubicación.",
    ],
    [
      "H016",
      "Sería interesante como posible interesado tener acceso rápido a la bolsa de trabajo del restaurante para postular para alguna vacante.",
      "B.Trabajo",
      "Hecho",
      "21",
      "S005",
      "C",
      "Añadir el icono de correo electrónico para que los postulantes puedan enviar su solicitud.",
    ],
    [
      "H017",
      "Como cliente me sería práctico poder realizar mis pedidos a través de la página web.",
      "Pedidos",
      "Hecho",
      "13",
      "S006",
      "C",
      "Agregar un carrito para que el cliente pueda pedir su orden.",
    ],
    [
      "H018",
      "Como dueño del restaurante me sería práctico recibir los pedidos a un número de WhatsApp para poder procesarlos.",
      "WhatsApp",
      "Hecho",
      "13",
      "S006",
      "C",
      "Vincular la página con un número de WhatsApp para que a este le lleguen todos los pedidos.",
    ],
  ],
};
