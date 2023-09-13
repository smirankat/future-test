import axios from "axios";
import formStore from "../store/form-store";
import loadMoreStore from "../store/loadMore-store";
import constants from "../constants/constants";

const getData = () => {
  const { searchValue, orderBy, category } = formStore;
  const { startIndex } = loadMoreStore;
  const { REQUEST_ADDRESS, API_KEY } = constants;

  const intitleQuery = `+intitle:${searchValue}`;
  const categoryQuery = category === "All" ? "" : `+subject:${category}`;
  const orderByQuery = `&orderBy=${orderBy}`;
  const paginationQuery = `&startIndex=${startIndex}&maxResults=30`;
  const address = `${REQUEST_ADDRESS}?q=${intitleQuery}${categoryQuery}${orderByQuery}${paginationQuery}&key=${API_KEY}`;

  const req = axios.get(address);

  return req;
};

export const getBooks = async () => {
  const items = await getData().then((data) => data.data.items);

  return items;
};

export const getTotalItems = async () => {
  const totalItems = await getData().then((data) => data.data.totalItems);
  return totalItems;
};
