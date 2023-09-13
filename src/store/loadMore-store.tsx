import { makeAutoObservable } from "mobx";

class LoadMoreStore {
  startIndex = 0;

  constructor() {
    makeAutoObservable(this);
  }

  incrementStartIndex = () => {
    this.startIndex = this.startIndex + 30;
  };
  decrementStartIndex = () => {
    this.startIndex = this.startIndex - 30;
  };
}
const loadMoreStore = new LoadMoreStore();
export default loadMoreStore;
