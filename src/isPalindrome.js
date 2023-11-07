export function isPalindrome(input) {
  // compare input and reversed input, return empty string if true, return "NOT" if false
  // make it string type and uppercase for easy comparing
  if (input === "") {
    return "";
  }
  let reversed = "";
  let string = String(input).toUpperCase();
  for (let i = string.length - 1; i >= 0; i--) {
    reversed += string[i];
    if (string === reversed) return "This is a Palindrome!";
  }
  return "This is NOT a Palindrome!";
}
