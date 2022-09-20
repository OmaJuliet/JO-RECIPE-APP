import React from "react";

const Recipe = ({ image, title, cuisine, dish, ingredients }) => {
  return (
    <>

      <body>
        <main className="container px-5 py-24 mx-auto">
          <section className="flex flex-wrap -mx-4 -mb-10 text-center">
            <article className="sm:w-1/2 max-w-xs lg:w-full mb-10 px-4 rounded-lg">
              <figure className="rounded-lg h-64 overflow-hidden">
                <img className="object-cover object-center h-full w-full" src={image} alt="food" />
              </figure>
              <aside className="text-left h-auto rounded border-2 border-gray-200 mt-2 p-2">
                <h2 className="text-2xl font-bold text-black mt-0 mb-2">{title}</h2>
                <p className="text-sm text-gray-800 capitalize">Cuisine type: {cuisine}</p>
                <p className="text-sm text-gray-800 mt-1 capitalize">Dish Type: { dish}</p>
                <aside className="text-gray-600">
                  <p className="mb-2 mt-2 text-lg font-semibold">Ingredients:</p>
                  <ol className="mb-2 text-xs">
                    {ingredients.map((ingredient) => (
                      <li>• {ingredient.text}</li>
                    ))}
                  </ol>
                </aside>
              </aside>
            </article>
          </section>
        </main>
      </body>


    </>
  );
};

export default Recipe;
