var numero;
var operacion;
function definirOperacion(_operacion) {
  numero = document.getElementById("uno").value;
  document.getElementById("uno").value = "";
  operacion = _operacion;
}
function igual() {
  switch (operacion) {
    case "+":
      numero =
        parseInt(numero) + parseInt(document.getElementById("uno").value);
      break;
    case "-":
      numero =
        parseInt(numero) - parseInt(document.getElementById("uno").value);
      break;
    case "/":
      numero =
        parseInt(numero) / parseInt(document.getElementById("uno").value);
      break;
    case "*":
      numero =
        parseInt(numero) * parseInt(document.getElementById("uno").value);
      break;
    default:
      alert("todomal");
      break;
  }
  document.getElementById("uno").value = numero;
}
function addNum(simbolo) {
  let nuevoValor = document.getElementById("uno").value;
  nuevoValor = nuevoValor + simbolo;
  document.getElementById("uno").value = nuevoValor;
}
