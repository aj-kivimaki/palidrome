export function isPalindrome(input) {
  // compare input and reversed input, if the same, return true
  // make it string type and lowercase for easy comparing
  let reversed = "";
  let string = String(input).toLowerCase();
  for (let i = string.length - 1; i >= 0; i--) {
    reversed += string[i];
    if (string === reversed) return true;
  }
  return false;
}

console.log(isPalindrome("saippuakauppias"));
