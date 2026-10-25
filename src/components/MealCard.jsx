import styled from "@emotion/styled";
import { NavLink } from "react-router";

const StyledCard = styled(NavLink)`
  border: 1px solid black;
  text-align: center;
  border-radius: 20px;
  overflow: hidden;
  color: black;
  text-decoration: none;
  .title {
    border-top: 1px solid black;
    margin: 0;
    padding-top: 20px;
    padding-bottom: 20px;
  }
`;

export const MealCard = ({ meal }) => {
  return (
    <StyledCard to={`/food/${meal.idMeal}`}>
      <div className="thumb">
        <img src={meal.strMealThumb} alt="" />
      </div>
      <p className="title">{meal.strMeal}</p>
    </StyledCard>
  );
};
