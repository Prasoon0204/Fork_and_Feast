/* eslint-disable react/prop-types */
const IngredientsList = (props) => {
    const ingredientsListItems = props.ingredients.map((ingredient, i) => (
        <li className="list-disc text-gray-500 pb-4" key={i}>
            <div className="flex gap-8 justify-between w-[18%]">
                <p>{ingredient}</p>
                <button onClick={() => props.delete(i)}>❎</button>
            </div>
        </li>
    ))
  return (
    <section className="flex flex-col">
        <h2 className="font-bold sm:text-3xl text-2xl pb-4">Ingredients on hand : </h2>
        <ul className="pl-11 pb-4"> {ingredientsListItems} </ul>
        {props.ingredients.length > 3 && <div className="bg-[#f0efeb] flex flex-col sm:flex-row p-8 gap-4 rounded-lg justify-between sm:items-center">
            <div>
                <h3 className="font-semibold text-xl">Ready for a recipe?</h3>
                <p className="text-gray-500">Generate a recipe from your list of ingredients.</p>
            </div>
            <button onClick={props.getRecipe} className="bg-[#d17556] text-white font-semibold px-5 py-2 rounded-lg">Get a recipe</button>
        </div>}
    </section>
  )
}

export default IngredientsList