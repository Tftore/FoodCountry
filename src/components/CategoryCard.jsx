import { Link } from "react-router";
import styled from "@emotion/styled";

const StyledLink = styled(Link)`
  box-shadow: 5px 5px 20px gray;
  padding: 20px;
`;

export const CategotyCard = ({ cat }) => {
  return (
    <StyledLink to={`/category/${cat.idCategory}`}>
      <div className="thumb">
        <img src={cat.strCategoryThumb} alt="" />
      </div>
      <p>{cat.strCategory}</p>
    </StyledLink>
  );
};
