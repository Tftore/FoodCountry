import { Container } from "../components/Container";
import { Cover } from "../components/Cover";
import { useState, useEffect } from "react";
import { getCategories } from "../service/API";
import { useDispatch } from "react-redux";
import { enableLoader, disableLoader } from "../redux/slices";
import { CategotyCard } from "../components/CategoryCard";
import styled from "@emotion/styled";

const CategoryList = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
`;

export const Categoryes = () => {
  const [categories, setCategories] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      dispatch(enableLoader());
      const cat = await getCategories();
      setCategories(cat);
      dispatch(disableLoader());
    })();
  }, [dispatch]);

  return (
    <Cover>
      <Container>
        <h1>Категорії</h1>
        <CategoryList>
          {categories.map((item) => (
            <CategotyCard key={item.idCategory} cat={item} />
          ))}
        </CategoryList>
      </Container>
    </Cover>
  );
};
