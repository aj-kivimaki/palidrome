import { isPalindrome } from "./isPalindrome";

const Label = ({ term }) => {
  return (
    <div className="result">
      <h2>{`This is ${isPalindrome(term)} a Palindrome!`}</h2>
    </div>
  );
};

export default Label;
