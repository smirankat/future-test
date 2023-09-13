import { makeAutoObservable } from "mobx";
import { Book } from "../types/data";

class ModalStore {
  show = false;
  book?: Book;

  constructor() {
    makeAutoObservable(this);
  }

  setShow = (value: boolean) => {
    this.show = value;
  };

  setBook = (value: Book | undefined) => {
    this.book = value;
  };
}
const modalStore = new ModalStore();
export default modalStore;
