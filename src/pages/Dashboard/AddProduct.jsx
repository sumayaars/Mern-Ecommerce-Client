import React, { useState } from "react";
import { Uploader } from "uploader"; 
import { UploadButton } from "react-uploader";

const AddProduct = () => {
  const [product, setProduct] = useState({
    name: "",
    description: "",
    price: "",
    category: "",
    stock: "",
    image: "", 
  });
  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const uploader = Uploader({
    apiKey: "free", 
  });
  const options = { multi: false };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccessMsg("");
    setErrorMsg("");

    try {
      const response = await fetch("http://localhost:5000/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(product),
      });

      if (response.ok) {
        setSuccessMsg("Product added successfully!");
        setProduct({
          name: "",
          description: "",
          price: "",
          category: "",
          stock: "",
          image: "",
        });
      } else {
        const errorData = await response.json();
        setErrorMsg(errorData.message || "Failed to add product.");
      }
    } catch (error) {
      console.error("Upload error:", error);
      setErrorMsg("An error occurred while adding the product.");
    }

    setLoading(false);
  };

  return (
    <div className="mx-auto">
      <div className="max-w-xl mx-auto p-6 bg-gray-100 shadow-lg rounded-md mt-10">
        <h2 className="text-2xl font-semibold mb-4 text-center">Add New Product</h2>

        {successMsg && <p className="text-green-600 text-center mb-2">{successMsg}</p>}
        {errorMsg && <p className="text-red-600 text-center mb-2">{errorMsg}</p>}

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            value={product.name}
            onChange={handleChange}
            required
            placeholder="Product Name"
            className="w-full px-3 py-2 border rounded-md"
          />

          <textarea
            name="description"
            value={product.description}
            onChange={handleChange}
            required
            placeholder="Description"
            className="w-full px-3 py-2 border rounded-md"
          />

          <input
            type="number"
            name="price"
            value={product.price}
            onChange={handleChange}
            required
            placeholder="Price"
            className="w-full px-3 py-2 border rounded-md"
          />

          <input
            type="text"
            name="category"
            value={product.category}
            onChange={handleChange}
            required
            placeholder="Category"
            className="w-full px-3 py-2 border rounded-md"
          />

          <input
            type="text"
            name="stock"
            value={product.stock}
            onChange={handleChange}
            required
            placeholder="Stock"
            className="w-full px-3 py-2 border rounded-md"
          />

          {/* Upload Button */}
          <UploadButton
            uploader={uploader}
            options={options}
            onComplete={(files) => {
              if (files.length > 0) {
                const imageUrl = files[0].fileUrl;
                setProduct((prev) => ({
                  ...prev,
                  image: imageUrl,
                }));
              }
            }}
          >
            {({ onClick }) => (
              <button
                type="button"
                onClick={onClick}
                className="w-full px-3 py-2 border rounded-md text-start"
              >
                📷 Upload Image
              </button>
            )}
          </UploadButton>

          <button
            type="submit"
            disabled={loading}
            className="btn w-full btn-ghost mx-auto bg-white text-black py-2 rounded-md hover:bg-gray-400"
          >
            {loading ? "Submitting..." : "Add Product"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
