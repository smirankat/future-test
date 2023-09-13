import styles from "./App.module.css";
import booksStore from "../store/books-store";
import formStore from "../store/form-store";
import { observer } from "mobx-react-lite";
import SearchForm from "./Form";
import Cards from "./Cards";

const App = observer(() => {
  const { books, totalItems } = booksStore;
  const { searchValue, category } = formStore;

  if (!books || !totalItems || (!searchValue && category === "All")) {
    return (
      <div className={styles.app}>
        <SearchForm />
      </div>
    );
  }

  return (
    <div className={styles.app}>
      <SearchForm />
      {totalItems.case({
        fulfilled: (value) => (
          <div className={styles.qty}>Found {value} results</div>
        ),
      })}
      <Cards />
    </div>
  );
});

export { App };
