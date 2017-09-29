function empezar() {
 var final = new String();
 final = ("si");
 while (final=="si" || final=="SI" || final=="Si" || final=="sI") {
  ruleta();
  final = prompt("(SI continuar) O (NO terminar)");
 }
}

function ruleta() {
 var part = new Number();
 var i = new Number();
 var ramdom = new Number();
 var usuario = new String();
 var resultado = new String();
 var accion = new String();
 accion = prompt("LAVAR o LEVANTAR o OTRA");
 part = Number(prompt("CANTIDAD DE PARTICIPANTES"));
 if (part==0) {
  alert("NO PUEDE HABER 0 PARTICIPANTES");
 } else {
  var usuario = new Array(part+1);
  for (i=1;i<=part;i++) {
   usuario[i] = prompt("NOMBRE DEL PARTICIPANTE N°"+i);
  }
  ramdom = Math.floor(Math.random()*(part))+1;
  resultado = usuario[ramdom];
  var a=document.getElementById("eti2");
  a.innerHTML = resultado;
  var a=document.getElementById("eti3");
  a.innerHTML = accion;
  alert(resultado+" TIENE QUE -"+accion+"-");
 }
}
