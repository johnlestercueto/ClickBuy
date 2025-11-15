// src/store/productStore.js
import { create } from "zustand";
import { addProduct, updateProduct, getProducts } from "../product/productService";

const useProductStore = create((set, get) => ({
  products: [],
  loading: false,
  error: null,

  //load product
  fetchProducts: async() => {
    try {
      set({ loading: true, error: null})
      const data = await getProducts();

      set({
        products: data,
        loading: false
      })
    } catch (err) {
      set({ error: err.message, loading: false})
    }
  },
  

  // Add product gamit yung service
  addNewProduct: async (formData) => {
    try {
      set({ loading: true, error: null });
      const newProduct = await addProduct(formData);
      // idagdag sa existing state
      set({
           products: get().products.concat(newProduct),  // old products + new product sa dulo
           loading: false
          });

    } catch (err) {
      set({ error: err.response?.data || err.message, loading: false });
    }
  },

  // Update product gamit yung service
  updateExistingProduct: async (id, formData) => {
    try {
      set({ loading: true, error: null });
      const updated = await updateProduct(id, formData);
      // palitan yung old product sa state

      function replaceProduct(products, id, updated) {
      return products.map((p) => (p._id === id ? updated : p));
}

      // then inside your store:
      set((state) => ({
      products: replaceProduct(state.products, id, updated),
      loading: false,
      }));

    } catch (err) {
      set({ error: err.response?.data || err.message, loading: false });
    }
  },
}));

export default useProductStore;
