"use client";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

const Search = () => {
  const [search, setSearch] = useState("");
  const [meals, setMeals] = useState([]);
  const [error, setError] = useState("");
  const loadData = useCallback(async () => {
    try {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?f=${search}`
      );
      const data = await response.json();
      console.log(data.meals);
      if (data.meals && Array.isArray(data.meals)) {
        setMeals(data.meals);
        setError("");
      } else {
        setMeals([]);
        setError("No data found!");
      }
    } catch (error) {
      setError("An error occurred while fetching data!");
      setMeals([]);
      console.error(error);
    }
  }, [search]);
  const handlerSearch = (e) => {
    console.log(e.target.value);
    setSearch(e.target.value);
  };

  useEffect(() => {
    if (search) {
      loadData();
    }
  }, [search, loadData]);
  return (
    <div className="">
      <input
        onChange={handlerSearch}
        type="search"
        name=""
        id=""
        placeholder="search meals..."
        className="border-2 border-black rounded-l-lg px-2 py-1 text-center"
      />
      <button
        onClick={loadData}
        className="bg-red-400 border-2 border-red-400 text-white px-2 py-1 rounded-r-lg"
      >
        Search
      </button>
      <div className="mt-12 grid grid-cols-3 gap-12">
        {meals?.length > 0
          ? meals?.map((meal) => (
              <div
                key={meal?.idMeal}
                className="border-2 border-gray-200 p-6 bg-slate-200 rounded-md shadow-md"
              >
                <Image
                  src={meal?.strMealThumb}
                  width={500}
                  height={500}
                  alt={meal?.strMeal}
                />
                <h2>{meal.strMeal}</h2>
                <p>{meal.strInstructions}</p>
                {/* <img src={meal.strMealThumb} alt={meal.strMeal} /> */}
              </div>
            ))
          : error && <p className="text-red-500">{error}</p>}
      </div>
    </div>
  );
};

export default Search;
