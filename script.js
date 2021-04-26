let str1 = 'abracadabra';
let str2 = '"to be or not to be"';
let str3 = '"to be or not to be coco qwertyuiopasdfghjklzcx"';
function freq(comp, str) {
  let countCompArr = [];
  let uniqueCompArr = [];
  str = str.replace(/[^a-zA-Z0-9]/g, ''); // delete all symbols expect letters and digits
  for (let i = 0; i < str.length; i++) {
    let s = str.substring(i, i + comp);
    if (s.length < comp) break;
    if (!uniqueCompArr.find((item) => item === s)) {
      uniqueCompArr.push(s);
      countCompArr.push(1);
    } else {
      countCompArr[uniqueCompArr.indexOf(s)]++;
    }
  }
  return uniqueCompArr
    .map((item, i) => item + ' ' + countCompArr[i])
    .sort(function (a, b) {
      var char1 = a.substr(a.search(/0-9+$/)); // get the last numbers
      var char2 = b.substr(b.search(/0-9+$/)); // get the last numbers
      return parseInt(char2) - parseInt(char1); // sort by parsing to number and reverse sorted element
    })
    .slice(0, 10);
}
console.log(freq(2, str1));
console.log(freq(2, str2));
console.log(freq(2, str3));
