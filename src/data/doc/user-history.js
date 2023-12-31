export const USER_HISTORY = [
  {
    title: "H001 - Barra Navegación",
    who: "Cliente",
    what: "Quiero que exista una barra de navegación clara y concisa",
    for: "Poder navegar a la información qué deseo conocer.",
    conditions: [
      "Enlaces a todas las páginas importantes del sitio web, incluyendo Inicio, Valores-Historia, Menús, Pedidos, Contacto y Ubicación, así como una sección para la Bolsa de trabajo si está disponible en el sitio.",
      "Los enlaces de la barra de navegación deberán ser claramente legibles",
      "La barra de navegación deberá ser responsiva",
      "La barra de navegación deberá aparecer y desaparecer dependiendo si se está subiendo o bajando en la pantalla",
      "Los enlaces de la barra de navegación deberán estar correctamente ligados",
      "La barra de navegación deberá estar fijada a la parte superior de la pantalla",
      "Deberá contener el logotipo del restaurante",
    ],
  },
  {
    title: "H001.1 - Footer",
    who: "Cliente",
    what: "Que los datos principales de contacto se encuentren en el footer",
    for: "Poder acceder a ellos en todo momento.",
    conditions: [
      "Deberá estar colocado en la parte inferior de la pantall",
      "deberá contener teléfono, dirección, horarios, correo y sus principales redes que son Facebook e Instagram",
      "Los enlaces del footer deberán funcionar correctamente ",
      "El footer se deberá adaptar a los diferentes tamaños de pantalla",
    ],
  },
  {
    title: "H002 - Acceso página principal menú",
    who: "Cliente",
    what: "Me gustaría que desde la página principal tuviera acceso a los menús",
    for: "Porque es lo que más me interesa",
    conditions: [
      "La sub barra de navegación deberá tener una imagen representativa de fondo",
      "La sub barra de navegación no estará fijada a la parte superior de la pantalla",
      "El botón de los menús deberá llevar a los menús de manera correcta",
      "El botón de los menús deberá de tener algún efecto o cambio de color con el :hover",
    ],
  },
  {
    title: "H003 - Banner Principal",
    who: "Administrador",
    what: "Poder colocar mis promociones del mes en la página principal",
    for: "Promover la venta de mis productos.",
    conditions: [
      "El slider deberá ser programado de manera escalable para que solo sea necesario añadir una nueva promoción al array para que funcione y no cambiar el resto de la lógica",
      "El slider deberá contar con botones de derecha e izquierda para cambiar la promoción.",
      "El slider deberá desplazarse al siguiente slide de manera automática cada 4 segundos",
      "El slider deberá regresar al slide inicial al llegar al último slide",
      "El slide deberá contener nombre, descripción y precio de las promociones",
    ],
  },
  {
    title: "H004 - Galería Principal",
    who: "Cliente",
    what: "Poder ver imágenes del restaurante en la página principal",
    for: "Saber si me gustaría el lugar.",
    conditions: [
      "La galería principal deberá ser presentada en forma de grid con las imágenes acomodadas de diferentes tamaños",
      "Las imágenes deberán tener un efecto de zoom al hacer hover",
      "Al hacer clic en una imagen, esta deberá aparecer con z-index: 3 por encima de las demás imágenes en su tamaño completo",
      "No se deberá poder hacer clic en otra imagen si alguna imagen está seleccionada",
      "Al hacer clic nuevamente en la imagen, esta deberá desaparecer de la vista a detalle y volver a la galería",
      "Si se hace scroll arriba o abajo también deberá desaparecer la vista detalle",
    ],
  },
  {
    title: "H005 - Valores e Historia",
    who: "Dueño",
    what: "Poner en la página principal una descripción del restaurante, sus historias y sus valores",
    for: "Generar empatía con los clientes.",
    conditions: [
      "Después de la galería deberá estar la historia indicada por el dueño",
      "Después de la historia deberán estar los valores indicados por el dueño",
    ],
  },
  {
    title: "H006 - Menús",
    who: "Cliente",
    what: "Tener acceso a sus opciones de menús.",
    for: "Saber si estoy interesado.",
    conditions: [
      "Deberá existir una vista general de los menús: Desayuno, Comida, Bebidas y Postres",
      "Al hacer clic en un menú se desplegará el contenido del mismo",
      "Al hacer clic en un menú se contraerán los demás menús",
      "La lógica de los menús deberá ser escalable, de manera que solo sea necesario modificar o añadir información al array para cambiar un elemento y solo sea necesario modificar un componente para todos los menús",
    ],
  },
  {
    title: "H007 - Imágenes Menús",
    who: "Cliente",
    what: "Ver imágenes reales de los alimentos que preparan",
    for: "Saber si me apetece pedirlo.",
    conditions: [
      "La imagen se deberá colocar después del platillo",
      "Cada imagen deberá ser posible hacer clic en ella para verla a detalle",
      "Al hacer clic nuevamente deberá desaparecer la vista detalle",
      "Al hacer scroll también deberá desaparecer la vista detalle",
    ],
  },
  {
    title: "H008 - Menús Ingredientes",
    who: "Cliente",
    what: "Los platillos indiquen sus ingredientes.",
    for: "Saber si contiene algo a lo que soy alérgico.",
    conditions: [
      "En cada platillo, después del título y las porciones, deberán existir los ingredientes",
      "La tipografía y tamaño son coherentes con el resto de los elementos",
    ],
  },
  {
    title: "H009 - Menús Precio",
    who: "Cliente",
    what: "Que los alimentos incluyan sus precios.",
    for: "Saber si están dentro de mi presupuesto.",
    conditions: [
      "Cada platillo deberá tener los precios en el costado derecho y en negritas",
      "Los precios deberán tener IVA incluido",
      "Los precios deberán estar actualizados y en pesos mexicanos",
    ],
  },
  {
    title: "H010 - Menú Porciones",
    who: "Cliente",
    what: "Me gustaría que los menús incluyeran sus porciones en gramos.",
    for: "Saber la magnitud.",
    conditions: [
      "En los platillos que sea pertinente añadir la porción en gramos",
      "En los platillos que sea pertinente añadir las porciones (eje: tacos)",
      "Deberá estar después del título",
    ],
  },
  {
    title: "H011 - Costos Extras",
    who: "Cliente",
    what: "Que se indique si hay costos adicionales.",
    for: "Saber si estoy dispuesto a pagar por ello.",
    conditions: [
      "Al final de cada menú se deberán añadir los costos extra",
      "Deberán estar en pesos mexicanos",
      "Deberán tener el IVA incluido",
    ],
  },
  {
    title: "H012 - Contacto",
    who: "Cliente",
    what: "Tener acceso al contacto",
    for: "Contactar al restaurante en caso de necesitarlo.",
    conditions: [
      "Deberán existir en la página de contacto los datos de contacto de: teléfono, correo y ubicación.",
      "Los enlaces de los contactos deberán funcionar correctamente.",
      "Se deberán añadir redes sociales",
    ],
  },
  {
    title: "H013 - Formulario Contacto",
    who: "Cliente",
    what: "Un formulario de contacto directo en la página",
    for: "Poder enviar correos de forma rápida.",
    conditions: [
      "El formulario de contacto deberá estar ligado directamente al correo del product owner",
      "Deberá validar los datos que envía el cliente",
      "Deberá ser responsivo",
      "Deberá ser fácil de utilizar",
      "Deberá avisar al cliente cuando el correo ya ha sido enviado correctamente",
      "El formulario de contacto deberá ser una solicitud POST que cifre la información y sea validado con un token para evitar fugas",
    ],
  },
  {
    title: "H014 - Datos Usuario",
    who: "Dueño",
    what: "El usuario me envíe en el formulario su teléfono, nombre y correo",
    for: "Poder contactarlo y tener registro en mi base de datos personal",
    conditions: [
      "El formulario de contacto deberá solicitar nombre, correo y teléfono al solicitante",
      "Los datos deberán estar validados",
      "Los datos deberán llegar correctamente al correo del product owner",
    ],
  },
  {
    title: "H015 - Ubicación",
    who: "Cliente",
    what: "Encontrar de forma fácil la ubicación",
    for: "Poder llegar.",
    conditions: [
      "La ubicación deberá existir en texto",
      "La ubicación deberá existir visualmente a través de la API de Google Maps",
      "Al hacer clic deberá llevar al usuario a la ubicación dentro de Google Maps",
      "La ubicación se deberá encontrar dentro de la página de contacto",
    ],
  },
  {
    title: "H016 - B.Trabajo",
    who: "Interesado en Trabajar",
    what: "Tener acceso rápido a la bolsa de trabajo del restaurante",
    for: "Postular para alguna vacante.",
    conditions: [
      "Las vacantes deberán contar con: título, descripción, requisitos, horario y prestaciones.",
      "El sueldo será opcional dado que el dueño prefiere mantenerlo a discreción.",
      "Las vacantes deberán adaptarse a los diferentes tamaños de pantalla.",
      "Las vacantes deberán contar con un botón de postular que los lleve a escribir un correo al dueño.",
    ],
  },
  {
    title: "H017 - Pedidos",
    who: "Cliente",
    what: "Poder realizar mis pedidos a través de la página web.",
    for: "Ahorrar tiempo.",
    conditions: [
      "La página de pedidos deberá tener los pedidos, la cantidad, el precio unitario y total de la selección del cliente.",
      "Los pedidos deberán permitir añadir más cantidad.",
      "Los pedidos deberán permitir añadir propina.",
      "Deberá tener un botón de enviar que enlazará el pedido con el WhatsApp del restaurante.",
    ],
  },
  {
    title: "H018 - WhatsApp",
    who: "Dueño del Restaurante",
    what: "Recibir los pedidos a un número de WhatsApp",
    for: "Poder procesarlos.",
    conditions: [
      "Los pedidos deberán de llegar el teléfono indicado por el dueño.",
      "Los pedidos deberán contener nombre, cantidad y total a pagar.",
      "El restaurante debe ser capaz de confirmar la orden vía telefónica con el cliente.",
    ],
  },
];
