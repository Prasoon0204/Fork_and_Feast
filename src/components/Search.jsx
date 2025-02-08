import { useState } from "react"
import IngredientsList from "./IngredientsList"
import ClaudeRecipe from "./ClaudeRecipe"
import { getRecipeFromAI} from "../ai"

const Search = () => {

    const [ingredients, setIngredients] = useState([])
    const [recipe, setRecipe] = useState("");

    function addIngredient(formData){
        const newIngredient = formData.get("ingredient")
        if(newIngredient !== "") setIngredients((ingredients) => [...ingredients, newIngredient]);
    }

    async function getRecipe(){
        const value = await getRecipeFromAI(ingredients)
        setRecipe(value)
    }

  return (
    <div className="p-8 pb-0">
        <form action={addIngredient} className="sm:flex justify-center gap-4 mb-4 mx-4">
            <input className="rounded-md w-full sm:max-w-[400px] mb-2 sm:mb-0 flex-grow border-2 border-gray-200 px-4" type="text" placeholder="e.g. oregano" name="ingredient" />
            <button className="w-full sm:max-w-[180px] rounded-md bg-black text-white py-2 px-8 text-sm">+ Add ingredient</button>
        </form>
        {ingredients.length > 0 && <IngredientsList ingredients = {ingredients} getRecipe={getRecipe} />}
        {recipe !== "" && <ClaudeRecipe recipe = {recipe} />}
    </div>
  )
}

export default Search