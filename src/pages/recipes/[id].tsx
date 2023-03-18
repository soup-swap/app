import { Ingredient, Recipe } from "@/lib/types";
import { FC } from "react";

interface RecipeDetailsPageProps {
  recipe: Recipe;
}

export const getServerSideProps = () => {
  return {
    props: {
      recipe: [
        {
          id: 2,
          name: "Clamato Chowder",
          ingredients: [
            {
              name: "Tomato Juice",
              quantity: 2,
              unit: "Cups",
            },
          ],
        },
      ],
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
      <h1>{recipe.name}</h1>
      <h2>Ingredients</h2>
      <IngredientsList ingredients={recipe.ingredients} />
      <h2>Instructions</h2>
      <p>{recipe.instructions}</p>
    </div>
  );
};

export default RecipeDetailsPage;
