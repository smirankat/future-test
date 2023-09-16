import { makeAutoObservable } from "mobx";
import { Book } from "../types/data";
import { IPromiseBasedObservable, fromPromise } from "mobx-utils";
import { getBooks, getTotalItems } from "../api/getBooks";

class BooksStore {
  books?: IPromiseBasedObservable<Book[]>;
  totalItems?: IPromiseBasedObservable<number>;
  allBooks: Book[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  getBooksAction = () => {
    this.books = fromPromise(getBooks());
    // this.books.then(() => {
    //   const booksArray = this.books?.value as any[];
    //   this.allBooks = this.allBooks.concat(booksArray);
    //   console.log(this.allBooks);
    // });
  };
  getTotalItemsAction = () => {
    this.totalItems = fromPromise(getTotalItems());
  };
}

const booksStore = new BooksStore();
export default booksStore;
