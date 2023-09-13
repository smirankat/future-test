import modalStore from "../store/modal-store";
import constants from "../constants/constants";
import { observer } from "mobx-react-lite";
import styles from "./Modal.module.css";

const Modal = observer(() => {
  const { show, setShow, book } = modalStore;
  const { IMG_PLACEHOLDER } = constants;

  if (!show) {
    return null;
  }
  return (
    <>
      <div className={styles.overlay} onClick={() => setShow(false)}>
        <div
          className={styles.overlay_inner}
          onClick={(e) => e.stopPropagation()}
        >
          <button className={styles.close} onClick={() => setShow(false)}>
            <i className="fas fa-times"></i>
          </button>
          <div className={styles.inner_box}>
            <img
              src={
                book?.volumeInfo.imageLinks === undefined
                  ? IMG_PLACEHOLDER
                  : book.volumeInfo.imageLinks.thumbnail
              }
              alt=""
            />
            <div className={styles.info}>
              <h1>{book?.volumeInfo.title}</h1>
              <div>{book?.volumeInfo.categories}</div>
              <h3>{book?.volumeInfo.authors}</h3>
            </div>
          </div>
          <h4 className={styles.description}>{book?.volumeInfo.description}</h4>
        </div>
      </div>
    </>
  );
});
export default Modal;
