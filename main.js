console.log("I'm in")
const handleClick = () => {
const str = document.getElementById("Name").value;
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
  document.getElementById("encryptedName").innerText = str
    .toLowerCase()
    .split("")
    .map((char) => map[char] || char)
    .join("");
    return str
      .toLowerCase()
      .split("")
      .map((char) => map[char] || char)
      .join("");
};
encrypt(str, 6);
console.log(encrypt(str, 6));
}

const decryptText = () => {
    const str = document.getElementById("encryptedName").innerText
    const getMap = (legend, shift) => {
      return legend.reduce((charsMap, currentChar, charIndex) => {
        const copy = { ...charsMap };
        let ind = (charIndex / shift) * legend.length;
        if (ind < 0) {
          ind += legend.length;
        }
        copy[currentChar] = legend[ind];
        return copy;
      }, {});
    };
    const decrypt = (str, shift = 0) => {
      const legend = "abcdefghijklmnopqrstuvwxyz".split("");
      const map = getMap(legend, shift);
      document.getElementById("decryptedName").innerText = str
        .toLowerCase()
        .split("")
        .map((char) => map[char] || char)
        .join("");
      return str
        .toLowerCase()
        .split("")
        .map((char) => map[char] || char)
        .join("");
    };
    decrypt(str, 6);
}