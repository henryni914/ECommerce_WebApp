import axios from "axios";

export default {
  // Gets all products
  getProducts: function() {
    return axios.get("/api/products");
  },
  // Gets the product with the given id
  getProduct: function(id) {
    return axios.get("/api/products/" + id);
  },
  // Deletes the product with the given id
  deleteProduct: function(id) {
    return axios.delete("/api/products/" + id);
  },
  // Saves a product to the database
  saveProduct: function(postData) {
    return axios.post("/api/products", postData);
  },

  getBlogPosts: function() {
    return axios.get("/api/blogposts");
  },
  saveBlogPost: function(postData) {
    return axios.post("/api/blogposts", postData);
  },

  getUsers: function() {
    return axios.get("/api/users");
  },
  saveUsers: function() {
    return axios.post("/api/users")
  }
};