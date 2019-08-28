/**
 * @param {string} tiles
 * @return {number}
 */
var numTilePossibilities = function(tiles) {
  let categories = {};

  tiles.split('').forEach(l => categories[l] = categories[l] !== undefined ? categories[l] + 1 : 1);

  function getTotal(tiles) {
    let divisor = 1
    let categories = {};
    tiles.split('').forEach(l => categories[l] = categories[l] !== undefined ? categories[l] + 1 : 1);
    for (let letter in categories) {
      divisor = divisor * fact(categories[letter]);
    }
    return fact(tiles.length)/divisor;
  }

  let total = getTotal(tiles);
  for (let letter in categories) {
    let subtiles = tiles;
    // console.log(categories[letter], letter);
    while (categories[letter]--) {
      subtiles = removeLetter(subtiles, letter);
      console.log(subtiles, getTotal(subtiles));
      total += getTotal(subtiles);
    }
  }
  return total;
};

function removeLetter(tiles, letter) {
  return tiles.replace(new RegExp(letter), '');
}

function fact(x) {
  if (x <= 0) {
    return 1;
  }
  return x * fact(x - 1);
}

let tiles = "AAABBC";
let output = 188
console.log(numTilePossibilities(tiles));
// console.log(numTilePossibilities("AAB"));
// console.log(numTilePossibilities(tiles) == 188, numTilePossibilities(tiles), 188);
