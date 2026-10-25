import { useState } from "react";
import styled from "@emotion/styled";
import { getCountryInfo } from "../service/countryData";

const Wrapper = styled.div`
  margin-top: 15px;
`;

const Toggle = styled.button`
  cursor: pointer;
  border: 1px solid black;
  border-radius: 20px;
  background: white;
  padding: 6px 14px;
  font-weight: 700;
`;

const Menu = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 100%;
  z-index: 10;
  margin-top: 5px;
  padding: 15px;
  text-align: left;
  font-weight: 400;
  background: white;
  border: 1px solid black;
  border-radius: 10px;
  box-shadow: 5px 5px 20px gray;
  & .dish {
    margin: 0 0 8px;
    font-size: 18px;
    font-weight: 700;
  }
  & .text {
    margin: 0;
  }
`;

export const CountryFood = ({ area }) => {
  const [open, setOpen] = useState(false);
  const info = getCountryInfo(area);

  if (!info) return null;

  return (
    <Wrapper>
      <Toggle type="button" onClick={() => setOpen((prev) => !prev)}>
        Державна страва {open ? "▲" : "▼"}
      </Toggle>
      {open && (
        <Menu>
          <p className="dish">{info.dish}</p>
          <p className="text">{info.description}</p>
        </Menu>
      )}
    </Wrapper>
  );
};