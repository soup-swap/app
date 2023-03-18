import { Ingredient, UNIT_TEASPOON } from "@/lib/types";
import { useForm, useFieldArray } from "react-hook-form";

interface RecipeFormData {
  recipeName: string;
  ingredients: Ingredient[];
  instructions: string;
}

export default function CreateRecipePage() {
  const {
    handleSubmit,
    control,
    register,
    formState: { errors },
  } = useForm<RecipeFormData>();

  const {
    fields: ingedientsFields,
    append: appendIngredient,
    remove: removeIngredient,
  } = useFieldArray({ control, name: "ingredients" });

  const handleAddNewIngredient = () => {
    appendIngredient({ name: "", quantity: 0, unit: "" });
  };

  const onSubmit = (values) => console.log(values);

  return (
    <main>
      <h1>Add Recipe</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="recipeName">Recipe Name</label>
          <input
            {...register("recipeName", {
              required: true,
            })}
          />
        </div>
        <label htmlFor="ingredientsList">Ingredients</label>
        <ul>
          {ingedientsFields.map((field, index) => (
            <li key={`ingredientsList.${index}`}>
              <div>
                <input
                  type="number"
                  placeholder="0"
                  {...register(`ingredients.${index}.quantity`)}
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder={UNIT_TEASPOON}
                  {...register(`ingredients.${index}.unit`)}
                />
              </div>
              <div>
                <input
                  placeholder="My cool ingredient"
                  {...register(`ingredients.${index}.name`)}
                />
              </div>
              <div>
                <button onClick={() => removeIngredient(index)}>Remove</button>
              </div>
            </li>
          ))}
        </ul>
        <button onClick={handleAddNewIngredient}>
          + add another ingredient
        </button>
        <div>
          <label htmlFor="instructions">Instructions</label>
          <textarea
            {...register("instructions", {
              required: true,
            })}
          />
        </div>
        <button type="submit">Save</button>
      </form>
    </main>
  );
}
