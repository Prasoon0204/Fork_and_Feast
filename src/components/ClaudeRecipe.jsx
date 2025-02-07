/* eslint-disable react/prop-types */
import ReactMarkdown from 'react-markdown'
const ClaudeRecipe = (props) => {
  return (
    <section>
      <div className="py-4">
        <h2 className="font-bold sm:text-3xl text-2xl pb-4">Chef Claude Recommends:</h2>
        <article className="suggested-recipe-container" aria-live="polite">
          <ReactMarkdown>
          {props.recipe}
          </ReactMarkdown>
        </article>
      </div>
    </section>
  )
}

export default ClaudeRecipe