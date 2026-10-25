import { Cover } from "../components/Cover";
import { Container } from "../components/Container";
import { getRandomMeal } from "../service/API";
import { useEffect, useState } from "react";
import { MealCard } from "../components/MealCard";
import styled from "@emotion/styled";
import { useDispatch } from "react-redux";
import { enableLoader, disableLoader } from "../redux/slices";

export const MealList = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
`;

export const Main = () => {
  const [meals, setMeals] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      dispatch(enableLoader());
      const meals = await getRandomMeal(12);
      setMeals(meals);
      dispatch(disableLoader());
    })();
  }, [dispatch]);
  return (
    <Cover>
      <Container>
        <h1>this is main</h1>
        <MealList>
          {meals.map((item) => (
            <MealCard key={item.idMeal} meal={item} />
          ))}
        </MealList>
      </Container>
    </Cover>
  );
};
