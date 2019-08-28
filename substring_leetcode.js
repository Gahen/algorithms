/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  let letters = s.split('');
  let distinct = [];
  let max = 0;
  letters.forEach(letter => {
    if (!distinct.includes(letter)) {
      distinct.push(letter);
    }
  });
  letters.forEach((letter, i) => {
    let tempDifferent = [];
    let sliced = letters.slice(i, i + distinct.length);
    // console.log('empieza con ', letter);
    var result = sliced.every((letter, i) => {
      if (!tempDifferent.includes(letter)) {
        tempDifferent.push(letter);
        return true;
      } else {
        // console.log('termina con ', letter);
        if (i > max) {
          // console.log('nuevo max ', i);
          max = i;
        }
        return false;
      }
    });
    if (result && max < sliced.length) {
      max = sliced.length;
    }
  });
  return max;
};

let i, o;
i = "abcabcbb";
o = 3;
console.log(lengthOfLongestSubstring(i), o, lengthOfLongestSubstring(i) == o);

i = "bbbbbbbb";
o = 1;
console.log(lengthOfLongestSubstring(i), o, lengthOfLongestSubstring(i) == o);

i = "pwwkew";
o = 3;
console.log(lengthOfLongestSubstring(i), o, lengthOfLongestSubstring(i) == o);
