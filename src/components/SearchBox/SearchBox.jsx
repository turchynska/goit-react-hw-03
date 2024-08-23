import css from './SearchBox.module.css';

const SearchBox = ({ value, onFilter }) => {
  return (
    <div className={css.box}>
      <p className={css.label}>Find contacts by name</p>
      <input
        className={css.input}
        type="text"
        value={value}
        onChange={(e) => onFilter(e.target.value)}
      />
    </div>
  );
}

export default SearchBox;