export const generateIngredients = (meal) => {
  const arr = [];
  for (let i = 1; i <= 20; i++) {
    if (meal[`strIngredient${i}`]) {
      arr.push({
        ingredient: meal[`strIngredient${i}`],
        measure: meal[`strMeasure${i}`],
      });
    }
  }
  return arr;
};
