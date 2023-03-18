import { Group, Recipe } from "@/lib/types";
import { group } from "console";
import Link from "next/link";
import { FC } from "react";

export const getServerSideProps = () => {
  return {
    props: {
      groupInfo: {
        id: 1,
        name: "Souperheroes",
        description: "🍜 Broths Over Brawn 💪",
      },
      groupRecipes: [
        {
          id: 1,
          name: "Mom's Classic Vape Juice Boullion",
        },
        {
          id: 2,
          name: "Clamato Chowder",
        },
      ],
    },
  };
};

export const RecipesList: FC<{ recipes: Recipe[] }> = ({ recipes }) => {
  return (
    <ul>
      {recipes.map((recipe) => (
        <Link key={recipe.name} href={`recipes/${recipe.id}`}>
          <li>{recipe.name}</li>
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
        <h1>{groupInfo.name}</h1>
        <p>{groupInfo.description}</p>
      </div>
      <div className="group-recipes">
        <h2>Recipes</h2>
        <RecipesList recipes={groupRecipes} />
      </div>
    </div>
  );
};

export default GroupDetailsPage;
