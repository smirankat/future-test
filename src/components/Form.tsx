import { observer } from "mobx-react-lite";
import { useState } from "react";
import booksStore from "../store/books-store";
import formStore from "../store/form-store";
import styles from "./Form.module.css";
import loadMoreStore from "../store/loadMore-store";

const SearchForm = observer(() => {
  const [value, setValue] = useState("");
  const { getBooksAction, getTotalItemsAction } = booksStore;
  const { setSearchValue, setOrderBy, categories, setCategory } = formStore;
  const { getInitialStartIndex } = loadMoreStore;

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setValue(e.target.value);
  };
  const handleSubmit: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
    getInitialStartIndex();
    setSearchValue(value);
    getBooksAction();
    getTotalItemsAction();
  };
  const handleKeyPress: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      getInitialStartIndex();
      setSearchValue(value);
      getBooksAction();
      getTotalItemsAction();
    }
  };
  const onCategoryChange: React.ChangeEventHandler<HTMLSelectElement> = (e) => {
    e.preventDefault();
    setCategory(e.target.value);
    getBooksAction();
    getTotalItemsAction();
  };

  const onOrderByChange: React.ChangeEventHandler<HTMLSelectElement> = (e) => {
    e.preventDefault();
    setOrderBy(e.target.value);
    getBooksAction();
  };

  return (
    <div className={styles.form}>
      <h1>Search for books</h1>
      <div className={styles.search}>
        <input
          value={value}
          onChange={handleChange}
          onKeyDown={handleKeyPress}
          placeholder="Search for books"
        />
        <i className="fa fa-search"></i>
      </div>
      <button onClick={handleSubmit}>Search</button>
      <div className={styles.options}>
        <div>
          <span>Categories</span>
          <select onChange={onCategoryChange}>
            <option>All</option>
            {categories.map((n, i) => (
              <option key={i}>{n}</option>
            ))}
          </select>
        </div>
        <div>
          <span>Sorting by</span>
          <select onChange={onOrderByChange}>
            <option>relevance</option>
            <option>newest</option>
          </select>
        </div>
      </div>
    </div>
  );
});

export default SearchForm;
