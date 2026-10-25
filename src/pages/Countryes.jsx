import { Container } from "../components/Container";
import { Cover } from "../components/Cover";
import { useState, useEffect } from "react";
import { getCountries } from "../service/API";
import { useDispatch } from "react-redux";
import { enableLoader, disableLoader } from "../redux/slices";
import styled from "@emotion/styled";
import { CountryFood } from "./CountryFood";
import { getCountryInfo, getWikiUrl } from "../service/countryData";

const LetterTitle = styled.h2`
  margin: 40px 0 15px;
  padding-bottom: 5px;
  border-bottom: 2px solid gray;
`;

const CountryList = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
`;

const CountryCard = styled.div`
  position: relative;
  box-shadow: 5px 5px 20px gray;
  padding: 20px;
  text-align: center;
  font-weight: 700;
  & a {
    color: black;
  }
`;

// Групуємо країни за першою англійською літерою (A, B, C ...)
const groupByLetter = (countries) => {
  const sorted = [...countries].sort((a, b) =>
    a.strArea.localeCompare(b.strArea),
  );
  const groups = {};
  sorted.forEach((item) => {
    const letter = item.strArea[0].toUpperCase();
    if (!groups[letter]) {
      groups[letter] = [];
    }
    groups[letter].push(item);
  });
  return Object.entries(groups);
};

export const Countryes = () => {
  const [countries, setCountries] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      dispatch(enableLoader());
      const data = await getCountries();
      setCountries(data);
      dispatch(disableLoader());
    })();
  }, [dispatch]);

  return (
    <Cover>
      <Container>
        <h1>Країни</h1>
        {groupByLetter(countries).map(([letter, items]) => (
          <div key={letter}>
            <LetterTitle>{letter}</LetterTitle>
            <CountryList>
              {items.map((item) => (
                <CountryCard key={item.strArea}>
                  <a
                    href={getWikiUrl(item.strArea)}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {getCountryInfo(item.strArea)?.country || item.strArea}
                  </a>
                  <CountryFood area={item.strArea} />
                </CountryCard>
              ))}
            </CountryList>
          </div>
        ))}
      </Container>
    </Cover>
  );
};