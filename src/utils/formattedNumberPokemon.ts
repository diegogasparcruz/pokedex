export function formattedNumberPokemon(num: number, len: number) {
  var numberWithZeroes = String(num);

  var counter = numberWithZeroes.length;

  while (counter < len) {
    numberWithZeroes = '0' + numberWithZeroes;
    counter++;
  }
  return numberWithZeroes;
}
