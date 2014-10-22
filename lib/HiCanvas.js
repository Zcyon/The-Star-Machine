/*
==============================================================================================
HiCanvas.js
----------------------------------------------------------------------------------------------
Versión mejorada del script "Lienzo.js". Esta nueva versión permite el manejo de gráficos en
múltiples capas.
----------------------------------------------------------------------------------------------
Autor: Lascario Pacheco                                         Última Actualización: Ene/2014
==============================================================================================
*/

var HiCanvas = function(Anchura, Altura, Cantidad_Capas) {
  var Canvas            = new Array();
  var Contexto          = new Array();
  var Alto              = Altura;
  var Ancho             = Anchura;
  var Registro_Acciones = new Array();
  var Esto              = this;
  var Screen            = document.createElement("div");
      Screen.style.position = "relative";
      Screen.style.width    = Ancho + "px";
      Screen.style.height   = Alto + "px";

    for (var Contador = 0; Contador < Cantidad_Capas; Contador++) {

      // Creamos y preparamos a cada uno de Canvas por separado
      Canvas[Contador]                = document.createElement("canvas");
      Contexto[Contador]              = Canvas[Contador].getContext("2d");
      Canvas[Contador].style.position = "absolute";
      Canvas[Contador].width          = Ancho;
      Canvas[Contador].height         = Alto;
      Canvas[Contador].style.width    = Ancho + "px";
      Canvas[Contador].style.height   = Alto + "px"; 
      Canvas[Contador].style.left     = "0px";
      Canvas[Contador].style.top      = "0px";

      // Luego los adjuntamos a un Div, el cual permitirá que se superpongan
      Screen.appendChild(Canvas[Contador]);
    }

/*
==============================================================================================
Métodos Especiales de HiCanvas :)
----------------------------------------------------------------------------------------------
*/

  this.addToBody = function() {
  	document.body.appendChild(Screen);
  }

  this.addToTable = function(Nombre_Tabla, Fila, Columna) {
    var Tabla = document.getElementById(Nombre_Tabla);
    Tabla.rows[Fila].cells[Columna].appendChild(Screen);
  }

  this.addToObj = function(Objeto) {
    var Padre = document.getElementById(Objeto);
    Padre.appendChild(Screen);
  }

  this.removeFromBody = function() {
  	document.body.removeChild(Screen);
  }

  this.setId = function(Id) {
    Screen.id = Id;
  }

  this.setPosition = function(PosicionX, PosicionY) {
  	Screen.style.left = PosicionX;
  	Screen.style.top  = PosicionY;
  }

  this.centerScreen = function() {
    Screen.style.marginLeft  = "auto";
    Screen.style.marginRight = "auto";
    Screen.style.display     = "block";
  }

  this.setCursor = function(Estilo_Cursor) {
    Screen.style.cursor = Estilo_Cursor;
  }

  this.setBorder = function(Nuevo_Borde) {
    Screen.style.border = Nuevo_Borde;
  }

  this.setFont = function(Nueva_Fuente, Numero_Capa) {
    Contexto[Numero_Capa].font = Nueva_Fuente;
  }

  this.setScale = function(Nueva_Escala, Numero_Capa) {
    Contexto[Numero_Capa].scale(Nueva_Escala, Nueva_Escala);
  }

  this.setRotation = function(Nueva_Rotacion, Numero_Capa) {
    Contexto[Numero_Capa].rotate(Nueva_Rotacion*Math.PI/180);      
  }

  this.setShadow = function(Color, Blur, Offset_X, Offset_Y, Numero_Capa) {
    Contexto[Numero_Capa].shadowColor   = Color;
    Contexto[Numero_Capa].shadowBlur    = Blur;
    Contexto[Numero_Capa].shadowOffsetX = Offset_X;
    Contexto[Numero_Capa].shadowOffsetY = Offset_Y;          
  }

  this.setOrigin = function(Nuevo_Origen_X, Nuevo_Origen_Y, Numero_Capa) {
    Contexto[Numero_Capa].translate(Nuevo_Origen_X, Nuevo_Origen_Y); 
  }

  this.setAlpha = function(Nuevo_Alpha, Numero_Capa) {
    Contexto[Numero_Capa].globalAlpha = Nuevo_Alpha;   
  }

  this.getCanvas = function(Numero_Capa) {
    return Canvas[Numero_Capa]; 
  }

  this.getLayerNumber = function() {
    return Cantidad_Capas;
  }

  this.getWidth = function() {
    return Ancho;
  }

  this.getHeight = function() {
    return Alto;
  }

  this.getCanvasRectangle = function() {
    return Canvas[0].getBoundingClientRect();
  }

  this.getTextWidth = function(Texto, Numero_Capa) {
    var Text_Size = 0;
    Contexto[Numero_Capa].beginPath();
    Text_Size = Contexto[Numero_Capa].measureText(Texto).width;
    Contexto[Numero_Capa].closePath();
    return Text_Size;
  }


  this.setClass = function(Nombre_Clase) {
    Screen.class = Nombre_Clase;
  }

/*
==============================================================================================
Métodos Generales de HiCanvas :)
----------------------------------------------------------------------------------------------
*/

  this.drawRectangle = function(PosicionX, PosicionY, Ancho_Rect, Alto_Rect, Color, Numero_Capa) {
    Contexto[Numero_Capa].beginPath();
    Contexto[Numero_Capa].fillStyle = Color;
    Contexto[Numero_Capa].fillRect(PosicionX, PosicionY, Ancho_Rect, Alto_Rect);
    Contexto[Numero_Capa].closePath();
  }
  
  this.beginPath = function(numero_capa) {
    Contexto[numero_capa].beginPath();
  }
  
  this.closePath = function(numero_capa) {
    Contexto[numero_capa].closePath();
  }
  
  this.stroke = function(numero_capa) {
    Contexto[numero_capa].stroke();
  }
  
  this.moveTo = function(x, y, numero_capa) {
    Contexto[numero_capa].moveTo(x, y);
  }
  
  this.lineTo = function(x, y, numero_capa) {
    Contexto[numero_capa].lineTo(x, y);
  }
  
  this.fill = function(color, numero_capa) {
    Contexto[numero_capa].fillStyle = color;
    Contexto[numero_capa].fill();
  }
  
  this.save = function(numero_capa) {
    Contexto[numero_capa].save();
  }
  
  this.restore = function(numero_capa) {
    Contexto[numero_capa].restore();
  }

  this.drawLine = function(PosicionX1, PosicionY1, PosicionX2, PosicionY2, Color, Numero_Capa) {
    Contexto[Numero_Capa].beginPath();
    Contexto[Numero_Capa].strokeStyle = Color;
    Contexto[Numero_Capa].moveTo(PosicionX1, PosicionY1);
    Contexto[Numero_Capa].lineTo(PosicionX2, PosicionY2);
    Contexto[Numero_Capa].stroke();
    Contexto[Numero_Capa].closePath();
  }

  this.drawCircle = function(PosicionX, PosicionY, Radio, Angulo_Inicial, Angulo_Final, CClockwise, Color, Ancho, Numero_Capa) {
    Contexto[Numero_Capa].beginPath();
    Contexto[Numero_Capa].strokeStyle = Color;
    Contexto[Numero_Capa].lineWidth = Ancho;
    Contexto[Numero_Capa].arc(PosicionX, PosicionY, Radio, (Angulo_Inicial*Math.PI/180), (Angulo_Final*Math.PI/180), CClockwise);
    Contexto[Numero_Capa].stroke();
    Contexto[Numero_Capa].closePath();
  }

  this.eraseRectangle = function(PosicionX, PosicionY, Ancho_Rect, Alto_Rect, Numero_Capa) {
    Contexto[Numero_Capa].clearRect(PosicionX, PosicionY, Ancho_Rect, Alto_Rect);
  }

  this.drawString = function(PosicionX, PosicionY, Texto, Color, Numero_Capa) {
    Contexto[Numero_Capa].beginPath();
    Contexto[Numero_Capa].fillStyle = Color;
    Contexto[Numero_Capa].fillText(Texto, PosicionX, PosicionY);
    Contexto[Numero_Capa].closePath();
  }

  this.drawStringCentered = function(PosicionY, Ancho, Texto, Color, Numero_Capa) {
    var Text_Size = 0;
    Contexto[Numero_Capa].beginPath();
    Contexto[Numero_Capa].fillStyle = Color;
    Text_Size = Contexto[Numero_Capa].measureText(Texto).width;
    Contexto[Numero_Capa].fillText(Texto, (Ancho - Text_Size)/2, PosicionY);
    Contexto[Numero_Capa].closePath();
  }

  this.drawImage = function(Imagen, PosicionX, PosicionY, Numero_Capa) {
    Contexto[Numero_Capa].drawImage(Imagen, PosicionX, PosicionY);
  }

/*
==============================================================================================
Modificadores de Eventos en HiCanvas :)
----------------------------------------------------------------------------------------------
*/

  this.setOnMouseOver = function(Funcion) {
    Screen.onmouseover = Funcion;
  }

  this.setOnMouseMove = function(Funcion) {
    Screen.onmousemove = Funcion;
  }

  this.setOnMouseOut = function(Funcion) {
    Screen.onmouseout = Funcion;
  }

  this.setOnClick = function(Funcion) {
    Screen.onclick = Funcion;
  }

  this.setOnMouseDown = function(Funcion) {
    Screen.onmousedown = Funcion;
  }

  this.setOnMouseUp = function(Funcion) {
    Screen.onmouseup = Funcion;
  }

  this.setOnDblClick = function(Funcion) {
    Screen.ondblclick = Funcion;
  }

/*
==============================================================================================
Modificadores de Efectos en HiCanvas :)
----------------------------------------------------------------------------------------------
*/

  this.grayScale = function(PosicionX, PosicionY, Ancho, Alto, Numero_Capa) {
    var Datos_Imagen = Contexto[Numero_Capa].getImageData(PosicionX, PosicionY, Anchura, Altura);
    var Pixeles = Datos_Imagen.data;
      for (var Contador = 0, Numero = Pixeles.length; Contador < Numero; Contador = Contador + 4) {
        var Escala_Grises = Pixeles[Contador] * 0.3 + Pixeles[Contador + 1] * 0.59 + Pixeles[Contador + 2] * 0.11;
        Pixeles[Contador] = Escala_Grises;
        Pixeles[Contador + 1] = Escala_Grises;
        Pixeles[Contador + 2] = Escala_Grises;
      }
    Contexto[Numero_Capa].putImageData(Datos_Imagen, 0, 0);
  }

  this.gradient = function(PosicionX1, PosicionY1, PosicionX2, PosicionY2, Ancho, Alto, Color1, Color2, Numero_Capa) {
    var Gradiente = Contexto[Numero_Capa].createLinearGradient(PosicionX1, PosicionY1, PosicionX2, PosicionY2);
    Gradiente.addColorStop(0, Color1);
    Gradiente.addColorStop(1, Color2);
    Contexto[Numero_Capa].fillStyle = Gradiente;
    Contexto[Numero_Capa].fillRect(PosicionX1, PosicionY1, Ancho, Alto);
  }

}