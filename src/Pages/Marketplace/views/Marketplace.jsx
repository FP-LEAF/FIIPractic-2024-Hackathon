import React from "react";
import { CapsuleCard } from "../../Profile/components/CapsuleCard";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";

const Marketplace = () => {
  const capsules = [
    {
      id: 1,
      name: "Football Sports Capsule",
      description:
        "Sed ut perspiciatis unde omnis iste. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      category: "Sports",
      subcategory: "Football",
    },
    {
      id: 2,
      name: "Bowling Sports Capsule",
      description:
        "Disrupt inspire and think tank, social entrepreneur but preliminary thinking think tank compelling.",
      category: "Sports",
      subcategory: "Bowling",
    },
    {
      id: 3,
      name: "Cycling Sports Capsule",
      description:
        "A slice of heaven. O for awesome, this chocka full cuzzie is as rip-off as a cracker.",
      category: "Sports",
      subcategory: "Cycling",
    },
    {
      id: 4,
      name: "Weight Lifting Sports Capsule",
      description:
        "Meanwhile, in behind the bicycle shed, Hercules Morse, as big as a horse.",
      category: "Sports",
      subcategory: "Weight Lifting",
    },
    {
      id: 5,
      name: "Golf Sports Capsule",
      description:
        "Disrupt inspire and think tank, social entrepreneur but preliminary thinking think tank compelling.",
      category: "Sports",
      subcategory: "Golf",
    },
    {
      id: 6,
      name: "Hockey Sports Capsule",
      description:
        "A business big enough that it could be listed on the NASDAQ goes belly up.",
      category: "Sports",
      subcategory: "Hockey",
    },
    {
      id: 7,
      name: "Shooting Sports Capsule",
      description:
        "Lookout flogging bilge rat main sheet bilge water nipper fluke to go on account heave down clap of thunder.",
      category: "Sports",
      subcategory: "Shooting",
    },
    {
      id: 8,
      name: "Martial Arts Capsule",
      description:
        "Webtwo ipsum orkut reddit meebo skype vimeo jajah spock empressr zimbra, mobly napster.",
      category: "Sports",
      subcategory: "Martial Arts",
    },
  ];

  const categories = Array.from(
    new Set(capsules.map((capsule) => capsule.category))
  );
  const subcategories = Array.from(
    new Set(capsules.map((capsule) => capsule.subcategory))
  );

  const [filteredCapsules, setFilteredCapsules] = React.useState(capsules);
  const [selectedCategory, setSelectedCategory] = React.useState("");
  const [selectedSubcategory, setSelectedSubcategory] = React.useState("");
  const [orderBy, setOrderBy] = React.useState("");

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
    filterCapsules(event.target.value, selectedSubcategory);
  };

  const handleSubcategoryChange = (event) => {
    setSelectedSubcategory(event.target.value);
    filterCapsules(selectedCategory, event.target.value);
  };

  const handleOrderByChange = (event) => {
    setOrderBy(event.target.value);
    orderCapsules(event.target.value);
  };

  const filterCapsules = (category, subcategory) => {
    let filtered = capsules;
    if (category) {
      filtered = filtered.filter((capsule) => capsule.category === category);
    }
    if (subcategory) {
      filtered = filtered.filter(
        (capsule) => capsule.subcategory === subcategory
      );
    }
    setFilteredCapsules(filtered);
  };

  const orderCapsules = (order) => {
    let ordered = [...filteredCapsules];
    if (order === "nameAsc") {
      ordered.sort((a, b) => a.name.localeCompare(b.name));
    } else if (order === "nameDesc") {
      ordered.sort((a, b) => b.name.localeCompare(a.name));
    }
    setFilteredCapsules(ordered);
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <div className="container mx-auto py-8">
        <h1 className="text-4xl font-bold mb-8 text-center">Browse Capsules</h1>
        <div className="flex justify-between mb-8">
          <div>
            <label
              htmlFor="category"
              className="block text-gray-700 font-bold mb-2"
            >
              Category:
            </label>
            <select
              id="category"
              value={selectedCategory}
              onChange={handleCategoryChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            >
              <option value="">All Categories</option>
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label
              htmlFor="subcategory"
              className="block text-gray-700 font-bold mb-2"
            >
              Subcategory:
            </label>
            <select
              id="subcategory"
              value={selectedSubcategory}
              onChange={handleSubcategoryChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            >
              <option value="">All Subcategories</option>
              {subcategories.map((subcategory) => (
                <option key={subcategory} value={subcategory}>
                  {subcategory}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label
              htmlFor="orderBy"
              className="block text-gray-700 font-bold mb-2"
            >
              Order By:
            </label>
            <select
              id="orderBy"
              value={orderBy}
              onChange={handleOrderByChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            >
              <option value="">Default</option>
              <option value="nameAsc">Name (A-Z)</option>
              <option value="nameDesc">Name (Z-A)</option>
            </select>
          </div>
        </div>
        <div className="">
          {filteredCapsules.map((capsule) => (
            <CapsuleCard key={capsule.id} capsuleInfo={capsule} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Marketplace;
