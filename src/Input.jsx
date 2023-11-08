function Input({ search, searchTerm }) {
  return (
    <div className="input">
      <input
        id="search"
        type="text"
        placeholder="word, number or phrase"
        value={searchTerm}
        onChange={search}
      />
    </div>
  );
}

export default Input;
