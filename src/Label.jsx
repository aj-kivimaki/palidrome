import { isPalindrome } from "./isPalindrome";

const Label = ({ searchTerm }) => {
  return (
    <div className="result">
      <h2>{isPalindrome(searchTerm)}</h2>
    </div>
  );
};

export default Label;
