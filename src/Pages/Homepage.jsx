import React, { useEffect, useState, useRef } from 'react';
import Search from '../Components/Search/Search';
import RecipeCard from '../Components/Card/RecipeCard';
import Title from '../Components/Title/Title';
import ModalCard from '../Components/Card/ModalCard';
import LineSpin from '../Assets/LineSpin';

const Homepage = () => {
  const [recipes, setRecipes] = useState([]);
  const [recipeSelected, setRecipeSelected] = useState({});
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('Barbeque');
  const [loading, setLoading] = useState(false);

  // Handle Search Input
  const handleInput = (e) => {
    setSearch(e.target.value);
  };

  // Handle Submit Search
  const handleSubmit = (e) => {
    e.preventDefault();

    if (search.length > 0) {
      setRecipes([]);
      setQuery(search);
      setSearch('');
    }
  };

  // Request query value

  useEffect(() => {
    setLoading(true);
    fetch(
      `https://api.edamam.com/search?q=${query}&app_id=723a24b5&app_key=b5da531aa640921a777ac697de13757a&from=0&to=12`
    )
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        setRecipes(data.hits);
      });
  }, [query]);

  // Modal ref
  const modalDom = useRef(null);
  const cardDom = useRef(null);

  const showModal = (recipe, e) => {
    setRecipeSelected(recipe);
    modalDom.current.classList.add('open');
  };

  const onHideModal = (e) => {
    if (
      e.target.classList.contains('modal') ||
      e.target.classList.contains('close-box')
    ) {
      modalDom.current.classList.remove('open');
    }
  };

  return (
    <div className="page-recipes">
      <div className="container">
        <Title />
        <Search
          onSubmit={handleSubmit}
          handleChange={handleInput}
          handleValue={search}
        />
        {loading && <LineSpin />}
        <div className="row">
          {recipes &&
            recipes.map(({ recipe }) => {
              return (
                <RecipeCard
                  key={Math.floor(recipe.calories)}
                  foodImg={recipe.image}
                  foodName={recipe.label}
                  recipeMenus={recipe.ingredientLines}
                  onShowRecipe={showModal.bind(this, recipe)}
                />
              );
            })}
        </div>
      </div>
      {/* Show Modal when user clicks one of the card items or view recipes */}
      <ModalCard
        modalDom={modalDom}
        cardDom={cardDom}
        recipeInfo={recipeSelected}
        onHideModal={onHideModal}
      />
    </div>
  );
};

export default Homepage;
