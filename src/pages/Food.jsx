import { Container } from "../components/Container";
import { Cover } from "../components/Cover";
import { useParams } from "react-router";
import { getMealByID } from "../service/API";
import { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { generateIngredients } from "../service/generateIngridients";
import { useDispatch } from "react-redux";
import { enableLoader, disableLoader } from "../redux/slices";

const MealInfo = styled(Container)`
  display: flex;
  justify-content: space-between;
  .info {
    display: flex;
    gap: 20px;
    font-size: 20px;
    font-weight: 700;
  }
  .thumb {
    width: 40%;
  }
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  .name {
    width: 20%;
  }
  .count {
    width: 80%;
  }
  td,
  th {
    border: 2px solid black;
    padding: 10px;
  }
`;

const Instructions = styled(Container)`
  p {
    text-align: justify;
  }
`;

export const Food = () => {
  const { id } = useParams();
  const [meal, setMeal] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      dispatch(enableLoader());
      const data = await getMealByID(id);
      setMeal(data);
      dispatch(disableLoader());
    })();
  }, [id, dispatch]);

  return (
    <Cover>
      {meal && (
        <>
          <MealInfo>
            <div>
              <h1>{meal.strMeal}</h1>
              <div className="info">
                <p>Категорія:</p>
                <p>{meal.strCategory}</p>
              </div>
              <div className="info">
                <p>Країна:</p>
                <p>{meal.strCountry}</p>
              </div>
              <div className="info">
                <p>Регіон:</p>
                <p>{meal.strArea}</p>
              </div>
            </div>
            <div className="thumb">
              <img src={meal.strMealThumb} alt="" />
            </div>
          </MealInfo>
          <Container>
            <h2>Інредієнти</h2>
            <Table>
              <tr>
                <th className="name">Назва</th>
                <th className="count">Кількість</th>
              </tr>
              {generateIngredients(meal).map((item) => (
                <tr key={item.ingredient}>
                  <td>{item.ingredient}</td>
                  <td>{item.measure}</td>
                </tr>
              ))}
            </Table>
          </Container>
          <Instructions>
            <h2>Рецепт</h2>
            <p className="instruction">{meal.strInstructions}</p>
          </Instructions>
        </>
      )}
    </Cover>
  );
};
