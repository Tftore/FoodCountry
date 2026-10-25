import axios from "axios";

export const getRandomMeal = async (count) => {
  try {
    const result = [];
    for (let i = 0; i < count; i++) {
      const meal = await axios.get(
        "https://www.themealdb.com/api/json/v1/1/random.php",
      );
      result.push(meal.data.meals[0]);
    }
    return result;
  } catch (err) {
    console.log(err.message);
    return [];
  }
};

export const getMealByID = async (id) => {
  try {
    const meal = await axios.get(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`,
    );
    return meal.data.meals[0];
  } catch (err) {
    console.log(err.message);
  }
};

export const getCategories = async () => {
  try {
    const data = await axios.get(
      "https://www.themealdb.com/api/json/v1/1/categories.php",
    );
    return data.data.categories;
  } catch (err) {
    console.log(err.message);
  }
};

export const getCategoryById = async (id) => {
  const data = await getCategories();
  return data.find((item) => item.idCategory === id);
};

export const getmeadlByCategory = async (catName) => {
  try {
    const response = await axios.get(
      "https://www.themealdb.com/api/json/v1/1/filter.php",
      {
        params: {
          c: catName,
        },
      }
    );
    return response.data.meals;
  } catch (err) {
    console.log(err.message);
  }
};

export const getCountries = async () => {
  try {
    const response = await axios.get(
      "https://www.themealdb.com/api/json/v1/1/list.php",
      {
        params: {
          a: "list",
        },
      },
    );
    return response.data.meals;
  } catch (err) {
    console.log(err.message);
    return [];
  }
};
