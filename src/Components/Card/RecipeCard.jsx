import React from 'react';

// Recipe Cards
// Items

const RecipeCard = ({ foodImg, foodName, recipeMenus, onShowRecipe }) => {
  return (
    <div className="w-100 col-md-4 col-sm-6 card-holder">
      <div className="card">
        <div className="food-img">
          <img src={foodImg} alt={foodName} />
        </div>
        <div className="card-content">
          <div className="content">
            <h1 className="food-name">{foodName}</h1>
            <ul className="recipe-menu">
              {recipeMenus &&
                recipeMenus.map((item) => {
                  return <li key={Math.random()}>- {item}</li>;
                })}
            </ul>
          </div>
          <button onClick={onShowRecipe}>View Recipes</button>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
