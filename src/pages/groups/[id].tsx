import { supabase } from "@/lib/supabaseClient";
import { Group, Recipe } from "@/lib/types";
import Link from "next/link";
import { FC } from "react";

export const getServerSideProps = async ({ params }) => {
  const groupFetch = supabase
    .from("groups")
    .select()
    .eq("group_id", params.id)
    .single();

  const recipesFetch = supabase.from("recipes").select();

  const [groupResult, recipesResult] = await Promise.all([
    groupFetch,
    recipesFetch,
  ]);

  return {
    props: {
      groupInfo: groupResult.data,
      groupRecipes: recipesResult.data,
    },
  };
};

export const RecipesList: FC<{ recipes: Recipe[] }> = ({ recipes }) => {
  return (
    <ul>
      {recipes.map((recipe) => (
        <Link key={recipe.recipe_id} href={`/recipes/${recipe.recipe_id}`}>
          <li>{recipe.recipe_name}</li>
        </Link>
      ))}
    </ul>
  );
};

interface GroupDetailsPageProps {
  groupInfo: Group;
  groupRecipes: Recipe[];
}

const GroupDetailsPage: FC<GroupDetailsPageProps> = ({
  groupInfo,
  groupRecipes,
}) => {
  return (
    <div>
      <div className="group-summary">
        <h1>{groupInfo.group_name}</h1>
        <p>{groupInfo.group_description}</p>
      </div>
      <div className="group-recipes">
        <h2>Recipes</h2>
        <RecipesList recipes={groupRecipes} />
      </div>
    </div>
  );
};

export default GroupDetailsPage;
