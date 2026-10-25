import styled from "@emotion/styled";
import { Fragment } from "react";

const Table = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-content: center;
  text-align: center;
`;

export const Contacts = ({ contacts }) => {
  return (
    <Table>
      {contacts.map((item, index) => (
        <Fragment key={index}>
          <div>{item.name}</div>
          <div>{item.surname}</div>
          <div>{item.phoneNumber}</div>
        </Fragment>
      ))}
    </Table>
  );
};

export default Contacts;