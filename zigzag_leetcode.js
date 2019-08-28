/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
  let rows = [];
  let down = true;
  let rowIdx = 0;
  let letter;
  if (numRows == 1) return s;

  for (let i = 0, length = s.length; i < length; i++) {
    rows[rowIdx] = `${rows[rowIdx]||''}${s[i]}`;
    if ((rowIdx == 0 && !down) || (down && rowIdx == numRows - 1)) {
      down = !down;
    }
    rowIdx += down ? 1 : -1;
  }

  return rows.join('');
};

let i, o;
i = "PAYPALISHIRING";
o = "PAHNAPLSIIGYIR";
console.log(convert(i, 3), o, convert(i, 3) == o);

i = "PAYPALISHIRING";
o = "PINALSIGYAHRPI";
console.log(convert(i, 4), o, convert(i, 4) == o);

i = "AB";
o = "AB";
console.log(convert(i, 1), o, convert(i, 1) == o);
