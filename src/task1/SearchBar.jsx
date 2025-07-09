function SearchBar({ search, onSearch, onReset }) {
  return (
    <div style={{ marginBottom: '20px' }}>
      <input
        type="text"
        placeholder="Search by email"
        value={search}
        onChange={(e) => onSearch(e.target.value)}
        style={{ padding: '8px', width: '250px', marginRight: '10px' }}
      />
      {search && (
        <button onClick={onReset} style={{ padding: '8px 12px' }}>
          Reset
        </button>
      )}
    </div>
  );
}

export default SearchBar;
