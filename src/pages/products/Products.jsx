import { useState } from "react";
import BasicCard from "./Cards";

const Products = () => {
  const allProducts = [
    {
      id: 1,
      name: "Smartphone",
      price: 100,
      img: "https://images.unsplash.com/photo-1527549993586-dff825b37782?auto=format&fit=crop&w=286",
      location: "New York",
      category: "Electronics",
      type: "Phone",
      color: "Black",
      brand: "Samsung",
    },
    {
      id: 2,
      name: "Laptop",
      price: 800,
      img: "https://images.unsplash.com/photo-1527549993586-dff825b37782?auto=format&fit=crop&w=286",
      location: "Los Angeles",
      category: "Electronics",
      type: "Computer",
      color: "Silver",
      brand: "Apple",
    },
    {
      id: 3,
      name: "T-shirt",
      price: 20,
      img: "https://images.unsplash.com/photo-1527549993586-dff825b37782?auto=format&fit=crop&w=286",
      location: "Chicago",
      category: "Clothing",
      type: "Apparel",
      color: "Red",
      brand: "Nike",
    },
  ];

  const [filters, setFilters] = useState({
    search: "",
    location: "",
    category: "",
    minPrice: "",
    maxPrice: "",
    type: "",
    color: "",
    brand: "",
  });

  const handleFilterChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const filteredProducts = allProducts.filter((product) => {
    return (
      product.name.toLowerCase().includes(filters.search.toLowerCase()) &&
      (filters.location ? product.location === filters.location : true) &&
      (filters.category ? product.category === filters.category : true) &&
      (filters.type ? product.type === filters.type : true) &&
      (filters.color ? product.color === filters.color : true) &&
      (filters.brand ? product.brand === filters.brand : true) &&
      (filters.minPrice ? product.price >= Number(filters.minPrice) : true) &&
      (filters.maxPrice ? product.price <= Number(filters.maxPrice) : true)
    );
  });

  return (
    <div className="p-6 w-full small">
      {/* <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">
        Products
      </h1> */}

      {/* Filters Section */}
      <div className="bg-gray-100 p-4 w-full small rounded-lg shadow-md mb-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        <input
          type="text"
          name="search"
          placeholder="Search by name..."
          className="p-2 border rounded-md"
          onChange={handleFilterChange}
        />
        <select
          name="location"
          className="p-2 border rounded-md"
          onChange={handleFilterChange}
        >
          <option value="">All Locations</option>
          <option value="New York">New York</option>
          <option value="Los Angeles">Los Angeles</option>
          <option value="Chicago">Chicago</option>
        </select>
        <select
          name="category"
          className="p-2 border rounded-md"
          onChange={handleFilterChange}
        >
          <option value="">All Categories</option>
          <option value="Electronics">Electronics</option>
          <option value="Clothing">Clothing</option>
        </select>
        <select
          name="type"
          className="p-2 border rounded-md"
          onChange={handleFilterChange}
        >
          <option value="">All Types</option>
          <option value="Phone">Phone</option>
          <option value="Computer">Computer</option>
          <option value="Apparel">Apparel</option>
        </select>
        <select
          name="color"
          className="p-2 border rounded-md"
          onChange={handleFilterChange}
        >
          <option value="">All Colors</option>
          <option value="Black">Black</option>
          <option value="Silver">Silver</option>
          <option value="Red">Red</option>
        </select>
        <select
          name="brand"
          className="p-2 border rounded-md"
          onChange={handleFilterChange}
        >
          <option value="">All Brands</option>
          <option value="Samsung">Samsung</option>
          <option value="Apple">Apple</option>
          <option value="Nike">Nike</option>
        </select>
        <input
          type="number"
          name="minPrice"
          placeholder="Min Price"
          className="p-2 border rounded-md"
          onChange={handleFilterChange}
        />
        <input
          type="number"
          name="maxPrice"
          placeholder="Max Price"
          className="p-2 border rounded-md"
          onChange={handleFilterChange}
        />
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div key={product.id} className="p-4 bg-white shadow-lg rounded-lg">
              <BasicCard product={product} />
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500 col-span-3">
            No products found.
          </p>
        )}
      </div>
    </div>
  );
};

export default Products;
