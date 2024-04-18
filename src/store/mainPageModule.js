import axios from "axios";

export const MainPageModule = {
  state: () => ({
    isLoadingData: false,
    selectedSort: "",
    searchQuery: "",
    products: [],
    sortOptions: [{ value: "name", name: "Name sort" }],
  }),
  getters: {
    sortedProducts(state) {
      return [...state.products].sort((product1, product2) =>
        product1[state.selectedSort]?.localeCompare(
          product2[state.selectedSort]
        )
      );
    },
    sortedAndSearchedProducts(state, getters) {
      return getters.sortedProducts.filter((product) =>
        product.name.toLowerCase().includes(state.searchQuery)
      );
    },
  },
  mutations: {
    setSearchQuery(state, searchQuery) {
      state.searchQuery = searchQuery;
    },
    setLoadingData(state, isLoadingData) {
      state.isLoadingData = isLoadingData;
    },
    setProducts(state, products) {
      state.products = products;
    },
    setSelectedSort(state, selectedSort) {
      state.selectedSort = selectedSort;
    },
  },
  actions: {
    async fetchProducts({ commit }) {
      try {
        commit("setLoadingData", true);
        const response = await axios.get(
          "https://a833410ee345ecf7.mokky.dev/products"
        );
        commit("setProducts", response.data);
      } catch (e) {
        alert("Error!");
      } finally {
        commit("setLoadingData", false);
      }
    },
  },
  namespaced: true,
};
