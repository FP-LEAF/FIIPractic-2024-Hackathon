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
    },
    {
      id: 2,
      name: "Product 2",
      imageUrl: "https://via.placeholder.com/150",
      price: 20,
    },
    {
      id: 3,
      name: "Product 3",
      imageUrl: "https://via.placeholder.com/150",
      price: 15,
    },
    {
      id: 4,
      name: "Product 4",
      imageUrl: "https://via.placeholder.com/150",
      price: 25,
    },
    {
      id: 5,
      name: "Product 5",
      imageUrl: "https://via.placeholder.com/150",
      price: 18,
    },
    {
      id: 6,
      name: "Product 6",
      imageUrl: "https://via.placeholder.com/150",
      price: 22,
    },
    {
      id: 7,
      name: "Product 7",
      imageUrl: "https://via.placeholder.com/150",
      price: 12,
    },
    {
      id: 8,
      name: "Product 8",
      imageUrl: "https://via.placeholder.com/150",
      price: 30,
    },
    {
      id: 9,
      name: "Product 9",
      imageUrl: "https://via.placeholder.com/150",
      price: 28,
    },
    {
      id: 10,
      name: "Product 10",
      imageUrl: "https://via.placeholder.com/150",
      price: 17,
    },
  ];

  const [maxPrice, setMaxPrice] = useState(null);
  const [filteredProducts, setFilteredProducts] = useState(products);

  const handlePriceFilter = (event) => {
    const value = event.target.value;
    setMaxPrice(value);

    const filtered = products.filter(
      (product) => product.price <= value || value === ""
    );
    setFilteredProducts(filtered);
  };

  return (
    <>
      <Navbar />
      <div className="container mx-auto my-4">
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
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredProducts.map((product) => (
          <MarketCapsuleCard
            key={product.id}
            imageUrl={product.imageUrl}
            name={product.name}
            price={product.price}
          />
        ))}
      </div>
      <Footer />
    </>
  );
}

export default Marketplace;
