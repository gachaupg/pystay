/* eslint-disable no-unused-vars */
import { useState } from "react";
import { motion } from "framer-motion";

export default function PostItemForm() {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    category: "",
    brand: "",
    price: "",
    image: null,
    location: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (e) => {
    setFormData({ ...formData, image: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <motion.div
    initial={{ opacity: 0, x: -100 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.8, ease: "easeInOut" }}
      className="max-w-3xl mx-auto bg-white p-6 rounded-2xl shadow-lg pt-24"
    >
      <h2 className="text-2xl font-bold  mb-4">Post an Item</h2>
      <form onSubmit={handleSubmit} className="space-y-4  ">
        <div className="flex gap-10">
          <div className="flex flex-col gap-4 w-full">
            <input
              type="text"
              name="name"
              placeholder="Item Name"
              className="w-full p-2 border rounded-lg"
              onChange={handleChange}
              required
            />
            <textarea
              name="description"
              placeholder="Description"
              className="w-full h-24 p-2 border rounded-lg"
              onChange={handleChange}
              required
            ></textarea>
            <select
              name="category"
              className="w-full p-3 border  rounded-lg"
              onChange={handleChange}
              required
            >
              <option value="">Select Category</option>
              <option value="electronics">Electronics</option>
              <option value="fashion">Fashion</option>
              <option value="home">Home</option>
            </select>
          </div>
          <div className="flex flex-col gap-4 w-full">
            <input
              type="text"
              name="brand"
              placeholder="Brand Name"
              className="w-full p-2 border rounded-lg"
              onChange={handleChange}
              required
            />
            <input
              type="number"
              name="price"
              placeholder="Price"
              className="w-full p-2 border rounded-lg"
              onChange={handleChange}
              required
            />
            <input
              type="file"
              name="image"
              className="w-full p-2 border rounded-lg"
              onChange={handleImageChange}
              required
            />
            <input
              type="text"
              name="location"
              placeholder="Location"
              className="w-full p-2 border rounded-lg"
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600"
        >
          Submit Item
        </motion.button>
      </form>
    </motion.div>
  );
}
