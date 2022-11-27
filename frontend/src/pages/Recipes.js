import React, { useState, useEffect} from "react";
import TextInput from '@leafygreen-ui/text-input';
import Button from "@leafygreen-ui/button";
import { css } from "@leafygreen-ui/emotion";
import RecipeCard from "../components/RecipeCard";
import { getRecipes, searchRecipes } from "../utils/api";

const searchSection = css`
  margin-bottom: 10px;
  grid-column-template: repeat(12, 1fr);
  display: grid;
`

const inputStyle = css`
  grid-column-start: 1;
  grid-column-end: 9;
`

const buttonStyle = css`
  grid-column-start: 10;
  vertical-align: bottom;
`

// import recipes from "../data/recipes.json";

export default function Recipes () {
  let [recipes, setRecipes] = useState([]);
  let [search, setSearch] = useState("");
  
  useEffect(() => {
    const fetchRecipes = async () => {
      let data = await getRecipes();
      setRecipes(data);
    };
    fetchRecipes();
  }, [])

  const handleSearch = async (e) => {
    e.preventDefault();
    let data = [];
    if (search === "") {
      data = await getRecipes();
    } else {
      data = await searchRecipes(search);
    }
    setRecipes(data);
  }

  return  (
    <React.Fragment>
      
      <section className={searchSection}>
        <TextInput
          value={search}
          onChange={e => setSearch(e.target.value)}
          className={inputStyle} 
          type="text" 
          />
        <Button 
          className={buttonStyle} 
          variant="primary"
          onClick={handleSearch}
          type="button"
        >Search</Button>
      </section>

      {recipes.map(recipe => (
        <React.Fragment>
          <RecipeCard {...recipe} withLink={true} />
          <br/>
        </React.Fragment>
      ))}
    </React.Fragment>
  )
}