import { makeAutoObservable } from "mobx";

class FormStore {
  searchValue?: string;
  orderBy?: string = "relevance";
  categories: String[] = [
    "Art",
    "Biography",
    "Computers",
    "History",
    "Medical",
    "Poetry",
  ];
  category?: string = "All";

  constructor() {
    makeAutoObservable(this);
  }

  setSearchValue = (value: string) => {
    this.searchValue = value;
  };
  setOrderBy = (value: string) => {
    this.orderBy = value;
  };
  setCategory = (option: string) => {
    this.category = option;
  };
}

const formStore = new FormStore();
export default formStore;
