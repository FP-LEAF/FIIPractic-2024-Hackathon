import React, { useContext, useState } from "react";
import MarketCapsuleCard from "../components/MarketCapsuleCard";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { DarkModeContext } from "../../../Components/DarkMode/DarkModeProvider";
import imageSrc1 from "../components/ICON_BATRAN.png";
import imageSrc2 from "../components/ICON_CLASSIC.png";
import imageSrc3 from "../components/ICON_LOVE.png";
import imageSrc4 from "../components/ICON_MUZICA.png";
import imageSrc5 from "../components/ICON_NUNTA.png";
import imageSrc6 from "../components/ICON_STUDENT.png";

function Marketplace() {
  // Dummy product data, you can replace this with actual data from your backend or API
  const products = [
    {
      id: 1,
      name: "Last Memories Capsule",
      imageUrl: imageSrc1,
      price: 10,
      date: new Date(2023, 0, 1),
      author: "Oprah Winfrey",
      userPhotoUrl:
        "https://flowbite.com/docs/images/people/profile-picture-1.jpg",
    },
    {
      id: 2,
      name: "Greatest Wishes Capsule",
      imageUrl: imageSrc2,
      price: 20,
      date: new Date(2023, 1, 15),
      author: "Elon Musk",
      userPhotoUrl:
        "https://flowbite.com/docs/images/people/profile-picture-2.jpg",
    },
    {
      id: 3,
      name: "Unforgettable Moments Capsule",
      imageUrl: imageSrc3,
      price: 15,
      date: new Date(2023, 2, 1),
      author: "Serena Williams",
      userPhotoUrl:
        "https://flowbite.com/docs/images/people/profile-picture-3.jpg",
    },
    {
      id: 4,
      name: "Cherished Memories Capsule",
      imageUrl: imageSrc4,
      price: 25,
      date: new Date(2023, 3, 1),
      author: "Barack Obama",
      userPhotoUrl:
        "https://flowbite.com/docs/images/people/profile-picture-4.jpg",
    },
    {
      id: 5,
      name: "Eternal Wishes Capsule",
      imageUrl: imageSrc5,
      price: 18,
      date: new Date(2023, 4, 1),
      author: "Beyoncé",
      userPhotoUrl:
        "https://flowbite.com/docs/images/people/profile-picture-5.jpg",
    },
    {
      id: 6,
      name: "Timeless Moments Capsule",
      imageUrl: imageSrc6,
      price: 22,
      date: new Date(2023, 5, 1),
      author: "Tom Hanks",
      userPhotoUrl:
        "https://flowbite.com/docs/images/people/profile-picture-1.jpg",
    },
    {
      id: 7,
      name: "Everlasting Wishes Capsule",
      imageUrl: imageSrc3,
      price: 12,
      date: new Date(2023, 6, 1),
      author: "Malala Yousafzai",
      userPhotoUrl:
        "https://flowbite.com/docs/images/people/profile-picture-3.jpg",
    },
    {
      id: 8,
      name: "Precious Memories Capsule",
      imageUrl: imageSrc2,
      price: 30,
      date: new Date(2023, 7, 1),
      author: "Jacqueline Kennedy Onassis",
      userPhotoUrl:
        "https://flowbite.com/docs/images/people/profile-picture-2.jpg",
    },
    {
      id: 9,
      name: "Unforgettable Wishes Capsule",
      imageUrl: imageSrc1,
      price: 28,
      date: new Date(2023, 8, 1),
      author: "Stephen Hawking",
      userPhotoUrl:
        "https://flowbite.com/docs/images/people/profile-picture-5.jpg",
    },
    {
      id: 10,
      name: "Cherished Wishes Capsule",
      imageUrl: imageSrc5,
      price: 17,
      date: new Date(2023, 9, 1),
      author: "Audrey Hepburn",
      userPhotoUrl:
        "https://flowbite.com/docs/images/people/profile-picture-4.jpg",
    },
  ];
  const { darkMode } = useContext(DarkModeContext);

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
            <span>300</span>
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
          <a href="#">
            <div
              key={product.id}
              imageUrl={product.imageUrl}
              name={product.name}
              price={product.price}
            >
              <div
                className={` ${
                  darkMode ? "bg-gray-800" : "bg-white"
                } flex justify-center items-center`}
              >
                <div style={{ maxWidth: "400px" }} className="w-full">
                  <div className="p-8 bg-white border rounded shadow-sm text-center">
                    <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
                      <a
                        href="/"
                        className="transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
                        aria-label="Category"
                      ></a>{" "}
                      <span className="text-gray-600">
                        {`Expires ${product.date.toISOString().slice(0, 10)}`}
                      </span>
                    </p>
                    <a
                      href="/"
                      aria-label="Article"
                      title="Jingle Bells"
                      className="inline-block mb-3 text-2xl font-bold leading-5 text-black transition-colors duration-200 hover:text-deep-purple-accent-400"
                    >
                      {product.name}
                    </a>
                    <img
                      src={product.imageUrl}
                      alt="Meaningful alt text for an image that is not purely decorative"
                      className="max-w-full max-h-full mx-auto"
                      style={{ width: "50%" }}
                    />

                    <div className="flex flex-col items-center my-7">
                      <a
                        href="/"
                        aria-label="Author"
                        title="Author"
                        className="mb-1"
                      >
                        <img
                          src={product.userPhotoUrl}
                          alt="avatar"
                          className="object-cover w-10 h-10 rounded-full shadow-sm"
                        />
                      </a>
                      <a
                        href="/"
                        aria-label="Author"
                        title="Author"
                        className="font-semibold text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-400"
                      >
                        {product.author}
                      </a>
                      <p className="text-sm font-medium leading-4 text-gray-600">
                        Author
                      </p>
                      <h1 className="font-bold text-green-600 text-4xl">
                        {`${product.price}0$`}
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>
      <Footer />
    </>
  );
}

export default Marketplace;
