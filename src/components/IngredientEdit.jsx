function IngredientEdit(props) {
  const { ingredient, handleIngredientChange, handleIngredientDelete } = props;

  function handleChange(changes) {
    handleIngredientChange(ingredient.id, { ...ingredient, ...changes });
  }

  return (
    <>
      <input
        type="text"
        value={ingredient.name ?? "New Ingredient"}
        placeholder="Name Of Ingredient"
        onInput={(e) => {
          handleChange({ name: e.target.value });
          e.target.focus();
        }}
      />
      <input
        type="text"
        value={ingredient.quantity ?? "New Amount"}
        placeholder="Amount Of Ingredient"
        onInput={(e) => {
          handleChange({ quantity: e.target.value });
          e.target.focus();
        }}
      />
      <button
        className="button dan
      ger-btn"
        onClick={() => handleIngredientDelete(ingredient.id)}
      >
        &times;
      </button>
    </>
  );
}

export default IngredientEdit;
