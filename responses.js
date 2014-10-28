function showDialog (id) {
    switch (id) {
      case 'jake':
        $('#message_text').text(jake);
        break;
      case 'finn':
        $('#message_text').text(finn);
        break;
      case 'amy':
        $('#message_text').text(amy);
        break;
      case 'doctor':
        $('#message_text').text(doctor);
        break;
      case 'lulu':
        $('#message_text').text(lulu);
        break;
      case 'heart':
        $('#message_text').text(heart);
        break;
      case 'heimerdinger':
        $('#message_text').text(heimerdinger);
        break;
      case 'architect':
        $('#message_text').text(architect);
        break;
      default:
        $('#message_text').text('No hay conocimiento asociado a esa palabra clave, por los momentos.\n\n¡¡Sigue intentando!!\n\nSi sólo querías jugar con las estrellas, asegúrate de introducir sólo números :)');
        break;
    }
  $('#canvas_wrapper').hide();
  $('#main_banner').hide();
  $('#message_wrapper').fadeIn();
  $('#void_banner').fadeIn();
}

function showCanvas () {
  $('#message_wrapper').hide();
  $('#void_banner').hide();
  $('#canvas_wrapper').show();
  $('#main_banner').show();
}

var jake = 'RECUERDO 1/8\n\n\nHola, Verónica. Si todo ha salido bien, deberías poder leer este mensaje antes del jueves. Estar aquí es sinónimo de tener en tus manos la memoria casi completa de tu novio, de forma que ya casi alcanzas la luz al final del túnel.\n\nYo, el arquitecto, aprecio tu interés por devolver a la normalidad a Lascario, pero necesitarás más que interés para poder recuperarlo por completo.';
var finn = 'RECUERDO 2/8\n\n\nAsí que no sólo llegaste hasta este punto, sino que también has sido diligente con la recolección de los medallones. Lascario estaría orgulloso, si pudiera recordar todo lo que has hecho por él para este momento. Sin embargo, yo, el arquitecto, no soy un ente malintencionado; te mostraré uno de los pensamientos de Lascario cuando estaba siendo \"formateado\":\n\nRecuperado de los recuerdos de Lascario ??/??:\n\n\"Escucha, sé que no debe ser sencillo estar donde estás ahora. Me imagino que lo que queda de Lascario debe haberse ido de excursión. Te he dejado pistas... Los n----res son l- p----a. Recuerda... ¡Los -------!\n\n¡Te amo! :)\"';
var amy = 'RECUERDO 3/8\n\n\nRecuperado de los recuerdos de Lascario ??/??:\n\n"Verónica, si puedes leer esto, el arquitecto habla generalmente en inglés. No ignores esto, es importantísimo que lo recuerdes. HABLA EN -NGL-S. No lo olvides.\n\nHe encontrado la manera de verle la cara, Verónica, el arquitecto usa tres l-nt-s, ¡TRES! También tiene un cabello d--pei--do.\n\nRecuerda que son los nombres los que abren la puerta al nuevo conocimiento. Trata introduciendo el nombre del arquitecto para decirlo al celador. No -- -lvi--s.\n\n¡Te amo! :)\"';
var doctor = 'RECUERDO 4/8\n\n\nRecuperado de los recuerdos de Lascario ??/10:\n\n\"Verónica, esto es importantísimo:\n\nAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAARAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAARAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA\n\n\nEl arquitecto ha escodido su nombre en el párrafo anterior, ¿podrías descubrirlo?\n\n¡Te amo! :)\"';
var lulu = 'RECUERDO 5/8\n\n\nCarta dedicada a Verónica:\n\n\"Buenos días, Verónica, te escribo esta carta con el fin de hacerte saber que me haces el hombre más feliz del universo. Escribo esto con lo poco que me queda de memoria, así que espero con ansias el momento en el que las recuperas todas y me salvas, como siempre lo haces. ¿Sabes una cosa? Eres tú quién me ha impulsado a seguir adelante a pesar de las adversidades y has sido tú quién me otorga la fuerza para escribir estas breves palabras con lo poco que me queda.\n\nAún tenemos trabajo que hacer con este mundo; espero que puedas leer esto algún día y que no permitas que el planeta se pierda sin nuestra intervención. Somos protagonistas, Verónica, así nos veo en un futuro.\n\nAhora ve, ¡tienes Lascarios que rescatar y arquitectos que detener!\"';
var heart = 'RECUERDO 6/8\n\n\n';
var heimerdinger = 'RECUERDO 7/8\n\n\n';
var architect = 'RECUERDO 8/8\n\n\n';