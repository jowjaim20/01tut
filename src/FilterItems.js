const FilterItems = ({ searchItems, setSearchItems }) => {
  return (
    <div>
      <input
        type="text"
        value={searchItems}
        placeholder="search items"
        onChange={(e) => setSearchItems(e.target.value)}
      />
    </div>
  );
};
export default FilterItems;
