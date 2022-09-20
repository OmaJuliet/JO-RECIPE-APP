import "./App.css";
import React, { useState, useEffect } from "react";
import Recipe from "./Recipe";




function App() {
  const APP_ID = "b49d728e";
  const APP_KEY = "431d72eafbd867e8e60f6b5080f17c8a";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("Rice");


  useEffect(() => {
      getRecipes();
  }, [query]);



  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
  };



  const updateSearch = (e) => {
    setSearch(e.target.value);
  };


  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };

  return (
    <>
      <section className="container px-5 py-24 mx-auto">
        <form
          onSubmit={getSearch}
          className="flex flex-wrap text-center justify-center"
        >
          <input
            type="text"
            value={search}
            onChange={updateSearch}
            className="bg-white lg:w-1/3 w-2/3 rounded border border-gray-300 p-2"
            placeholder="Input food"
          />
          <button
            className="text-white bg-green-400 border-0 py-0 px-4 rounded-full text-base ml-2"
            type="submit"
          >
            Search
          </button>
        </form>

        <article className="flex flex-wrap">
          {recipes.map((recipe) => (
            <Recipe
              key={recipe.recipe.label}
              title={recipe.recipe.label}
              image={recipe.recipe.image}
              ingredients={recipe.recipe.ingredients}
              cuisine={recipe.recipe.cuisineType}
              dish={recipe.recipe.dishType}
            />
          ))}
        </article>
      </section>
    </>
  );
}

export default App;
