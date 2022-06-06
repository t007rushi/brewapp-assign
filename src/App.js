import "./App.css";
import { useEffect, useState } from "react";
import { CategoriesFilter } from "./components/CategoriesFilter";
import { Card } from "./components/Card";

function App() {
  const [cards, setCards] = useState([]);
  const [currentCategory, setCurrentCategory] = useState("🔥 24h Trending");
  const filteredData = cards?.filter(
    (item) => item.category === currentCategory
  );

  const selectCategoryHandler = (value) => {
    setCurrentCategory(value);
  };

  useEffect(() => {
    fetch("https://629dbb763dda090f3c094f11.mockapi.io/cards")
      .then((res) => res.json())
      .then((data) => {
        setCards(data);
      });
  }, []);

  return (
    <div className="mx-4">
      <div className="text-4xl ml-4 mt-1 font-bold">Live Spaces</div>
      <div className="p-2 ml-2 mt-2">
        ✅ All NFTs on Cyber either belong to or were minted by their space
        creater.
      </div>
      <CategoriesFilter
        selectCategoryHandler={selectCategoryHandler}
        currentCategory={currentCategory}
      />
      <Card filteredData={filteredData} />
    </div>
  );
}

export default App;
