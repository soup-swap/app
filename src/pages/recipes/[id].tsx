import { supabase } from "@/lib/supabaseClient";
import { Ingredient, Recipe } from "@/lib/types";
import { FC } from "react";

interface RecipeDetailsPageProps {
  recipe: Recipe;
}

export const getServerSideProps = async ({ params }) => {
  const result = await supabase
    .from("recipes")
    .select()
    .eq("recipe_id", params.id)
    .single();

  return {
    props: {
      recipe: result.data,
    },
  };
};

interface IngredientsListProps {
  ingredients: Ingredient[];
}

const IngredientsList: FC<IngredientsListProps> = ({ ingredients }) => {
  return (
    <ul>
      {ingredients.map((ingredient, index) => (
        <li key={index}>
          {ingredient.quantity} {ingredient.unit} {ingredient.name}
        </li>
      ))}
    </ul>
  );
};

const RecipeDetailsPage: FC<RecipeDetailsPageProps> = ({ recipe }) => {
  return (
    <div>
      <h1>{recipe.recipe_name}</h1>
      <h2>Ingredients</h2>
      <IngredientsList ingredients={recipe.ingredients} />
      <h2>Instructions</h2>
      <p>{recipe.instructions}</p>
    </div>
  );
};

export default RecipeDetailsPage;
