function Input({ onSearch }) {
  return (
    <div className="input">
      <input
        type="text"
        placeholder="word, number or phrase"
        onChange={onSearch}
      />
    </div>
  );
}

export default Input;
