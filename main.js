console.log("I'm in")
const handleClick = (salt) => {
     str = document.getElementById("Name").value;
    const textToChars = (text) => text.split("").map((c) => c.charCodeAt(0));
    const byteHex = (n) => ("0" + Number(n).toString(16)).substr(-2);
    const applySaltToChar = (code) =>
      textToChars(salt).reduce((a, b) => a ^ b, code);

     const cipher = str
     .split("")
      .map(textToChars)
      .map(applySaltToChar)
      .map(byteHex)
      .join("");
      document.getElementById("decryptedName").innerText = " ";
      document.getElementById("encryptedName").innerText = cipher
      return cipher
};

const decryptText = (salt) => {
     str = document.getElementById("encryptedName").innerText
    console.log(str)
    const textToChars = (text) => text.split("").map((c) => c.charCodeAt(0));
    const applySaltToChar = (code) =>
      textToChars(salt).reduce((a, b) => a ^ b, code);

   const decipher = str
    .match(/.{1,2}/g)
    .map((hex) => parseInt(hex, 16))
    .map(applySaltToChar)
    .map((charCode) => String.fromCharCode(charCode))
    .join("");
    document.getElementById("decryptedName").innerText = decipher
    return decipher
    };