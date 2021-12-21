console.log("I'm in")
const handleClick = () => {
const str ='Iamastring';
console.log(str)
const getMap = (legend, shift) => {
  return legend.reduce((charsMap, currentChar, charIndex) => {
    const copy = { ...charsMap };
    let ind = (charIndex + shift) % legend.length;
    if (ind < 0) {
      ind += legend.length;
    }
    copy[currentChar] = legend[ind];
    return copy;
  }, {});
};
const encrypt = (str, shift = 0) => {
  const legend = "abcdefghijklmnopqrstuvwxyz".split("");
  const map = getMap(legend, shift);
  document.getElementById("encryptedName").value = str
    .toLowerCase()
    .split("")
    .map((char) => map[char] || char)
    .join("");
};
encrypt(str, 6);
}
// console.log(encrypt(str, 6));