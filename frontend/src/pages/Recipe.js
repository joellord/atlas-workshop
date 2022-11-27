import React from "react";
import { useParams } from "react-router-dom";
import { H3 } from "@leafygreen-ui/typography";
import RecipeCard from "../components/RecipeCard";

import recipes from "../data/recipes.json";

export default function Recipe() {
  const { recipeId } = useParams();

  let recipe = recipes.find(r => r._id.toString() === recipeId);

  return  (
    <React.Fragment>
      <RecipeCard {...recipe} />
      <H3>Ingredients</H3>
      <ul>
        {recipe.ingredients.map(ingredient => (
          <li>{ingredient.qty} {ingredient.unit} {ingredient.name} {ingredient.note ? `(${ingredient.note})` : ""}</li>
        ))}
      </ul>
      <H3>Instructions</H3>
      <ul>
        {recipe.instructions.map(instruction => (
          <li>{instruction}</li>
        ))}
      </ul>
    </React.Fragment>
  )
}