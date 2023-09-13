import { makeAutoObservable } from "mobx";
import { Book } from "../types/data";
import { IPromiseBasedObservable, fromPromise } from "mobx-utils";
import { getBooks, getTotalItems } from "../api/getBooks";

class BooksStore {
  books?: IPromiseBasedObservable<Book[]>;
  totalItems?: IPromiseBasedObservable<number>;
  // categories: String[] = [
  //   "Art",
  //   "Biography",
  //   "Computers",
  //   "History",
  //   "Medical",
  //   "Poetry",
  // ];
  // category?: string;

  constructor() {
    makeAutoObservable(this);
  }

  getBooksAction = () => {
    this.books = fromPromise(getBooks());
  };
  getTotalItemsAction = () => {
    this.totalItems = fromPromise(getTotalItems());
  };
}

const booksStore = new BooksStore();
export default booksStore;
