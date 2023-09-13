import { observer } from "mobx-react-lite";
import booksStore from "../store/books-store";
import loadMoreStore from "../store/loadMore-store";
import modalStore from "../store/modal-store";
import styles from "./Cards.module.css";
import constants from "../constants/constants";
import Modal from "./Modal";

const Cards = observer(() => {
  const { books, getBooksAction } = booksStore;
  const { startIndex, incrementStartIndex, decrementStartIndex } =
    loadMoreStore;
  const { setShow, setBook } = modalStore;
  const { IMG_PLACEHOLDER } = constants;

  const handleLoadMore: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
    incrementStartIndex();
    getBooksAction();
  };
  const handleBack: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
    if (startIndex >= 30) {
      decrementStartIndex();
      getBooksAction();
    }
  };
  return (
    <div>
      {books?.case({
        pending: () => <div>Loading...</div>,
        rejected: () => <div>Error</div>,
        fulfilled: (value) => (
          <div className={styles.wrapper}>
            <ul className={styles.cards}>
              {value?.map((book) => {
                return (
                  <li
                    key={book.etag}
                    className={styles.card}
                    onClick={() => {
                      setShow(true);
                      setBook(book);
                    }}
                  >
                    {
                      <img
                        src={
                          book.volumeInfo.imageLinks === undefined
                            ? IMG_PLACEHOLDER
                            : book.volumeInfo.imageLinks.thumbnail
                        }
                        alt={book.volumeInfo.title}
                      />
                    }
                    <div>
                      <div className={styles.categories[0]}>
                        {book.volumeInfo.categories}
                      </div>
                      <div className={styles.title}>
                        {book.volumeInfo.title}
                      </div>
                      <div className={styles.authors}>
                        {book.volumeInfo.authors}
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
            <div className={styles.buttons}>
              <button onClick={handleBack}>Back</button>
              <button onClick={handleLoadMore}>Load more</button>
            </div>
          </div>
        ),
      })}
      <Modal />
    </div>
  );
});

export default Cards;
