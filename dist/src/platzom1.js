'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = platzom1;
function platzom1(str) {
  var translation = str;

  // Si la palabra original es un palíndromo,
  // ninguna regla anterior cuenta y se devuelve
  // la misma palabra intercalando mayúsculas y minúsculas

  var reverse = function reverse(str) {
    return str.split('').reverse().join('');
  };

  var minMay = function minMay(str) {
    return str.split('').map(function (value, key) {
      return key % 2 == 0 ? value.toUpperCase() : value.toLowerCase();
    }).join("");
  };

  if (str.toLowerCase() == reverse(str.toLowerCase())) {
    return minMay(str);
  }

  // Si la palabra termina en "ar", se le quitan esos dos caracteres
  if (str.toLowerCase().endsWith('ar')) {
    translation = str.slice(0, -2);
  }

  // Si la palabra inicia con Z, se le añade "pe" al final
  if (str.toLowerCase().startsWith('z')) {
    translation += 'pe';
  }

  // Si la palabra traducida tiene 10 o más letras,
  // se debe partir a la mitad y unir con un guión del medio
  var length = translation.length;
  if (length >= 10) {
    var firstHalf = translation.slice(0, Math.round(length / 2));
    var secondHalf = translation.slice(Math.round(length / 2));
    translation = firstHalf + '-' + secondHalf;
  }

  return translation;
}