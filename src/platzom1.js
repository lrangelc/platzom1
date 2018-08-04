export default function platzom1(str) {
    let translation = str;
  
    // Si la palabra original es un palíndromo,
    // ninguna regla anterior cuenta y se devuelve
    // la misma palabra intercalando mayúsculas y minúsculas
  
    const reverse = (str) => str.split('').reverse().join('');
    
    const minMay = (str) => str.split('').map( (value,key) => key % 2==0 ? value.toUpperCase() : value.toLowerCase() ).join("");

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
    const length = translation.length
    if (length >= 10) {
      const firstHalf = translation.slice(0, Math.round(length / 2));
      const secondHalf = translation.slice(Math.round(length / 2));
      translation = `${firstHalf}-${secondHalf}`;
    }
  
    return translation;
  }