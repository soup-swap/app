import { useForm, useFieldArray } from "react-hook-form";
import Image from 'next/image'
import XIcon from "../../assets/x-icon.png"
import styles from "./newrecipe.module.scss"

const UNIT_TEASPOON = "tsp";
const UNIT_TABLESPOON = "tbsp";
const UNIT_CUP = "cup";
const UNIT_OUNCE = "oz";
const UNIT_GRAM = "g";
const UNIT_PACKAGE = "package";
const UNIT_BOX = "box";
const UNIT_CONTAINER = "container";
const UNIT_BAG = "bag";

type UnitOption =
  | typeof UNIT_TEASPOON
  | typeof UNIT_TABLESPOON
  | typeof UNIT_CUP
  | typeof UNIT_OUNCE
  | typeof UNIT_GRAM
  | typeof UNIT_PACKAGE
  | typeof UNIT_BOX
  | typeof UNIT_CONTAINER
  | typeof UNIT_BAG
  | string;

interface Ingredient {
  name: string;
  quantity: number;
  unit: UnitOption;
}

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
    <main className={styles.recipeMain}>
      <h1>Add Recipe</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.recipeName}>
          <label htmlFor="recipeName">Recipe Name</label>
          <input
            {...register("recipeName", {
              required: true,
            })}
          />
        </div>
        <div className={styles.ingredientsList}>
          <div>
            <label htmlFor="ingredientsList">Ingredients</label>
            <ul>
              {ingedientsFields.map((field, index) => (
                <li key={`ingredientsList.${index}`}>
                  <div>
                    <input
                      type="number"
                      placeholder="0"
                      step="0.01"
                      {...register(`ingredients.${index}.quantity`)}
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder={`ex: ${UNIT_TEASPOON}`}
                      {...register(`ingredients.${index}.unit`)}
                    />
                  </div>
                  <div>
                    <input
                      placeholder="My cool ingredient"
                      {...register(`ingredients.${index}.name`)}
                    />
                  </div>
                  <button className={styles.removeIngredient} onClick={() => removeIngredient(index)}>
                    <Image
                      src={XIcon}
                      alt="Remove"
                      className={styles.xIcon}
                    />
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <button className={styles.addIngredient} onClick={handleAddNewIngredient}>
            + add ingredient
          </button>
        </div>
        <div className={styles.instructions}>
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
