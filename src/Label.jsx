import { isPalindrome } from "./isPalindrome";

const Label = ({ term }) => {
  return (
    <div className="result">
      <h2>{isPalindrome(term)}</h2>
    </div>
  );
};

export default Label;
