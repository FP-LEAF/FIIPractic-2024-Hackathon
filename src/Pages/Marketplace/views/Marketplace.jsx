import React, { useState } from "react";
import MarketCapsuleCard from "../components/MarketCapsuleCard";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Marketplace() {
  // Dummy product data, you can replace this with actual data from your backend or API
  const products = [
    {
      id: 1,
      name: "Product 1",
      imageUrl: "https://via.placeholder.com/150",
      price: 10,
      date: new Date(2023, 0, 1),
    },
    {
      id: 2,
      name: "Product 2",
      imageUrl: "https://via.placeholder.com/150",
      price: 20,
      date: new Date(2023, 1, 15),
    },
    {
      id: 3,
      name: "Product 3",
      imageUrl: "https://via.placeholder.com/150",
      price: 15,
      date: new Date(2023, 2, 1),
    },
    {
      id: 4,
      name: "Product 4",
      imageUrl: "https://via.placeholder.com/150",
      price: 25,
      date: new Date(2023, 3, 1),
    },
    {
      id: 5,
      name: "Product 5",
      imageUrl: "https://via.placeholder.com/150",
      price: 18,
      date: new Date(2023, 4, 1),
    },
    {
      id: 6,
      name: "Product 6",
      imageUrl: "https://via.placeholder.com/150",
      price: 22,
      date: new Date(2023, 5, 1),
    },
    {
      id: 7,
      name: "Product 7",
      imageUrl: "https://via.placeholder.com/150",
      price: 12,
      date: new Date(2023, 6, 1),
    },
    {
      id: 8,
      name: "Product 8",
      imageUrl: "https://via.placeholder.com/150",
      price: 30,
      date: new Date(2023, 7, 1),
    },
    {
      id: 9,
      name: "Product 9",
      imageUrl: "https://via.placeholder.com/150",
      price: 28,
      date: new Date(2023, 8, 1),
    },
    {
      id: 10,
      name: "Product 10",
      imageUrl: "https://via.placeholder.com/150",
      price: 17,
      date: new Date(2023, 9, 1),
    },
  ];

  const [maxPrice, setMaxPrice] = useState(null);
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [sortOrder, setSortOrder] = useState("name"); // New state variable for sorting order

  const handlePriceFilter = (event) => {
    const value = event.target.value;
    setMaxPrice(value);
    const filtered = products.filter(
      (product) => product.price <= value || value === ""
    );
    setFilteredProducts(filtered);
  };

  const handleSortChange = (event) => {
    setSortOrder(event.target.value);
  };

  // Sort the filtered products based on the sort order
  const sortedProducts = filteredProducts.slice().sort((a, b) => {
    if (sortOrder === "name") {
      return a.name.localeCompare(b.name);
    } else {
      return a.date - b.date;
    }
  });

  return (
    <>
      <Navbar />
      <div className="flex items-center justify-center">
        <div className="mb-4">
          <label htmlFor="price-filter" className="block font-semibold mb-2">
            Filter by Price:
          </label>
          <input
            type="range"
            id="price-filter"
            min="0"
            max="30"
            value={maxPrice || ""}
            onChange={handlePriceFilter}
            className="w-full"
          />
          <div className="flex justify-between">
            <span>0</span>
            <span>30</span>
          </div>
        </div>
        <div className="mb-4 ml-4">
          <label htmlFor="sort-order" className="block font-semibold mb-2">
            Sort by:
          </label>
          <select id="sort-order" value={sortOrder} onChange={handleSortChange}>
            <option value="name">Name</option>
            <option value="date">Date</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {sortedProducts.map((product) => (
          <a href="/auction">
            <MarketCapsuleCard
              key={product.id}
              imageUrl={product.imageUrl}
              name={product.name}
              price={product.price}
            />
          </a>
        ))}
      </div>
      <Footer />
    </>
  );
}

export default Marketplace;
