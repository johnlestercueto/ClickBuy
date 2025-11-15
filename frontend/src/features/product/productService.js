import api from "../../api"; // same import ng api instance mo

// Add product
export const addProduct = async (formData) => {
  try {
    const res = await api.post("/product", formData
      
      //.{headers: { "Content-Type": "multipart/form-data" },}
  );
    return res.data;
  } catch (err) {
    console.error("Add product error:", err.response?.data || err.message);
    throw err;
  }
};

// Update product
export const updateProduct = async (id, formData) => {
  try {
    const res = await api.put(`/product/${id}`, formData
      //, {headers: { "Content-Type": "multipart/form-data" },}
    );
    return res.data;
  } catch (err) {
    console.error("Update product error:", err.response?.data || err.message);
    throw err;
  }
};

export const getProducts = async () => {
  try {
    const res = await api.get("/product")
    return res.data;
  } catch (err) {
    console.error("getting product error:", err.response?.data || err.message);
    throw err;
  }
}

export const deleteProduct = async (id) => {
 try {
  const res = await api.delete(`/product/${id}`);

  return res.data;
 } catch (err) {
  console.error("delete product error:", err.response?.data || err.message);
    throw err;
 }
}
