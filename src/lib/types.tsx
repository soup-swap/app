export interface Group {
  group_id: number;
  group_name: string;
  group_description: string;
}

export interface Recipe {
  recipe_id: number;
  recipe_name: string;
  ingredients: Ingredient[];
  instructions: string;
}

export interface Ingredient {
  name: string;
  quantity: number;
  unit: UnitOption;
}

export const UNIT_TEASPOON = "tsp";
export const UNIT_TABLESPOON = "tbsp";
export const UNIT_CUP = "cup";
export const UNIT_OUNCE = "oz";
export const UNIT_GRAM = "g";
export const UNIT_PACKAGE = "package";
export const UNIT_BOX = "box";
export const UNIT_CONTAINER = "container";
export const UNIT_BAG = "bag";

export type UnitOption =
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
