import { Cover } from "../components/Cover";
import { Container } from "../components/Container";
import { useParams } from "react-router";
import { useState, useEffect } from "react";
import { getCategoryById, getmeadlByCategory } from "../service/API";
import styled from "@emotion/styled";
import { MealCard } from "../components/MealCard";

const Description = styled.div`
  display: flex;
  & div {
    flex-grow: 0;
    width: 50%;
  }
`;

const Food = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
`;

export const Category = () => {
  const { id } = useParams();
  const [cat, setCat] = useState(null);
   const [meals, setMeals] = useState([]);
  useEffect(() => {
    (async () => {
      const cat = await getCategoryById(id);
      const meals = await getmeadlByCategory(cat.strCategory);
      setMeals(meals);
      setCat(cat);
    })();
  }, [id]);

  return (
    <Cover>
      <Container>
        {cat && (
          <>
        <Description>
          <div>
            <h1>{cat.strCategory}</h1>
            <p>{cat.strCategoryDescription}</p>
          </div>
          <div>
            <img src={cat.strCategoryThumb} alt=""></img>
          </div>
        </Description>
        <Food>
  {meals.map((item) => (
    <MealCard key={item.idMeal} meal={item} />
  ))}
        </Food> 
          </>
        )}
      </Container>
    </Cover>
  );
};
